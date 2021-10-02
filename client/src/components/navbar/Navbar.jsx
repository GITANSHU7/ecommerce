
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FcIcons from 'react-icons/fc';
import * as HiIcons from 'react-icons/hi';
import * as BsIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import logo from  "../../components/logo.png"
import { IconContext } from 'react-icons';
import styled from "styled-components"
import {FaShoppingCart} from "react-icons/fa"
import {RiAccountCircleFill} from "react-icons/ri"

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Menu , Badge} from "antd";
import firebase from "firebase";


const NAVSIDE = styled.div`
background: linear-gradient(90deg, rgb(223, 200, 200) 0%, rgb(26, 23, 23) 100%);
  
height: 80px;
display: flex;
justify-content: start;
align-items: center

`
;



const Span = styled.span`
margin-left: 16px;
`;

const LOGO = styled.img` 
@media only screen and (max-width: 600px) {

    heigth : 10px;
    width : 190px;
}
@media only screen and (max-width: 340px) {

  heigth : 10px;
  width : 160px;
}

`;

const SLIDERLOGO = styled.img`
@media only screen and (max-width: 1000px) {
   
   
    width : 190px;
}
@media only screen and (min-width: 1000px) {

   
  width : 190px;
}


`;



function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  let dispatch = useDispatch();
  let { user , cart } = useSelector((state) => ({ ...state }));

  const showSidebar = () => setSidebar(!sidebar);


  const history = useHistory();

  const routeChange = () =>{ 
    let path = `newPath`; 
    history.push("/cart");
  }
  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };
  return (
    <>
      <IconContext.Provider value={{ color: 'orange' }}>

      <NAVSIDE>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
    
     <Link to = "/" >    <LOGO src = {logo} style={{ display: "block" }} /> </Link>
         
        
     
     <FaShoppingCart onClick = {routeChange} style={{margin : "0 25 0 auto " , fontSize : "2rem" , cursor : "pointer"  }}  /> 
     <Badge count = {cart.length} offset={[-25,-28]} />
     {user && user.role === "subscriber" ?    <Link to = "/user/history">
      <RiAccountCircleFill style={{margin : "0 25 0 0 " , fontSize : "2rem" }} /> </Link>  : "" }
         
         
 {user && user.role === "admin"      ? <Link to = "/admin/dashboard"> 
 <RiAccountCircleFill style={{ margin : "0 10 0 0 ",fontSize : "2rem" }} /> </Link>  : ""}
   
            
        </NAVSIDE>
        
        
        
           
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
              <SLIDERLOGO src = {logo} style={{ display: "block" }} /> 
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className="nav-text">
                  <Link to= "/">
                  <AiIcons.AiFillHome />
                    <Span>Home</Span>
                  </Link>
                </li>
                <li className="nav-text">
                  <Link to= "/Shop">
                  <FcIcons.FcShop />
                    <Span>Shop</Span>
                  </Link>
                </li>
                <li className="nav-text">
                  <Link to= "/cart">
                  <HiIcons.HiShoppingCart />
                    <Span>Cart</Span>
                  </Link>
                </li>
               
                <li className="nav-text">
                  <Link to= "/about">
                  <FcIcons.FcAbout />
                    <Span>About</Span>
                  </Link>
                </li>
                <li className="nav-text">
                  <Link to= "/contact">
                  <FcIcons.FcContacts />
                    <Span>Contact</Span>
                  </Link>
                </li>
                {user && user.role === "subscriber" &&
                (
                    <li className="nav-text">
                  <Link to= "/user/history">
                  <FcIcons.FcContacts />
                    <Span>Dashboard</Span>
                  </Link>
                </li>
                )}
                  {user && user.role === "admin" &&
                (
                    <li className="nav-text">
                  <Link to= "/admin/dashboard">
                  <FcIcons.FcContacts />
                    <Span>Dashboard</Span>
                  </Link>
                </li>
                )}
                  
          {user && (
             <li className="nav-text">
             <Link to= "/user/wishlist">
             <BsIcons.BsFillHeartFill/>
               <Span>Wishlist</Span>
             </Link>
             </li>
          )}


                {!user && (
                    <li className="nav-text">
                    <Link to= "/login">
                    <FaIcons.FaLock/>
                      <Span>Sign in/up</Span>
                    </Link>
                    </li>
                )}
                
                {user && (
                <li className="nav-text">
                <Link to= "#">
                    <FaIcons.FaLock  />
                      <Span onClick = {logout}>LogOut</Span>
                   </Link>
                    </li>
                )}
        


          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
