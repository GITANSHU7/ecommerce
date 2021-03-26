import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getUserCart, emptyUserCart ,  applyCoupon , createCashOrderForUser} from "../functions/user";
import { saveUserAddress , saveUserPincode   , 
  saveUserLocality , saveUserContact, saveUserName } from "../functions/user"
import axios from "axios";
import Logo from "../logo";

const Checkout = ({history}) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState("samastipur");
  const [addressSaved, setAddressSaved] = useState(false);
  const [pincode, setPincode] = useState("848101");
  const [pincodeSaved, setPincodeSaved]= useState(false);
  const [coupon , setCoupon] = useState('');
  const [totalAfterDiscount , setTotalAfterDiscount] = useState(0);
  const [discountError, setDiscountError] = useState("");
  const [contact , setContact] = useState("1234567890");
  const [contactSaved , setContactSaved] = useState("");
  const [locality, setLocality] = useState("punjabi colony");
  const [localitySaved , setLocalitySaved] = useState("");
  const [name , setName] = useState("Gitanshu");
  const [nameSaved , setNameSaved] = useState("");

  const dispatch = useDispatch();
  const { user  , COD } = useSelector((state) => ({ ...state }));
  const couponTrueOrFalse = useSelector((state) => state.coupon);

  useEffect(() => {
    getUserCart(user.token).then((res) => {
      console.log("user cart res", JSON.stringify(res.data, null, 4));
      setProducts(res.data.products);
      setTotal(res.data.cartTotal);
    });
  }, []);


  

  const emptyCart = () => {
    // remove from local storage
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    // remove from redux
    dispatch({
      type: "ADD_TO_CART",
      payload: [],
    });
    // remove from backend
    emptyUserCart(user.token).then((res) => {
      setProducts([]);
      setTotal(0);
      setTotalAfterDiscount("");
      setCoupon("");
      toast.success("Cart is empty. Contniue shopping.");
    });
  };

  const saveAddressToDb = () => {
     console.log(address);
    saveUserAddress(user.token, address).then((res) => {
      if (res.data.ok) {
        setAddressSaved(true);
        
      }
    });
  };
   
  const savePincodeToDb = () => {
    console.log(pincode);
    saveUserPincode(user.token, pincode).then((res) => {
      if (res.data.ok) {
        setPincodeSaved(true);
        
      }
    });
  };
  const saveContactToDb = () => {
     console.log(contact);
    saveUserContact(user.token, contact).then((res) => {
      if (res.data.ok) {
        setContactSaved(true);
       
      }
    });
  };
  
  const saveNameToDb = () => {
     console.log(name);
    saveUserName(user.token, name).then((res) => {
      if (res.data.ok) {
        setNameSaved(true);

      }
    });
  };

  const saveLocalityToDb = () => {
     console.log(locality);
    saveUserLocality(user.token, locality).then((res) => {
      if (res.data.ok) {
        setLocalitySaved(true);
        toast.success("Address saved");
      }
    });
  };

  const showApplyCoupon = () => (
    <>
    <input 
    onChange = {(e) => {
      setCoupon(e.target.value)
    setDiscountError("")
    }
    }
    placeholder = "Enter Coupon"
    value= {coupon}
    type= "text"
    className= "form-control" />
    <button onClick={applyDiscountCoupon} className="btn btn-primary mt-2">Apply</button>
</>
  );

  

  const showAddress = () => (
    <>
      <br />
     

<form onSubmit={setName}>
        <div className="form-group">
          <label className="text-muted">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
            autoFocus
            required
          />
        </div>
        </form>
<br />

<form onSubmit={setAddress}>
        <div className="form-group">
          <label className="text-muted">Addrress</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            autoFocus
            required
          />
        </div>
        </form>
<br />
<form onSubmit={setPincode}>
        <div className="form-group">
          <label className="text-muted">Pincode</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setPincode(e.target.value)}
            value={pincode}
            autoFocus
            required
          />
        </div>
        </form>
        <br />
