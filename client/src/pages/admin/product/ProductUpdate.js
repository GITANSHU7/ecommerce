import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getProduct } from "../../../functions/product";

import {LoadingOutlined} from "@ant-design/icons";
import ProductUpdateForm from "../../../components/forms/ProductUpdateForm";
import { getBrandModels, getBrands } from "../../../functions/brand";
import FileUpload from "../../../components/forms/FileUpload";



const initialState = {
  title: "",
  manufacturer : "",
  types : ["Engine Oil" , "Air Filter", "Tyre","Oil Filter","Battery", "Spares and Maintainance Kit", "Accessories"],
  type : "",
  description: "",
  price : "",
  brand:"",
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
 const [brands,setBrands] = useState([]);
 const [modelOptions, setModelOptions] = useState([]);
  const [arrayOfModels, setArrayOfModels]=useState([])

  const [loading , setLoading] = useState(false)


  // redux
  const { user } = useSelector((state) => ({ ...state }));

const { slug } = match.params;

useEffect(() => {
  loadProduct();
  loadBrands();
  },[]);

const loadProduct = () => {
  getProduct(slug).then((p) => {
    //console.log("single Product" ,p)
    //load 1 product
    setValues({...values, ...p.data});
    getBrandModels(p.data.brand._id).then((res) => {
      setModelOptions(res.data) //on first load. show def
    });
    //array of models
    let arr = []
    p.data.models.map((m) => {
      arr.push(m._id);
    })
    console.log("ARR" , arr);
    setArrayOfModels((prev) => arr); // for ant design
  })
}

const loadBrands = () =>
    getBrands().then((b) => {
      console.log("Get brands" , b.data);
      setBrands(b.data)
    }
    
    );


const handleSubmit = (e) => {
  e.preventDefault();
  //
};

const handleChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });
  // console.log(e.target.name, " ----- ", e.target.value);
};
const handleBrandChange = (e) => {
  e.preventDefault();
  console.log("CLICKED BRAND", e.target.value);
  setValues({ ...values, models: [], brand: e.target.value });
  getBrandModels(e.target.value).then((res) => {
    console.log("Model OPTIONS ON BRAND CLICK", res);
    setModelOptions(res.data);
  });
  
};



  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col-md-10">
        <h4>Product Update</h4>
         
        
        <div className="p-3">
             <FileUpload  values = {values} setValues = {setValues}  setLoading = {setLoading} />

             </div>


        <ProductUpdateForm 
handleSubmit={handleSubmit}
handleChange={handleChange}
setValues={setValues}
values={values}
handleBrandChange={handleBrandChange}
brands={brands}
modelOptions={modelOptions}
arrayOfModels={arrayOfModels}
setArrayOfModels = {setArrayOfModels}



/>
          <hr />

     
             </div>
            
       
        </div>
      </div>
    
  );
};

export default ProductUpdate;
