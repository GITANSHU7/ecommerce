import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getProduct } from "../../../functions/product";

import {LoadingOutlined} from "@ant-design/icons";
import ProductUpdateForm from "../../../components/forms/ProductUpdateForm";



const initialState = {
  title: "",
  manufacturer : "",
  types : ["Engine Oil" , "Air Filter", "Tyre","Oil Filter","Battery", "Spares and Maintainance Kit", "Accessories"],
  type : "",
  description: "",
  price : "",
  brands: [],
models:[],
transmissions: ["Automatic" , "Manual"],
      shipping:"",
  fuels: ["Petrol" , "Diesel" ,"CNG" , "Electric"],
  fuel: "",
  quantity: "",
  years: [  "2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"],
  year: "",
  images: []
}

const ProductUpdate = ({match}) => {
 //state
 
 const [values, setValues] = useState(initialState);
 



  // redux
  const { user } = useSelector((state) => ({ ...state }));

const { slug } = match.params;

useEffect(() => {
  loadProduct();
} , []);

const loadProduct = () => {
  getProduct(slug).then((p) => {
    //console.log("single Product" ,p)
    setValues({...values, ...p.data});
  })
}

const handleSubmit = (e) => {
  e.preventDefault();
  //
};

const handleChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });
  // console.log(e.target.name, " ----- ", e.target.value);
};



  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col-md-10">
        <h4>Product Update</h4>
         
         {JSON.stringify(values)} 
        <ProductUpdateForm 
handleSubmit={handleSubmit}
handleChange={handleChange}
setValues={setValues}
values={values}



/>
          <hr />

     
             </div>
            
       
        </div>
      </div>
    
  );
};

export default ProductUpdate;
