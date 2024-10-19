import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import { Provider } from 'react-redux'
import "slick-carousel/slick/slick.css";
import "react-toastify/dist/ReactToastify.css";
import firebaseConfig from './firebase.config.js'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />  
      <ToastContainer/>
    </Provider>
    
)
