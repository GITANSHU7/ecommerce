import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createProduct } from "../../../functions/product";


const initaialState = {
    title: "",
    manufacturer : "",
    type : [],
    slug : "",
    description: "",
    price : "",
    brand: [],
    model:[],
    transmission: [],
    fuel: [],
    shipping:"",
year: [],
quantity: "",

}



const ProductCreate = () => {
    const [values,setValues] = useState(initaialState);

    // destructure
  const {
    title,
    manufacturer,
    type ,
    slug ,
    description,
    price ,
    brand,
    model,
    transmission,
    fuel,
    shipping,
year,
quantity,
images,
  } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

  const handleChange = (e) => {
    //
  };


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col-md-10">product create form</div>
      </div>
    </div>
  );
};

export default ProductCreate;
