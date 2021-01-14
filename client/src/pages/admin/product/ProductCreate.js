import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createProduct } from "../../../functions/product";

import ProductCreateForm from "../../../components/forms/ProductCreateForm";
import { getBrands, getBrandModels } from "../../../functions/brand";


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
    years: [  "2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020",],
    year: "",
}

const ProductCreate = () => {
  const [values, setValues] = useState(initialState);
  const [modelOptions, setModelOptions] = useState([]);
  const [showModel, setShowModel] = useState(false);
  
  
  
  

  // redux
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadBrands();
  }, []);

  const loadBrands = () =>
    getBrands().then((b) => setValues({ ...values, brands: b.data }));

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(values, user.token)
      .then((res) => {
        console.log(res);
        window.alert(`"${res.data.title}" is created`);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        // if (err.response.status === 400) toast.error(err.response.data);
        toast.error(err.response.data.err);
      });
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
    setShowModel(true);
  };


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col-md-10">
          <h4>Product create</h4>
          <hr />

          {JSON.stringify(values.models)}

          <ProductCreateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setValues={setValues}
            values={values}
            handleBrandChange={handleBrandChange}
      
            modelOptions={modelOptions}
            showmodel={showModel}
          
        
            
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
