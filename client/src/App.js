import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/nav/Header";
import Navbar from "./components/navbar/Navbar";
import AdminRoute from "./components/routes/AdminRoute";
import UserRoute from "./components/routes/UserRoute";
import { auth } from './firebase';
import { currentUser } from "./functions/auth";
import About from "./pages/About";
import AdminDashboard from "./pages/admin/AdminDashboard";
import BrandCreate from "./pages/admin/brand/BrandCreate";
import BrandUpdate from "./pages/admin/brand/BrandUpdate";
import CategoryCreate from "./pages/admin/brand/CategoryCreate";
import CategoryUpdate from "./pages/admin/brand/CategoryUpdate";
import ModelCreate from "./pages/admin/model/ModelCreate";
import ModelUpdate from "./pages/admin/model/ModelUpdate";
import AllProducts from "./pages/admin/product/AllProducts";
import ProductCreate from "./pages/admin/product/ProductCreate";
import ProductUpdate from "./pages/admin/product/ProductUpdate";
import ForgotPassword from './pages/auth/ForgotPassword';
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RegisterComplete from "./pages/auth/RegisterComplete";
import BrandHome from "./pages/brand/BrandHome";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import CreateCouponPage from "./pages/coupon/CreateCouponPage";
import Home from "./pages/Home";
import ModelHome from "./pages/model/ModelHome";
import Payment from "./pages/Payment";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import Terms from "./pages/Terms";
import Testing from "./pages/testing";
import testing2 from "./pages/testing2";
import TestRegister from "./pages/testRegister";
import History from "./pages/user/History";
import Password from "./pages/user/Password";
import Wishlist from "./pages/user/Wishlist";


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
      {/* <Route exact path="/testing3" component={testing3} /> */}
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
        <Route exact path="/terms-condition" component={Terms} />
       
        {/* <Route exact path="/testing4" component={Testing3} />
        <Route exact path="/testing5" component={Testing5} />
         */}
         <Route exact path = "/test-register" component = {TestRegister} />

        <AdminRoute exact path="/admin/coupon" component={CreateCouponPage} />
        <UserRoute exact path="/payment" component={Payment} />

    </Switch>
    
    </>
  );
};

export default App;
