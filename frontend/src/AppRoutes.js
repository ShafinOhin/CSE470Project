import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import CartPage from './Pages/Cart/CartPage';
import Login from './Pages/Login/Login';
import RegisterPage from './Pages/Register/registerPage';
import AuthRoute from './Authroute/AuthRoute';
import Admin from './Pages/Admin/Admin';
import FoodAdmin from './Pages/FoodAdmin/FoodAdmin';
import Edit from './Pages/Edit/Edit';
import CheckoutPage from './Pages/Checkout/CheckoutPage';

export default function AppRoutes() {
  return (
    <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/search/:searchTerm" element={<Home />} />
        <Route path ="/cart" element={<AuthRoute><CartPage /></AuthRoute>} />
        <Route path ="/login" element={<Login />} />
        <Route path ="/register" element={<RegisterPage />} />
        <Route path ="/admin" element={<AuthRoute><Admin /></AuthRoute>} />
        <Route path ="/foodadmin" element={<AuthRoute><FoodAdmin /></AuthRoute>} />
        <Route path ="/foodadd" element={<AuthRoute><Edit /></AuthRoute>} />
        <Route path ="/foodadd/:foodId" element={<AuthRoute><Edit /></AuthRoute>} />
        <Route path = "/checkout" element = {<AuthRoute><CheckoutPage /></AuthRoute>} />
    </Routes>
  );
}
