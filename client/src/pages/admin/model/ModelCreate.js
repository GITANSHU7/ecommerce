import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  createModel,
  getModels,
  removeModel,
} from "../../../functions/model";
import { Link } from "react-router-dom";
import {getBrands} from "../../../functions/brand";

import {EditOutlined , DeleteOutlined} from '@ant-design/icons';
import BrandForm from "../../../components/forms/BrandForm";
import LocalSearch from "../../../components/forms/LocalSearch";







const ModelCreate = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([]);  //list of brands which shows in select option
  const [brand,setBrand] = useState("");
  const [models,setModels] = useState([]);


  // step 1  for search
const [keyword,setKeyword] = useState("")


  useEffect(() => {
    loadBrands();
    loadModels();
  }, []);

  const loadBrands = () =>
    getBrands().then((b) => setBrands(b.data));

    const loadModels = () =>
    getModels().then((m) => setModels(m.data));


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    setLoading(true);
    createModel({ name , parent: brand }, user.token)
      .then((res) => {
        // console.log(res)
        setLoading(false);
        setName("");
        toast.success(`"${res.data.name}" is created Successfully`);
        loadModels();
        
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
        removeModel(slug,user.token)
        .then(res => {
            setLoading(false);
            toast.error(`${res.data.name} deleted successfully`)
            loadModels();
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
            <h4>Create Model</h4>
          )}

            <div className="form-group">
                <label>Choose Brand</label>
                <select name ="Choose Brand" className="form-control" onChange={e => setBrand(e.target.value)}>
                    <option>Select Brand</option>
                    {brands.length > 0 && brands.map((b) => <option key = {b._id} value={b._id}>{b.name}</option>)}
                </select>
            </div>
                    
          <BrandForm handleSubmit ={handleSubmit} name ={name} setName= {setName} />


{/* step 2 & 3 */}
       <LocalSearch keyword = {keyword} setKeyword = {setKeyword} />
          <hr />
         <button className="btn btn-outline-info"> {models.length}</button>
          <br />
          <br /> 
   {/* step 5    */}

          {models.filter(searched(keyword)).map((m) => (
              <div className="alert alert-primary" key={m._id}>{m.name}
              <span onClick ={() => handleRemove(m.slug)} className="btn btn-sm float-right" ><DeleteOutlined className="text-danger" /></span> <Link to={`/admin/model/model-update/${m.slug}`}><span className="btn btn-sm float-right" ><EditOutlined className="text-warning"/></span></Link>
              
              </div>
       ))}  
        </div>
      </div>
    </div>
  );
};

export default ModelCreate;
