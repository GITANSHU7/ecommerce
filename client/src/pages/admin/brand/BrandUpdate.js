import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  
  getBrand,
  updateBrand,
} from "../../../functions/brand";
import BrandForm from "../../../components/forms/BrandForm";




const BrandUpdate = ({history,match}) => {
  const { user } = useSelector((state) => ({ ...state }));

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
loadBrand()
  }, []);

  const loadBrand = () =>
    getBrand(match.params.slug).then((b) => setName(b.data.name));

   const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    setLoading(true);
    updateBrand(match.params.slug,{ name }, user.token)
      .then((res) => {
        // console.log(res)
        setLoading(false);
        setName("");
        toast.success(`"${res.data.name}" is updated Successfully`);
        history.push("/admin/brand")

    })
      .catch((err) => {
        console.log(err);  
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          {loading ? ( 
            <h4 className="text-danger">Loading..</h4>
          ) : (
            <h4>Update brand</h4>
          )}
          <BrandForm   handleSubmit={handleSubmit}
            name={name}
            setName={setName}/>
          <hr />
         </div>
      </div>
    </div>
  );
          }

  export default BrandUpdate;
