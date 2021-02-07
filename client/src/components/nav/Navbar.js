import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import logo from "../../components/logo.png"
import './Navbar.css';
import { Button } from '../buttons/Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  let dispatch = useDispatch();
  let { user } = useSelector((state) => ({ ...state }));
  let history = useHistory();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };


  const showButton = () => {
    if (window.innerWidth <= 700) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
         <img src = {logo} style={{ display: "block" ,  marginRight: "auto"  , marginLeft:"auto"}} /> 
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
          
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
			 <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                contact us
              </Link>
  </li> 

       


		{!user && (
            <li className='nav-item'>
              <Link
                to='/register'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <button className= "btn btn-success">Register</button>
              </Link>
            </li> )}
			
			{!user && (
            <li>
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <button className = "btn btn-danger">Login</button>
              </Link>
            </li> )} 
          </ul>
       {/*  {button && <Button buttonStyle='btn--outline'>Register</Button>} */}   
         </div>
      </nav>
    </>
  );
}

export default Navbar;