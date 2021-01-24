import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';

const AdminNav = () => (
  <nav>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/admin/dashboard" className="nav-link">
        <Button color="success"> Dashboard </Button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/product/product-create" className="nav-link">
        <Button color="success"> Product</Button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/products" className="nav-link">
        <Button color="success"> Products</Button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/brand" className="nav-link">
        <Button color="success"> Brand</Button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/model" className="nav-link">
        <Button color="success">Model</Button>
        </Link>
      </li>


      <li className="nav-item">
        <Link to="/admin/sub" className="nav-link">
        <Button color="success"> Sub Category</Button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/coupon" className="nav-link">
        <Button color="success"> Coupon</Button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/category" className="nav-link">
        <Button color="success"> Category</Button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/password" className="nav-link">
        <Button color="success"> Password</Button>
        </Link>
      </li>
    </ul>
  </nav>
);

export default AdminNav;
