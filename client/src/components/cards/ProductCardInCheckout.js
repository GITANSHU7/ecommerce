import React from "react";
import ModalImage from "react-modal-image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../components/logo.png"

import { useSelector, useDispatch } from "react-redux";


const ProductCardInCheckout = ({ p }) => { 
    let dispatch = useDispatch();

  const handleQuantityChange = (e) => {
      //console.log("available Quantity" , p.quantity)
      
      
    // maximum allowed product for customers  
      let count = e.target.value < 1 ? 1: e.target.value;
      if(count > 10 ) {
        toast.error("Maximum purchase quantity");
        return;
    }
    
      let cart = [];
      if (typeof window !== "undefined") {
          if (localStorage.getItem("cart")){
              cart = JSON.parse(localStorage.getItem("cart"));
          }
          cart.map((product,i) => {
              if(product._id == p._id){
                  cart[i].count = count;
              }
          } );
          localStorage.setItem("cart" , JSON.stringify(cart));
          dispatch({
              type : "ADD_TO_CART",
              payload: cart,
          })
      }
  }
  const handleRemove = () => {
    let cart = [];
    if (typeof window !== "undefined") {
        if (localStorage.getItem("cart")){
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        cart.map((product,i) => {
            if(product._id === p._id){
                cart.splice(i,1);
            }
        } );
        localStorage.setItem("cart" , JSON.stringify(cart));
        dispatch({
            type : "ADD_TO_CART",
            payload: cart,
        })
    }
  }
  
  
  
    return (


    <tbody>
      <tr>
          <td>
              <div style = {{width:"100px" , height:"100px"}} >
              {p.images.length ? (
              <ModalImage small={p.images[0].url} large={p.images[0].url} />
            ) : (
              <ModalImage small={logo} large={logo} />
            )}</div>
          </td>

        
        <td>{p.title}</td>
        <td>₹{p.price}</td>
        <td>{p.manufacturer}</td>
        <td>{p.type}</td>
        <td className = "text-center">
            <input type="number" className="form-control" value = {p.count} onChange={handleQuantityChange} ></input>
            </td>
      
        <td>Shipping Icon</td>
        <td><i className="fas fa-trash-alt text-danger pointer" style={{fontSize:"1.5rem"}} onClick = {handleRemove} > </i></td>
      </tr>
    </tbody>
  );
};

export default ProductCardInCheckout;
