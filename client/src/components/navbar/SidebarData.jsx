
import React from 'react';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import { useDispatch, useSelector } from "react-redux";



export const SidebarData = [
    
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },


  
  {
    title: 'About',
    path: '/about',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  
 
  {
    title: 'Shop',
    path: '/Shop',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  }, 
  {
    title: 'Cart',
    path: '/cart',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  }, 
  
  {
    title: 'Wishlist',
    path: '/user/wishlist',
    icon: <MdIcons.MdFavorite />,
    cName: 'nav-text'
  }, 

  

  

];