import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  createBrand,
  getBrands,
  removeBrand,
} from "../../../functions/brand";
import { Link } from "react-router-dom";

import {EditOutlined , DeleteOutlined} from '@ant-design/icons';
import BrandForm from "../../../components/forms/BrandForm";




const BrandCreate = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([]);


  // step 1  for search
const [keyword,setKeyword]


  useEffect(() => {
    loadBrands();
  }, []);

  const loadBrands = () =>
    getBrands().then((b) => setBrands(b.data));

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    setLoading(true);
    createBrand({ name }, user.token)
      .then((res) => {
        // console.log(res)
        setLoading(false);
        setName("");
        toast.success(`"${res.data.name}" is created Successfully`);
        loadBrands();  
    })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

const handleRemove = async(slug) => {
    if (window.confirm("Do you want to delete this")){
        setLoading(true);
        removeBrand(slug,user.token)
        .then(res => {
            setLoading(false);
            toast.error(`${res.data.name} deleted successfully`)
            loadBrands();
        })
        .catch((err) => {
            if (err.response.status === 400) 
            {
                setLoading(false);
                toast.error(err.response.data)
            }
        })
    }
};

// step 3

const  handleSearchChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase())
};

//step 4

const searched = (keyword) => (b) => b.name.toLowerCase().includes(keyword)


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav  />
        </div>
        <div className="col">
          {loading ? (
            <h4 className="text-danger">Loading..</h4>
          ) : (
            <h4>Create brand</h4>
          )}
          <BrandForm handleSubmit ={handleSubmit} name ={name} setName= {setName} />

         {/* step 2 search input */}
         <input type= "search" 
         placeholder="filter"
         value={keyword}
            onChange={handleSearchChange}
            className="form-control mb-4"
                />
          <hr />
         <button className="btn btn-outline-info"> {brands.length}</button>
          <br />
          <br />
          {brands.map((b) => (
              <div className="alert alert-primary" key={b._id}>{b.name}
              <span onClick ={() => handleRemove(b.slug)} className="btn btn-sm float-right" ><DeleteOutlined className="text-danger" /></span> <Link to={`/admin/brand/brand-update/${b.slug}`}><span className="btn btn-sm float-right" ><EditOutlined className="text-warning"/></span></Link>
              
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandCreate;
