import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { createPaymentIntent } from "../functions/stripe";
import { Link } from "react-router-dom";
import { createOrder, emptyUserCart } from "../functions/user";



const StripeCheckout = ({ history }) => {
  const dispatch = useDispatch();
  const { user  , coupon} = useSelector((state) => ({ ...state }));

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const [cartTotal , setCartTotal] = useState(0);
  const [totalAfterDiscount , setTotalAfterDiscount ] = useState(0)
  const [ payable , setPayable]  = useState(0)

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    createPaymentIntent(user.token , coupon).then((res) => {
      console.log("create payment intent", res.data);
      setClientSecret(res.data.clientSecret);
      // on succesful payment
      setCartTotal(res.data.cartTotal);
      setTotalAfterDiscount(res.data.totalAfterDiscount);
      setPayable(res.data.payable);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: user.name,
          email : user.email,
       
        },
      },
    });

    if (payload.error) {
        setError(`Payment failed ${payload.error.message}`);
        setProcessing(false);
      } else {
        // here you get result after successful payment
        // create order and save in database for admin to process
        createOrder(payload, user.token).then((res) => {
          if (res.data.ok) {
            // empty cart from local storage
            if (typeof window !== "undefined") localStorage.removeItem("cart");
            // empty cart from redux
            dispatch({
              type: "ADD_TO_CART",
              payload: [],
            });
            // reset coupon to false
            dispatch({
              type: "COUPON_APPLIED",
              payload: false,
            });
            // empty cart from database
            emptyUserCart(user.token);
          }
        });
        // empty user cart from redux store and local storage
        console.log(JSON.stringify(payload, null, 4));
        setError(null);
        setProcessing(false);
        setSucceeded(true);
      }
    };
  
  const handleChange = async (e) => {
    // listen for changes in the card element
    // and display any errors as the custoemr types their card details
    setDisabled(e.empty); // disable pay button if errors
    setError(e.error ? e.error.message : ""); // show error message
  };

  const cartStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <>
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment Successful.{" "}
        <Link to="/user/history">See it in your purchase history.</Link>
      </p>

      <form id="payment-form" className="stripe-form" onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          options={cartStyle}
          onChange={handleChange}
        />
        <button
          className="stripe-button"
          disabled={processing || disabled || succeeded}
        >
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> :  "Amount To Pay"} ₹{(payable / 100).toFixed(2)}
          </span>
        </button>
        <br />
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
      </form>
    </>
  );
};

export default StripeCheckout;
