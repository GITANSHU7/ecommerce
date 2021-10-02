import React , { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { updateShipperName } from "../functions/user"

 const Testing5 = () => {


  const [shipper_name , setShipper_name] = useState("");
   

   const dispatch = useDispatch();
   const { user } = useSelector((state) => ({ ...state }));
  
   const addAddress = () => {
    
      updateShipperName(user.token).then((res) => {
     

      //add to redux state
      dispatch({
            type : "USER_ADDRESS",
            payload : {
              shipper_name :res.data.shipper_name,
            }
        })
        .catch((err) => {
          console.log(err);
          
        });
      })
  }
    
    return (
        <div>
            <form onSubmit={addAddress}>
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
<button type = "submit" >ADD</button>
        </div>
    )
}

export default Testing5 ;