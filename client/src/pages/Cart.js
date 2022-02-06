import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductCardInCheckout from "../components/cards/ProductCardInCheckout";
import { userCart } from "../functions/user";
import { Button, Radio, Tooltip } from 'antd';

const Cart = ({ history }) => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const saveOrderToDb = () => {
  userCart(cart,user.token)
  .then((res) => {  
    console.log("CART POST" ,res);
    if(res.data.ok) history.push("/checkout")
  }) 
  .catch((err) => console.log("save err" , err))
  };

  const saveCashOrderToDb = () => {

    dispatch({
      type : "COD" ,
      payload : true,
    });
    userCart(cart,user.token)
    .then((res) => {
      console.log("CART POST" ,res);
      if(res.data.ok) history.push("/checkout")
    }) 
    .catch((err) => console.log("save err" , err))
    };
  const showCartItems = () => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Brand</th>
          <th scope="col">type</th>
          <th scope="col">Count</th>
          <th scope="col">Shipping</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>

      {cart.map((p) => (
        <ProductCardInCheckout key={p._id} p={p} />
      ))}
    </table>
  );

  return (
    <div className="container-fluid pt-2">
      <div className="row">
        <div className="col-md-8">
          <h4>{cart.length} item on your cart</h4>

          {!cart.length ? (
            <p>
              No products in cart. <Link to="/shop">Continue Shopping.</Link>
            </p>
          ) : (
            showCartItems()
          )}
        </div>
        <div className="col-md-4">
          <h4>Order Summary</h4>
          <hr />
          <p>Products Details</p>
          {cart.map((c, i) => (
            <div key={i}>
              <p>
                
                {c.title}({c.type}) - ₹{c.price} x {c.count} = ₹{c.price * c.count}
             
              </p>
            </div>
          ))}
          <hr />
          Total: <b>₹{getTotal()}</b>
          <hr />
          {user ? (
           <>
           <Tooltip title=" Sorry, Currently we're not accepting order">
               <Button
              // onClick={saveOrderToDb}
              type = "primary"
              className="mt-2"
              // disabled={!cart.length}
             
              // disabled
            >
              Proceed to Checkout
             
            </Button> </Tooltip>
            <br />
            <Tooltip title=" Sorry, Currently we're not accepting order">
            <Button
            type = "info"
              // onClick={saveCashOrderToDb}
              className="mt-2"
              // disabled={!cart.length}
              
            >
              CASH ON DELIVERY
            </Button>
            </Tooltip>
           </>
          ) : (
            <Button className="mt-2" type="primary">
              <Link
                to={{
                  pathname: "/login",
                  state: { from: "cart" },
                }}
              >
                Login to Checkout
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
