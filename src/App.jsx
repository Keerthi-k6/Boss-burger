import AppRoutes from './AppRoutes'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Loading from './components/Loading/Loading'
import { useLoading } from './hooks/useLoading'
import {setLoadingInterceptor} from './interceptors/loadingInterceptor'
import { useEffect } from 'react'
function App() {
  const {showLoading, hideLoading} = useLoading();
  useEffect(() => {
    setLoadingInterceptor({showLoading, hideLoading})
  },[])
  return (
    <>   
    <div className="App">
      <Loading/>
      <Navbar/>
      <AppRoutes/>
    </div>
    
    </>
  )
}

export default App
