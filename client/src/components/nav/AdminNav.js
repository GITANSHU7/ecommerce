import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { RiDashboardLine } from 'react-icons/ri';

const AdminNav = () => (
  <nav>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/admin/dashboard" className="nav-link">
        <button className="btn btn-warning btn-raised  pr-4"> <RiDashboardLine style={{fontSize : "20px" , paddingTop : "5px"}}/>Dashboard </button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/product/product-create" className="nav-link">
        <button className="btn btn-warning btn-raised  pr-5"> Product</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/products" className="nav-link">
        <button className="btn btn-warning btn-raised pr-4 ">Products</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/brand" className="nav-link">
        <button className="btn btn-warning btn-raised pr-5 "> Brand</button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/model" className="nav-link">
        <button className="btn btn-warning btn-raised pr-5 ">Model</button>
        </Link>
      </li>


      <li className="nav-item">
        <Link to="/admin/sub" className="nav-link">
        <button className="btn btn-warning btn-raised pr-3 ">Sub Category</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/coupon" className="nav-link">
        <button className="btn btn-warning btn-raised pr-5 ">Coupon</button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/category" className="nav-link">
        <button className="btn btn-warning btn-raised pr-4 ">Category</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/password" className="nav-link">
        <button className="btn btn-warning btn-raised "> Password</button>
        </Link>
      </li>
    </ul>
  </nav>
);

export default AdminNav;
