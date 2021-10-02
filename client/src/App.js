import React , {useEffect, useState} from "react";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./components/nav/Header";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Testing from "./pages/testing";
//import logo from "./logo";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RegisterComplete from "./pages/auth/RegisterComplete";
import {auth}from './firebase';
import {useDispatch} from 'react-redux'
import ForgotPassword from './pages/auth/ForgotPassword';
import { currentUser } from "./functions/auth";
import History from "./pages/user/History";
import UserRoute from "./components/routes/UserRoute";
import Password from "./pages/user/Password";
import Wishlist from "./pages/user/Wishlist";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRoute from "./components/routes/AdminRoute";
import BrandCreate from "./pages/admin/brand/BrandCreate";
import CategoryCreate from "./pages/admin/brand/CategoryCreate";
import BrandUpdate from "./pages/admin/brand/BrandUpdate";
import CategoryUpdate from "./pages/admin/brand/CategoryUpdate";
import ModelCreate from "./pages/admin/model/ModelCreate";
import ModelUpdate from "./pages/admin/model/ModelUpdate";
import ProductCreate from "./pages/admin/product/ProductCreate";
import AllProducts from "./pages/admin/product/AllProducts";
import ProductUpdate from "./pages/admin/product/ProductUpdate";
import logo from "./components/logo.png";

import "./App.css"
import { Footer } from "./components/Working/footer";
import Product from "./pages/Product";
import BrandHome from "./pages/brand/BrandHome";
import ModelHome from "./pages/model/ModelHome";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import SideDrawer from "./components/drawer/SideDrawer";
import Checkout from "./pages/Checkout";
import CreateCouponPage from "./pages/coupon/CreateCouponPage";
import Payment from "./pages/Payment";
import testing2 from "./pages/testing2";
import testing3 from "./components/Working/testing3";
import Testing3 from "./pages/testing3";
import Testing5 from "./pages/testing5";

import Navbar from  "./components/navbar/Navbar";


const App = () => {
  const dispatch = useDispatch();

  // to check firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        console.log("user", user);
        currentUser(idTokenResult.token)
        .then((res =>  {
          dispatch({
            type: "LOGGED_IN_USER",
            payload: {
              name:res.data.name,
              email: res.data.email,
              token: idTokenResult.token,
              role:res.data.role,
              _id:res.data._id,
            }, 
          });
        }))
        .catch(err => console.log(err));
      }
    });
    // cleanup
    return () => unsubscribe();
  }, []);


  return (
    <>
<Header />
    <Navbar />
    
    <ToastContainer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/testing2" component={testing2} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/testing" component={Testing} />
      <Route exact path="/testing3" component={testing3} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/register/complete" component={RegisterComplete} />
      <Route exact path="/forgot/password" component={ForgotPassword} />
      <Route exact path="/user/history" component={History} />
      <UserRoute exact path="/user/password" component={Password} />
      <UserRoute exact path="/user/wishlist" component={Wishlist} />
      <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
      <AdminRoute exact path="/admin/brand" component={BrandCreate} />
      <AdminRoute exact path="/admin/category" component={CategoryCreate} />
      <AdminRoute exact path="/admin/brand/brand-update/:slug" component={BrandUpdate} />
      <AdminRoute exact path="/admin/category/:slug" component={CategoryUpdate} />
      <AdminRoute exact path="/admin/model" component={ModelCreate} />
      <AdminRoute exact path="/admin/model/model-update/:slug" component={ModelUpdate} />
      <AdminRoute exact path="/admin/product/product-create" component={ProductCreate} />
      <AdminRoute exact path="/admin/products" component={AllProducts} />
      <AdminRoute
          exact
          path="/admin/product/:slug"
          component={ProductUpdate}
        />
        
        <Route exact path="/product/:slug" component={Product} />
        <Route exact path="/brand/:slug" component={BrandHome} />
        <Route exact path="/model/:slug" component={ModelHome} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
       
        <Route exact path="/testing4" component={Testing3} />
        <Route exact path="/testing5" component={Testing5} />
        

        <AdminRoute exact path="/admin/coupon" component={CreateCouponPage} />
        <UserRoute exact path="/payment" component={Payment} />

    </Switch>
    
    </>
  );
};

export default App;
