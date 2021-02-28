import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getUserCart, emptyUserCart , saveUserAddress , saveUserPincode } from "../functions/user";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const Checkout = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState("");
  const [addressSaved, setAddressSaved] = useState(false);
  const [pincode, setPincode] = useState("");
  const [pincodeSaved, setPincodeSaved]= useState(false);
  const [coupon , setCoupon] = useState('');

  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));

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
      toast.success("Cart is empty. Contniue shopping.");
    });
  };

  const saveAddressToDb = () => {
    // console.log(address);
    saveUserAddress(user.token, address).then((res) => {
      if (res.data.ok) {
        setAddressSaved(true);
        toast.success("Address saved");
      }
    });
  };
    
  const savePincodeToDb = () => {
    // console.log(address);
    saveUserPincode(user.token, pincode).then((res) => {
      if (res.data.ok) {
        setPincodeSaved(true);
        toast.success("Address saved");
      }
    });
  };
    
  const showApplyCoupon = () => (
    <>
    <input 
    onChange = {(e) => setCoupon(e.target.value)}
    value= {coupon}
    type= "text"
    className= "form-control" />
    <button onClick={applyDiscountCoupon} className="btn btn-primary mt-2">Apply</button>
</>
  );


  const showAddress = () => (
    <>
      <br />
        <ReactQuill theme="bubble" value={address} onChange={setAddress} placeholder="Enter Address" 
        style={{border : "3px solid #ccc" , borderRadius:"0.5rem"}}
        
        />
           <br />
           <ReactQuill theme="bubble" value={pincode} onChange={setPincode} placeholder="Enter pin"
        style={{border : "3px solid #ccc" , borderRadius:"0.5rem"}}
        
        />
        <button className="btn btn-primary mt-2" onClick={() => {
          savePincodeToDb(); saveAddressToDb();
        }} 
        disabled = {!address.length || !pincode.length}
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
            console.log('send coupon' , coupon)
          }


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
      </div>

      <div className="col-md-6">
        <h4>Order Summary</h4>
        <hr />
        <p>Products {products.length}</p>
        <hr />
       {showProductSummary()}
        <hr />
        <p>Cart Total: {total}</p>

        <div className="row">
          <div className="col-md-6">
            <button className="btn btn-primary">Place Order</button>
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
