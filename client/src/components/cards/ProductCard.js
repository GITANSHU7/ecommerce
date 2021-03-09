import React , {useState} from "react";
import { Card  , Tooltip } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import _ from "lodash";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

const { Meta } = Card;

const ProductCard = ({ product }) => {

const [tooltip, setTooltip] = useState('Click to add')

  // redux
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();



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
  const { images,type ,title, description, slug } = product;
  const { price } = product ;
  return (
    <Card
      cover={
        <img
          src={images && images.length ? images[0].url : ""}
          style={{ height: "150px", objectFit: "cover" }}
          className="p-1"
        />
      }
      actions={[
        <Link to={`/product/${slug}`}>
          <EyeOutlined className="text-warning" /> <br /> View Product
        </Link>,
        <Tooltip title={tooltip}>
        <a onClick={handleAddToCart} disabled = {product.quantity < 1} >
          <ShoppingCartOutlined className="text-danger" /> <br /> 
        {product.quantity < 1 ? "OUT OF STOCK" : "ADD TO CART"}
      </a> </Tooltip> ,
      ]}
    >
      <Meta
        title={`${title} - ₹${price}`}
       
        description={`${description && description.substring(0, 40)}...`}
        
      />
    </Card>
  );
};

export default ProductCard;
