import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import LoadingCard from "../../components/cards/LoadingCard";
import { auth, googleAuthProvider } from "../../firebase";
import { createOrUpdateUser } from "../../functions/auth";
import "./testin2.css";



const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user]);

  let dispatch = useDispatch();
  const roleBasedRedirect =(res) => {
    if (res.data.role === "admin") {
      history.push("/admin/dashboard")
    } else {
      history.push("/user/history")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.table(email, password);
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      // console.log(result);
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
          roleBasedRedirect(res);
        })
        .catch(err => console.log(err));

      history.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
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
            roleBasedRedirect(res);
          })
          .catch(err => console.log(err));
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const loginForm = () => {
    return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div className="card card0 border-0">
        <div className="row d-flex">
            <div className="col-lg-6">
                <div className="card1 pb-5">
                    <div className="row"> <img src="https://i.imgur.com/LdtVNMz.png" className="logo" /> </div>
                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/QnwsmeF.png" className="image"/> </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card2 card border-0 px-4 py-5">
                    <div className="row mb-4 px-3">
                        <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                        <div className="facebook text-center mr-3">
                        <i className="fab fa-google"  onClick={googleLogin}></i>
                        </div>
                        
                    </div>
                    <div className="row px-3 mb-4">
                        <div className="line"></div> <small className="or text-center">Or</small>
                        <div className="line"></div>
                    </div>
                    <div className="row px-3"> <label className="mb-1" onSubmit={handleSubmit}>
                            <h6 className="mb-0 text-sm">Email Address</h6>
                        </label> <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address"   value={email}
          onChange={(e) => setEmail(e.target.value)}
         /> </div>
                    <div className="row px-3"> <label className="mb-1" onSubmit={handleSubmit}>
                            <h6 className="mb-0 text-sm">Password</h6>
                        </label> <input type="password" name="password" placeholder="Enter password"  value={password}
          onChange={(e) => setPassword(e.target.value)}
         /> </div>
                    <div className="row px-3 mb-4">
                        <div className="custom-control custom-checkbox custom-control-inline">  </div> <a href="/forgot/password" className="ml-auto mb-0 text-sm text-danger">Forgot Password?</a>
                    </div>
                    <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue text-center"  onClick={handleSubmit} disabled={!email || password.length < 6}>Login</button> </div>
                    <div className="row mb-4 px-3"> <small className="font-weight-bold">Don't have an account? <a href= "/register" className="text-danger ">Register</a></small> </div>
                </div>
            </div>
        </div>
        <div className="bg-blue py-4">
            <div className="row px-3"> <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2021. All rights reserved.</small>
                <div className="social-contact ml-4 ml-sm-auto"> <span className="fa fa-facebook mr-4 text-sm"></span> <span className="fa fa-google-plus mr-4 text-sm"></span> <span className="fa fa-linkedin mr-4 text-sm"></span> <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
            </div>
        </div>
    </div>
</div>
    )};

  return (
    <div>
      {loading ? (
        <LoadingCard count = {6} /> 
      ) : (
        loginForm()
      )}
        
        </div>
  );
};

export default Login;
