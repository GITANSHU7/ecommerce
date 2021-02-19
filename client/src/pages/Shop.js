import React, { useState, useEffect } from "react";
import {
  getProductsByCount,
  fetchProductsByFilter,
} from "../functions/product";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/cards/ProductCard";

import { getBrandModels, getBrands } from "../functions/brand";
import { Menu, Slider, Checkbox , Radio} from "antd";
import { DollarOutlined, DownSquareOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { getModels } from "../functions/model"



const { Option } = Select;



const { SubMenu, ItemGroup } = Menu;

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState([0, 0]);
  const [ok, setOk] = useState(false);
  const [brands , setBrands] = useState([])
  const [brand, setBrand] = useState('')
  const [models , setModels] = useState([])
  const [model,setModel] = useState('')
  const [types , setTypes] = useState(["Engine Oil" , "Air Filter", "Tyre","Oil Filter","Battery", "Spares and Maintainance Kit", "Accessories"]);
  const [type,setType] = useState('')
  
  let dispatch = useDispatch();
  let { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  useEffect(() => {
    loadAllProducts();
    getBrands().then((res) => {
      setBrands(res.data)

    getModels().then((res) => setModels(res.data));
    })
  }, []);

  const fetchProducts = (arg) => {
    fetchProductsByFilter(arg).then((res) => {
      setProducts(res.data);
    });
  };

  // 1. load products by default on page load
  const loadAllProducts = () => {
    getProductsByCount(12).then((p) => {
      setProducts(p.data);
      setLoading(false);
    });
  };

  // 2. load products on user search input
  useEffect(() => {
    const delayed = setTimeout(() => {
      fetchProducts({ query: text });
    }, 300);
    return () => clearTimeout(delayed);
  }, [text]);


  // 3. load products based on price range
  useEffect(() => {
    console.log("ok to request");
    fetchProducts({ price });
  }, [ok]);

 const handleSlider = (value) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    //reset
    
    setPrice(value);
  setBrand("")
  setType("")
  setModel("")
    setTimeout(() => {
      setOk(!ok);
    }, 300);
  };   

// 4. load products based on category
  // show categories in a list of checkbox
    const showBrands = () =>
 brands.map((b) => (
   <div 
   key={b._id}
   onClick={() => handleBrand(b)}
   className ="p-1 m-1 badge badge-secondary"
   style={{cursor : "pointer"}}
   >
     {b.name}
     </div>
 ))    
 

 
// handle check for brands
const handleBrand = (brand) => {
  console.log(brand)
 setBrand(brand)
 dispatch({
  type: "SEARCH_QUERY",
  payload: { text: "" },
});
  setModel("");
  setType("");
setPrice([0,0]);
fetchProducts({ brand })
}

// for models
const showModels = () =>
models.map((m) => (
  <div
    key={m._id}
    onClick={() => handleModel(m)}
    className="p-1 m-1 badge badge-secondary"
    style={{ cursor: "pointer" }}
  >
    {m.name}
  </div>
));

const handleModel = (model) => {
setModel(model);
dispatch({
  type: "SEARCH_QUERY",
  payload: { text: "" },
});
setType("");
setBrand("");
setPrice([0, 0]);
fetchProducts({ model });
};


// show product types
const showTypes = () =>
    types.map((t) => (
      <Checkbox
        value={t}
        name={t}
        checked={t === type}
        onChange={handleType}
        className="pb-1 pl-4 pr-4"
      >
        {t}
      </Checkbox>
    ));

    const handleType = (e) => {
    
      dispatch({
        type: "SEARCH_QUERY",
        payload: { text: "" },
      });
      setPrice([0, 0]);
      setBrand("");
      setModel("");
      setType(e.target.value);
      fetchProducts({ type: e.target.value });
    };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 pt-2">
          <h4>Search/Filter</h4>
          <hr />

          <Menu defaultOpenKeys = {[ "1" , "2" , "3" , "4"]} mode="inline">
            <SubMenu
              Key = "1"
              title={
                <span className="h6 ">
                  <i className="fas fa-rupee-sign"></i> Price
                </span>
              }
            >
              <div>
                <Slider
                  className="ml-4 mr-4"
                  tipFormatter={(v) => `₹${v}`}
                  range
                  value={price}
                  onChange={handleSlider}
                  max="50000"
                style = {{color : "yellow"}}/>
          <h6 className = "text-center">₹{price[0]} to ₹{price[1]}</h6>       
              </div>
            </SubMenu>
            <SubMenu
              Key = "2"
              title={
                <span className="h6">
                  <DownSquareOutlined /> Choose Brand
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }} className="pl-4 pr-4">{showBrands()}</div>
            </SubMenu> 
            <SubMenu
               Key = "3"
              title={
                <span className="h6">
                  <DownSquareOutlined /> Choose Model
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }} className="pl-4 pr-4">
                {showModels()}
              </div>
            </SubMenu>
            <SubMenu
             Key = "4"
              title={
                <span className="h6">
                  <DownSquareOutlined /> Product Type
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }} className="pr-5">
                {showTypes()}
              </div>
            </SubMenu>

          </Menu>
        </div>

        <div className="col-md-9 pt-2">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4 className="text-danger">Products</h4>
          )}

          {products.length < 1 && <p>Filter product</p>}

          <div className="row pb-5">
            {products.map((p) => (
              <div key = {p._id} className="col-md-4 mt-3">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
