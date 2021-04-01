import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createAddress } from '../functions/user';
import { toast } from "react-toastify";
import { useEffect } from 'react';

const Testing2 = () => {
    const [name, setName] = useState("");
    const [address , setAddress]  = useState("");
    const [locality , setLocality]  = useState("");
    const [contact , setContact]  = useState("");
    const [pincode , setPincode]  = useState("");
    const [email, setEmail] = useState("");
 


    //let dispatch = useDispatch();
    const { user } = useSelector((state) => ({ ...state }));
   
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // console.table(name, expiry, discount);
        createAddress({ name, address, contact,pincode, locality }, user.token)
          .then((res) => {
            setName("");
            setAddress("");
            setLocality("");
            setContact("");
            setPincode("");
           
            toast.success(`"${res.data.name}" is created`);
          })
          .catch((err) => console.log("create coupon err", err));
      };
    
    return (
        <div>
          
              <form onSubmit={handleSubmit}>
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
        <div className="form-group">
          <label className="text-muted">Locality</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setLocality(e.target.value)}
            value={locality}
            autoFocus
            required />
            </div>
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
        
       <button className="btn btn-outline-primary">Save</button>
          
</form>
                  </div>
    )
}

export default Testing2;