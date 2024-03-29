import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import ShowPaymentInfo from "../cards/ShowPaymentInfo";
import ModalImage from "react-modal-image";
import { FcProcess } from 'react-icons/fc';

const Orders = ({ orders, handleStatusChange }) => {
  
  const showOrderInTable = (order) => (
      
        <table className="table table-bordered">
           
          <thead className="thead-dark">
            <tr>
            <th scope="col">Images</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Brand</th>
              <th scope="col">Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Shipping</th>
              <th scope="col">Total</th>
              
            </tr>
          </thead>
    
          <tbody>
            {order.products.map((p, i) => (
              <tr key={i}>
                 <td>
                  <div style = {{width:"100px" , height:"100px"}} >
                  {p.product.images.length ? (<ModalImage small = {p.product.images[0].url} large = {p.product.images[0].url} />) : "" }
             </div>
              </td>
                <td>
                  <b>{p.product.title}</b>
                </td>
                <td>{p.product.price}</td>
                <td>{p.product.manufacturer}</td>
               
              <td>{p.product.type}</td>
                <td>{p.count}</td>
                <td>
                  {p.product.shipping === "Yes" ? (
                    <CheckCircleOutlined style={{ color: "green" }} />
                  ) : (
                    ""
                  )}
                </td>
                <td>₹{p.product.price  * p.count}</td>
                  
               
              </tr>
            ))}
          </tbody>
        </table>
      );
  return (
    <>
      {orders.map((order) => (
        <div key={order._id} className="row pb-5">
          
          <div className="btn btn-block bg-light">
          <div>
         
         {order.orderStatus === "Processing" ? (
                    <FcProcess style={{ Color: "orange", fontSize : "2rem" }}><button>processing</button></FcProcess>
                  ) : (
                   ""
                  )}
                   {order.orderStatus === "Not Processed" ? (
                    <i class="fas fa-store-alt-slash" style={{ color: "red" , fontSize : "2rem" }} />
                  ) : (
                   ""
                  )}
                    {order.orderStatus === "Dispatched" ? (
                     <i className="fas fa-shipping-fast" style={{ color: "green" ,  fontSize : "2rem"}}></i>
                   
                  ) : (
                   ""
                  )}
                   {order.orderStatus === "Cancelled" ? (
                     <i class="fas fa-window-close" style={{ color: "red"  , fontSize : "2rem"}}></i>
                   
                  ) : (
                   ""
                  )}
                   {order.orderStatus === "Completed" ? (
                     <i class="fas fa-check-circle" style={{ color: "green"  , fontSize : "2rem"}}></i>
                   
                  ) : (
                   ""
                  )}
   </div> 
            <ShowPaymentInfo order={order} showStatus={false} />

            <div className="row">
              <div className="col-md-4">Delivery Status</div>
              <div className="col-md-8">
                <select
                  onChange={(e) =>
                    handleStatusChange(order._id, e.target.value)
                  }
                  className="form-control"
                  defaultValue={order.orderStatus}
                  name="status"
                >
                  <option value="Not Processed">Not Processed</option>
                  <option value="Processing">Processing</option>
                  <option value="Dispatched">Dispatched</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
          </div>

          {showOrderInTable(order)}
        </div>
      ))}
    </>
  );
};

export default Orders;
