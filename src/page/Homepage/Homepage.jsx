import React from 'react'
import Banner from '../../components/banner/Banner'
import Menu from '../../components/menu/Menu'
import Contact from '../../components/contact/Contact'
import About from '../../components/about/About'

const Homepage = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Menu/>
      <Contact/>
    </div>
  )
}

export default Homepage
