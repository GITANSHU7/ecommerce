import React, { useState } from "react";
import { Menu , Badge} from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
InfoCircleTwoTone,
	ContactsTwoTone ,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {GoSignOut} from "react-icons/go"
import Search from "../forms/Search";
const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  let dispatch = useDispatch();
  let { user , cart } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{backgroundColor : 'black'}}>
     {/*} <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Item>
	 <Item key="About Us" icon={<InfoCircleTwoTone />}>
        <Link to="/about">About Us</Link>
      </Item>
      
  */}
 <Item key="Cart" icon={<ShoppingCartOutlined style = {{fontSize : '1rem' ,color:'white'}} />}>
        <Link to="/cart"> <Badge count = {cart.length} offset={[9,0]}><strong className="text-white">
          
          Cart
          
        </strong></Badge> </Link>
      </Item>
  

      {!user && (
        <Item key="register" icon={<UserAddOutlined style={{fontSize : '1.7rem' ,color:'white'}} />} className="float-left text-white">
          <Link to="/register"><strong className="text-white">Register</strong></Link>
        </Item>
      )}

      {!user && (
        <Item key="login" icon={<UserOutlined style={{fontSize : '1.7rem' ,color: 'white'}} />} className="float-right">
          <Link to="/login"><strong className="text-white">Login</strong></Link>
        </Item>
      )}

      {user && (
        <SubMenu
          icon={<UserOutlined style = {{fontSize : '1.7rem' , color: 'white'}} /> }
          title={user.email && user.email}
          className="float-right text-white"
          
        >
          {user && user.role === "subscriber" && (
            <Item><Link to = "/user/history">Dashboard</Link></Item>
          )}
           {user && user.role === "admin" && (
            <Item><Link to = "/admin/dashboard">Dashboard</Link></Item>
          )}
          <Item icon={  <GoSignOut  style={{marginRight:'7px', marginBottom:'-2px'}}/>} onClick={logout}>
            Logout
          </Item>
        </SubMenu>
      )}
      
    </Menu>
  );
};

export default Header;
