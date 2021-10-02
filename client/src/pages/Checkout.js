import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getUserCart, emptyUserCart ,  applyCoupon , createCashOrderForUser} from "../functions/user";
import {updateShipperPincode, updateShipperContact,updateShipperLocality,updateShipperName ,updateShipperAddress
} from "../functions/user"

const Checkout = ({history}) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState("");
  const [addressSaved, setAddressSaved] = useState(false);
  const [pincode, setPincode] = useState("");
  const [pincodeSaved, setPincodeSaved]= useState(false);
  const [coupon , setCoupon] = useState('');
  const [totalAfterDiscount , setTotalAfterDiscount] = useState(0);
  const [discountError, setDiscountError] = useState("");
  const [contact , setContact] = useState("");
  const [contactSaved , setContactSaved] = useState("");
  const [locality, setLocality] = useState("");
  const [localitySaved , setLocalitySaved] = useState("");
  const [name , setName] = useState("Gitanshu");
  const [nameSaved , setNameSaved] = useState("");
  const [shipper_pincode ,setShipper_pincode] = useState("");
  const [shipper_name , setShipper_name] = useState("");
  const [shipper_locality,setShipper_locality] = useState("");
  const [shipper_address , setShipper_address] = useState("");
  const [shipper_contact , setShipper_contact] = useState("")



  const dispatch = useDispatch();
  const { user  , COD } = useSelector((state) => ({ ...state }));
  const couponTrueOrFalse = useSelector((state) => state.coupon);

  useEffect(() => {
    getCart();
  }, []);

const getCart = () => {
  getUserCart(user.token).then((res) => {
    console.log("user cart res", JSON.stringify(res.data,null,4));
    setProducts(res.data.products);
    setTotal(res.data.cartTotal);
  });

}
  

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

  const saveShipperAddressToDb = () => {
     console.log(shipper_address);
    updateShipperAddress(user.token, shipper_address).then((res) => {
      if (res.data.ok) {
        updateShipperAddress(true);
        
      }
    });
  };
   
  const saveShipperPincodeToDb = () => {
    console.log(shipper_pincode);
    updateShipperPincode (user.token, shipper_pincode).then((res) => {
      if (res.data.ok) {
        setShipper_pincode(true);
        
      }
    });
  };
  const saveShipperContactToDb = () => {
     console.log(shipper_contact);
    updateShipperContact(user.token, shipper_contact).then((res) => {
      if (res.data.ok) {
        setShipper_contact(true);
       
      }
    });
  };
  
  const saveShipperNameToDb = () => {
     console.log(shipper_name);
    updateShipperName(user.token, shipper_name).then((res) => {
      if (res.data.ok) {
        setShipper_name(true);

      }
    });
  };

  const saveShipperLocalityToDb = () => {
     console.log(shipper_locality);
    updateShipperLocality(user.token, shipper_locality).then((res) => {
      if (res.data.ok) {
        setShipper_locality(true);
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
    placeholder = "Enter Coupon Code"
    value= {coupon}
    type= "text"
    className= "form-control" />
    <button onClick={applyDiscountCoupon} className="btn btn-primary mt-2">Apply</button>
</>
  );

  

  const showAddress = () => (
    <>
      <br />
     

<form onSubmit={setShipper_name}>
        <div className="form-group">
          <label className="text-muted">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setShipper_name(e.target.value)}
            value={shipper_name}
            autoFocus
            required
          />
        </div>
        </form>
<br />

<form onSubmit={setShipper_address}>
        <div className="form-group">
          <label className="text-muted">Addrress</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setShipper_address(e.target.value)}
            value={shipper_address}
            autoFocus
            required
          />
        </div>
        </form>
<br />
<form onSubmit={setShipper_pincode}>
        <div className="form-group">
          <label className="text-muted">Pincode</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setShipper_pincode(e.target.value)}
            value={shipper_pincode}
            maxLength="6"
            autoFocus
            required
          />
        </div>
        </form>
        <br />
<form onSubmit={setShipper_locality}>
        <div className="form-group">
          <label className="text-muted">Locality</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setShipper_locality(e.target.value)}
            value={shipper_locality}
            autoFocus
            required
          />
        </div>
        </form>
        <form onSubmit={setShipper_contact}>
        <div className="form-group">
          <label className="text-muted">Contact No.</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setShipper_contact(e.target.value)}
            value={shipper_contact}
            maxLength="10"
            autoFocus
            required
          />
        </div>
        </form>
        
        <button className="btn btn-primary mt-2" onClick={() => {
     saveShipperAddressToDb(); saveShipperContactToDb() ;    saveShipperPincodeToDb(); saveShipperNameToDb(); saveShipperLocalityToDb(); 
        }} 
        //disabled = {!address.length || !pincode.length ||!name.length ||!locality.length ||!contact.length} 
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
              //disabled = {!address.length || !pincode.length || !products.length ||!name.length ||!locality.length ||!contact.length} 
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
