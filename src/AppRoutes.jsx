import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './page/Homepage/Homepage.jsx'
import MenuSearch from './page/MenuSearch/MenuSearch.jsx'

const AppRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/menu' element={<MenuSearch/>}/>
    <Route path='/search/:searchTerm' element={<MenuSearch/>}/>
    <Route path='/tag/:tag' element={<MenuSearch/>}/>
   </Routes>
  )
}

export default AppRoutes
