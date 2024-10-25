import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import ShowRoom from '../Components/ShowRoom/ShowRoom';
import Home from '../Pages/Home/Home';
import Categories from "../Pages/Categories/Categories"
import Cart from '../Pages/Cart/Cart';
import Checkout from '../Pages/Checkout/Checkout';
import OrderList from '../Components/OrderList/OrderList';
import  Profile from "../Pages/Profile/Profile"
import AlEnabled from '../Brand/AlEnabled';
import HomeAppli from '../Brand/HomeAppli';
import LGProducts from '../Brand/LGProducts'; 
import Networking from '../Brand/Networking';
import PhoneAndTablets from '../Brand/PhoneAndTablets';
import SamsungProducte from '../Brand/SamsungProducte';
import ProductDetails from '../Pages/ProductDetails/ProductDetails'
import Login from "../Pages/Auth/LogIn/LogIn"
import SignUp from "../Pages/Auth/SignUp/SignUp"
import About from "../Pages/About/About"
import  Contact from "../Pages/Contact/Contact"
import Terms from "../Components/Terms /Terms "




function Routers() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate to="/franko" />} />
        <Route path="/franko" element={<Home/>} />
         <Route path="/categories" element={<Categories/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path="/checkout" element={<Checkout/>}/>
         <Route path="/order" element={<OrderList/>}/>
         <Route path="/profile" element={<Profile/>}/>
         <Route path='/AlEnabled' element={<AlEnabled/>}/>
         <Route path="/HomeAppli" element={<HomeAppli/>}/>
         <Route path="/LGProducts" element={<LGProducts/>}/>
         <Route path="/NetWorking" element={<Networking/>}/>
         <Route path="/PhoneAndTablets"  element={<PhoneAndTablets/>}/>
         <Route path="/SamsungProducte" element={<SamsungProducte/>}/>
         <Route path="/ProductDetails" element={<ProductDetails/>}/>
         <Route path="/Login" element={<Login/>}/>
         <Route path="/SignUP" element={<SignUp/>}/>
         <Route path="/About" element={<About/>}/>
         <Route path="/Contact" element={<Contact/>}/>
         <Route path='/Term' element={<Terms/>}/>

      </Routes>
      <Footer/>
    </Router>
  )
}

export default Routers