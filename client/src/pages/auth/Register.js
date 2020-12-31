import React, { useState, useEffect } from "react";
import { auth , googleAuthProvider} from  "../../firebase";
import { toast } from "react-toastify";
import { useDispatch,useSelector } from "react-redux";
import { Button } from "antd";
import { MailOutlined, GoogleOutlined } from "@ant-design/icons";
import { GoMail } from "react-icons/go";

import { createOrUpdateUser } from "../../functions/auth";


const Register = ({history}) => {
  const [email, setEmail] = useState("mayank95866@gmail.com");
  const {user} =useSelector((state) => ({...state}))
  useEffect(() => {
    if(user &&user.token) history.push('/')
},[user])


  let dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();  // prevent auto reload
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration.`
    );
    // save user email in local storage
    window.localStorage.setItem("emailForRegistration", email);
  
    // clear state
    setEmail("");
    
  };

  

  const googleLogin = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
        createOrUpdateUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch();
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        placeholder="Enter Your Email Id Here"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
      />
        
      <button type="submit" className="btn btn-raised">
        Register
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          

          {registerForm()}
          <br />
          <Button
            onClick={googleLogin}
            type="danger"
            className="mb-3"
            block
            shape="round"
            icon={<GoogleOutlined />}
            size="large"
          >
            Continue with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
