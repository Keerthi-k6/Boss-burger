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
import OrderTrackPage from './page/OrderPage/OrderTrackPage.jsx'
import Profile from './page/Profile/Profile.jsx'
import OrderPage from './page/Order/OrderPage.jsx'
import Dashboard from './page/Dashboard/Dashboard.jsx'
import AdminRoutes from './components/AdminRoutes/AdminRoutes.jsx'
import FoodsAdmin from './page/FoodsAdmin/FoodsAdmin.jsx'
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
    <Route 
    path='/track/:orderId' 
    element={<AuthRoute>
            <OrderTrackPage/>
           </AuthRoute>}/>
    <Route 
    path='/profile' 
    element={<AuthRoute>
            <Profile/>
           </AuthRoute>}/>
    <Route 
    path='/orders/:filter?' 
    element={<AuthRoute>
            <OrderPage/>
           </AuthRoute>}/>
    <Route 
    path='/dashboard' 
    element={<AuthRoute>
            <Dashboard/>
           </AuthRoute>}/>
    <Route 
    path='/admin/foods/:searchTerm?' 
    element={<AdminRoutes>
            <FoodsAdmin/>
           </AdminRoutes>}/>

    
   </Routes>
  )
}

export default AppRoutes
