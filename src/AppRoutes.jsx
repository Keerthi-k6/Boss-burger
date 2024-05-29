import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './page/Homepage/Homepage.jsx'
import MenuSearch from './page/MenuSearch/MenuSearch.jsx'
import FoodPage from './page/Food/FoodPage.jsx'
import CartPage from './page/Cart/CartPage.jsx'

const AppRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/menu' element={<MenuSearch/>}/>
    <Route path='/search/:searchTerm' element={<MenuSearch/>}/>
    <Route path='/tag/:tag' element={<MenuSearch/>}/>
    <Route path='/food/:id' element={<FoodPage/>}/>
    <Route path='/cart' element={<CartPage/>}/>
   </Routes>
  )
}

export default AppRoutes
