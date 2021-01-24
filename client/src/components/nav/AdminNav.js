import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { RiDashboardLine } from 'react-icons/ri';
import { IoIosCreate } from 'react-icons/io';
import { BsFillCollectionFill } from 'react-icons/bs';
import { SiBrandfolder } from 'react-icons/si';
import { IoLogoModelS } from 'react-icons/io';

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
        <button className="btn btn-warning btn-raised  pr-5"> <IoIosCreate  style={{fontSize : "15px" , paddingRight: "0px"}} />Product</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/products" className="nav-link">
        <button className="btn btn-warning btn-raised pr-5 "> <BsFillCollectionFill style={{paddingRight: "1px", marginRight: "2px"}} />Products</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/brand" className="nav-link">
        <button className="btn btn-warning btn-raised pr-5 "><SiBrandfolder style={{marginRight: "2px"}} /> Brand</button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/model" className="nav-link">
        <button className="btn btn-warning btn-raised pr-5 "><IoLogoModelS  style={{fontSize : "20px" , paddingTop: "2.5px"}}/>  Model</button>
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
