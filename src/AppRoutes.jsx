import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './page/Homepage/Homepage.jsx'
import MenuSearch from './page/MenuSearch/MenuSearch.jsx'
import FoodPage from './page/Food/FoodPage.jsx'
import CartPage from './page/Cart/CartPage.jsx'
import LoginPage from './page/Login/LoginPage.jsx'
import Register from './page/Register/Register.jsx'
import AuthRoute from './components/AuthRoute/AuthRoute.jsx'
import CheckoutPage from './page/checkout/CheckoutPage.jsx'
import PaymentPage from './page/Payment/PaymentPage.jsx'

const AppRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/menu' element={<MenuSearch/>}/>
    <Route path='/search/:searchTerm' element={<MenuSearch/>}/>
    <Route path='/tag/:tag' element={<MenuSearch/>}/>
    <Route path='/food/:id' element={<FoodPage/>}/>
    <Route path='/cart' element={<CartPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route 
    path='/checkout' 
    element={<AuthRoute>
            <CheckoutPage/>
           </AuthRoute>}/>
    <Route 
    path='/payment' 
    element={<AuthRoute>
            <PaymentPage/>
           </AuthRoute>}/>
   </Routes>
  )
}

export default AppRoutes