<form onSubmit={setLocality}>
        <div className="form-group">
          <label className="text-muted">Locality</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setLocality(e.target.value)}
            value={locality}
            autoFocus
            required
          />
        </div>
        </form>
        <form onSubmit={setContact}>
        <div className="form-group">
          <label className="text-muted">Contact No.</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setContact(e.target.value)}
            value={contact}
            maxLength="10"
            autoFocus
            required
          />
        </div>
        </form>
        
        <button className="btn btn-primary mt-2" onClick={() => {
     saveAddressToDb(); saveContactToDb() ;    savePincodeToDb(); saveAddressToDb(); saveLocalityToDb(); saveNameToDb();
        }} 
        disabled = {!address.length || !pincode.length ||!name.length ||!locality.length ||!contact.length} 
        >
          Save
      </button> 
    </>
      ); 

      const showProductSummary = () => 
        products.map((p, i) => (
          <div key={i}>
            <p>
              {p.product.title} {p.manufacturer } {p.year} {p.type} x {p.count} =
              {p.product.price * p.count}
            </p>
          </div>
        ));
      
        
        const applyDiscountCoupon = () => {
          console.log("send coupon to backend", coupon);
          applyCoupon(user.token, coupon).then((res) => {
            console.log("RES ON COUPON APPLIED", res.data);
            if (res.data) {
              setTotalAfterDiscount(res.data);
              // update redux coupon applied true/false
              dispatch({
                type : "COUPON_APPLIED",
                payload: "true",
              })

            }
            // error
            if (res.data.err) {
              setDiscountError(res.data.err);
              // update redux coupon applied
              dispatch({
                type : "COUPON_APPLIED",
                payload: "false",
              })

            }
          });
          }


          function loadScript(src) {
            return new Promise((resolve) => {
                const script = document.createElement("script");
                script.src = src;
                script.onload = () => {
                    resolve(true);
                };
                script.onerror = () => {
                    resolve(false);
                };
                document.body.appendChild(script);
            });
    }

    async function displayRazorpay() {
      const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
          alert("Razorpay SDK failed to load. Are you online?");
          return;
      }

      // creating a new order
      const result = await axios.post("http://localhost:3000/payment/orders");

      if (!result) {
          alert("Server error. Are you online?");
          return;
      }

      // Getting the order details back
      const { amount, id: order_id, currency } = result.data;

      const options = {
          key: "rzp_test_r6FiJfddJh76SI", // Enter the Key ID generated from the Dashboard
          amount: amount.toString(),
          currency: currency,
          name: "Soumya Corp.",
          description: "Test Transaction",
          image: { Logo },
          order_id: order_id,
          handler: async function (response) {
              const data = {
                  orderCreationId: order_id,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpayOrderId: response.razorpay_order_id,
                  razorpaySignature: response.razorpay_signature,
              };

              const result = await axios.post("http://localhost:3000/payment/success", data);

              alert(result.data.msg);
          },
          prefill: {
              name: "Soumya Dey",
              email: "SoumyaDey@example.com",
              contact: "9999999999",
          },
          notes: {
              address: "Soumya Dey Corporate Office",
          },
          theme: {
              color: "#61dafb",
          },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
}

      //cash on delivery
      const createCashOrder = () => {
        createCashOrderForUser(user.token, COD, couponTrueOrFalse).then((res) => {
          console.log("USER CASH ORDER CREATED RES ", res);
          // empty cart form redux, local Storage, reset coupon, reset COD, redirect
          if (res.data.ok) {
            // empty local storage
            if (typeof window !== "undefined") localStorage.removeItem("cart");
            // empty redux cart
            dispatch({
              type: "ADD_TO_CART",
              payload: [],
            });
            // empty redux coupon
            dispatch({
              type: "COUPON_APPLIED",
              payload: false,
            });
            // empty redux COD
            dispatch({
              type: "COD",
              payload: false,
            });
            // mepty cart from backend
            emptyUserCart(user.token);
            // redirect
            setTimeout(() => {
              history.push("/user/history");
            }, 1000);
          }
        });
      };
    
     
 
  
  return (
    <div className="row">
      <div className="col-md-6">
        <h4>Delivery Address</h4>
        <br />
        {showAddress()}
        <hr />
        <h4>Got Coupon?</h4>
        <br />
        {showApplyCoupon()}
        <br />
{discountError && <p className="text-danger p-2">{discountError}</p>}

      </div>

      <div className="col-md-6">
        <h4>Order Summary</h4>
        <hr />
        <p>Products {products.length}</p>
        <hr />
       {showProductSummary()}
        <hr />
        <p>Cart Total: {total}</p>

        {totalAfterDiscount > 0 && (
          <p className= "text-success p-2">After Discount Price ₹{totalAfterDiscount}</p>
        )}

        <div className="row">
          <div className="col-md-6">
           {COD ? (
              <button className="btn btn-primary"   
              disabled = {!address.length || !pincode.length || !products.length ||!name.length ||!locality.length ||!contact.length} 
              onClick = {createCashOrder}
              >
                Place Order</button>
           ) :  <button className="btn btn-primary"   
            disabled = {!address.length || !pincode.length || !products.length ||!name.length ||!locality.length ||!contact.length} 
            onClick = {() => history.push("/payment")}
            >
              Place Order</button>}
          </div>
          
          <div className="col-md-6">
            <button 
            disabled={!products.length}
            onClick={emptyCart}
            
            className="btn btn-primary">Empty Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
