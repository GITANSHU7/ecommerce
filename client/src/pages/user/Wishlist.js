import React from "react";
import UserNav from "../../components/nav/UserNav";

const Wishlist = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-2">
        <UserNav />
      </div>
     

    <div className="col-md-4 mb-5">

     
<div className="card">

  <div className="view zoom overlay z-depth-2 rounded">
    <img className="img-fluid w-100"
      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample"/>
    <a href="#!">
      <div className="mask">
        <img className="img-fluid w-100"
          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" />
        <div className="mask rgba-black-slight"></div>
      </div>
    </a>
  </div>

  <div className="text-center pt-4">

    <h5>Blue denim shirt</h5>
    <p className="mb-2 text-muted text-uppercase small">Shirts</p>
    <hr />
    <h6 className="mb-3">17.99 $</h6>
    <button type="button" className="btn btn-primary btn-sm mr-1 mb-2"><i
        className="fas fa-shopping-cart pr-2"></i>Add to cart</button>
    <button type="button" className="btn btn-light btn-sm mr-1 mb-2"><i
        className="fas fa-info-circle pr-2"></i>Details</button>
    <button type="button" className="btn btn-elegant btn-sm px-3 mb-2 material-tooltip-main"
      data-toggle="tooltip" data-placement="top" title="Remove from wishlist"><i
        className="fas fa-times"></i></button>

  </div>

</div>


</div>




    </div>
  </div>
);

export default Wishlist;
