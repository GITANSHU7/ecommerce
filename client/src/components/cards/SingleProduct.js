import React , {useState} from "react";
import { Card  , Tabs , Tooltip} from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductListItems from "./ProductListItems";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist } from "../../functions/user";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";



  

const SingleProduct = ({ product }) => {
  const { title, description, images, slug , brand, model} = product;

  
const { TabPane } = Tabs;
const [tooltip, setTooltip] = useState('Click to add')

  // redux
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();


let history = useHistory();
 
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

        // side drawer for cart
        dispatch({ 
          type: "SET_VISIBLE",
          payload: true,
        });
      }
    };
  
    const handleAddToWishlist = (e) => {
      e.preventDefault();
      addToWishlist(product._id, user.token).then((res) => {
        console.log("ADDED TO WISHLIST", res.data);
        toast.success("Added to wishlist")
        history.push("/user/wishlist");
      });
    };
  

  return (
    <>
      <div className="col-md-7">
        <Carousel showArrows={true} autoPlay infiniteLoop>
          {images && images.map((i) => <img src={i.url} key={i.public_id} />)}
        </Carousel>

    <Tabs type= "card">
        <TabPane tab = "Description" key="1">
            {description && description}
        </TabPane>
        <TabPane tab = "Warrenty" key="2">
            {description && description}
        </TabPane>
    </Tabs>

      </div>

      <div className="col-md-5">
        <h1 className="bg-info p-3">{title}</h1>
        <Card
          actions={[
            <Tooltip title={tooltip}>
            <a onClick={handleAddToCart}>
              <ShoppingCartOutlined className="text-danger" /> <br /> Add to Cart
            </a> </Tooltip> ,
             <a onClick={handleAddToWishlist}>
             <HeartOutlined className="text-info" /> <br /> Add to Wishlist
           </a>
            ,
          ]}
        >
            <ProductListItems product = {product} />
          </Card>
      </div>
    </>
  );
};

export default SingleProduct;
