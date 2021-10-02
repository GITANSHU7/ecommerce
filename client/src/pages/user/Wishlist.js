import React, { useState, useEffect } from "react";

import { getWishlist, removeWishlist } from "../../functions/user";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import _ from "lodash";

const Name = styled.h3`
float: left;
font-size: 20px;
margin-top: 5px;
margin-top : 5px;
`;

const Gallery = styled.div`
display: flex;
      flex-wrap: wrap;
   
      justify-content: center;
      align-items: center;
      `;

const Content = styled.div`
margin: 15px;
box-sizing: border-box;
float: left;
text-align: center;
border-radius:10px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
padding-top: 10px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
transition: .4s;
`;


const Image = styled.img`
width: 100%;
height: 200px;
text-align: center;
margin: 0 auto;
display: block;
`;

const Price = styled.h6`
font-size: 15px;
float: right;
color: #222f3e;
margin: 0;
`;
const BUTTON = styled.button`
text-align: center;
      font-size: 15px;
      color: #fff;
      width: 100%;
      padding: 15px;
      border:0px;
      outline: none;
      cursor: pointer;
      margin-top: 5px;
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
      background-color : #FFB344;
      `;

      const Heart = styled.i`
      color : red;
      font-size: 26px;
            transition: .4s;
      
      
      `;
      
const Wishlist = ({product}) => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  const [tooltip, setTooltip] = useState('Click to add')

  const { cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  
  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = () =>
    getWishlist(user.token).then((res) => {
      // console.log(res);
      setWishlist(res.data.wishlist);
    });

  const handleRemove = (productId) =>
    removeWishlist(productId, user.token).then((res) => {
      loadWishlist();
    });
    const handleAddToCart = () => {
      // create cart array
      let cart = [];
      if (typeof window !== "undefined") {
        // if cart is in local storage GET it
        if (localStorage.getItem("cart")) {
          cart = JSON.parse(localStorage.getItem("cart"));
        }
        // push new product to cart
        cart.push({
          ...product,
          count: 1,
        });
        // remove duplicates
        let unique = _.uniqWith(cart, _.isEqual);
        // save to local storage
        // console.log('unique', unique)
        localStorage.setItem("cart", JSON.stringify(unique));
        //show tooltip
        setTooltip("Added");
          // add to reeux state
          dispatch({ 
            type: "ADD_TO_CART",
            payload: unique,
          });
          //show item in cart drawer
          dispatch({ 
            type: "SET_VISIBLE",
            payload: true,
          });
        }
      };
  // destructure
  
  return (
   <>
 {!wishlist.length ?  ( <h4>No item in wishlist</h4> ) : ( 
   
   <Gallery>
    {wishlist.map((p) => (
          <Content key={p._id}> 
            <Heart className="fa fa-heart"  onClick ={() => handleRemove(p._id)} />
            <img style={{ height: "200px", objectFit: "cover" , display : "block" , width : "100%" }} src =
              {p.images[0].url}   />
        
                 <Name>{p.title}</Name>
          
           
            <Price>₹{p.price}</Price>
            <Link to={`/product/${p.slug}`}>
            <BUTTON >Buy Now</BUTTON></Link>
          </Content>
    ))}
          </Gallery>
 )} 

   </>
  );
};

export default Wishlist;
