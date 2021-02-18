import React from "react";
import ModalImage from "react-modal-image";

const ProductCardInCheckout = ({ p }) => {
  return (
    <tbody>
      <tr>
          <td>
              <div style = {{width:"100px" , height:"100px"}} >
              {p.images.length ? (<ModalImage small = {p.images[0].url} large = {p.images[0].url} />) : "" }
         </div>
          </td>

        
        <td>{p.title}</td>
        <td>₹{p.price}</td>
        <td>{p.manufacturer}</td>
        <td>{p.type}</td>
        <td>{p.count}</td>
        <td>Shipping Icon</td>
        <td>Delete Icon</td>
      </tr>
    </tbody>
  );
};

export default ProductCardInCheckout;
