import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { RiDashboardLine } from 'react-icons/ri';
import { IoIosCreate } from 'react-icons/io';
import { BsFillCollectionFill } from 'react-icons/bs';
import { SiBrandfolder } from 'react-icons/si';
import { IoLogoModelS } from 'react-icons/io';
import { RiCoupon2Fill } from 'react-icons/ri';
import { RiLockPasswordFill } from 'react-icons/ri';

const AdminNav = () => (
  <nav>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/admin/dashboard" className="nav-link">
        <button className="col btn btn-warning btn-sm btn-block btn-raised "> <RiDashboardLine style={{fontSize : "20px" , paddingTop : "5px"}}/>Dashboard </button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/product/product-create" className="nav-link">
        <button className="col btn btn-warning btn-sm btn-block btn-raised "> <IoIosCreate  style={{fontSize : "15px" , paddingRight: "0px"}} />Product</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/products" className="nav-link">
        <button className="col btn btn-warning btn-sm btn-block btn-raised  "> <BsFillCollectionFill style={{paddingRight: "1px", marginRight: "2px"}} />Products</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/brand" className="nav-link">
        <button className="col btn btn-warning btn-sm btn-block btn-raised  "><SiBrandfolder style={{marginRight: "2px"}} /> Brand</button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/model" className="nav-link">
        <button className="col btn btn-warning btn-sm btn-block btn-raised  "><IoLogoModelS  style={{fontSize : "20px" , paddingTop: "2.5px"}}/>  Model</button>
        </Link>
      </li>


      <li className="nav-item">
        <Link to="/admin/sub" className="nav-link">
        <button className="col btn btn-warning btn-sm btn-block btn-raised  ">Sub Category</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/coupon" className="nav-link">
        <button className="col btn btn-warning btn-sm btn-block btn-raised  "><RiCoupon2Fill /> Coupon</button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/category" className="nav-link">
        <button className="col btn btn-warning btn-sm btn-block btn-raised  ">Category</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/password" className="nav-link">
        <button className="col btn btn-warning btn-sm btn-block btn-raised  "><RiLockPasswordFill /> Password</button>
        </Link>
      </li>
    </ul>
  </nav>
);

export default AdminNav;
