import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './hooks/useCart.jsx'
import './axiosConfig.js'
import { AuthProvider } from './hooks/useAuth.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { LoadingProvider } from './hooks/useLoading.jsx'
import './interceptors/authInterceptor.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LoadingProvider>
      <AuthProvider>
        <CartProvider>
          <App />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
          />
        </CartProvider>
      </AuthProvider>
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>
)
