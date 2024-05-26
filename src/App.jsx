import AppRoutes from './AppRoutes'
import './App.css'
import About from './components/about/About'
import Banner from './components/banner/Banner'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'
import Navbar from './components/navbar/Navbar'
import Homepage from './page/Homepage/Homepage'
function App() {

  return (
    <>   
    <div className="App">
      <Navbar/>
      <AppRoutes/>
    </div>
    
    </>
  )
}

export default App
