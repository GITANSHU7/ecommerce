import React from "react";
import { Link } from "react-router-dom";

const UserNav = () => (
  <nav>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/user/history" className="nav-link">
        <button className="btn btn-info btn-raised pr-3 "> History</button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/password" className="nav-link">
        <button className="btn btn-warning btn-raised pr-3 "> Password </button>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/wishlist" className="nav-link">
        <button className="btn btn-warning btn-raised pr-3 "> Wishlist </button>
        </Link>
      </li>
    </ul>
  </nav>
);

export default UserNav;
