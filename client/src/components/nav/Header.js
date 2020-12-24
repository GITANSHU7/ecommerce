import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  ContactsTwoTone ,
  MailOutlined,
  InfoCircleTwoTone
  

} from "@ant-design/icons";
import { Link } from "react-router-dom";
import {GoSignOut} from "react-icons/go"
import firebase from 'firebase';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  let dispatch = useDispatch();
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
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="Home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Item>
      <Item key="About Us" icon={<InfoCircleTwoTone />}>
        <Link to="/about">About Us</Link>
      </Item>
      <Item key="Contact Us" icon={<ContactsTwoTone />}>
        <Link to="/contact">Contact Us</Link>
      </Item>

      <Item key="register" icon={<UserAddOutlined />} className="float-right">
        <Link to="/register">Register</Link>
      </Item>

      <Item key="login" icon={<UserOutlined style = {{font: "bold"}}/>} className="float-right">
        <Link to="/login">Login</Link>
      </Item>
      <Item  onClick={logout} className="float-right">
      <GoSignOut  style={{marginRight:'7px', marginBottom:'-2px'}}/>Logout
        </Item>

    </Menu>
  );
};

export default Header;
