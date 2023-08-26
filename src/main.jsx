import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './componnets/navbar/navbar.jsx'
import './index.css'
import Footer from "./componnets/footer.jsx";
import MiniSidebar from "./componnets/sidebar/miniSidebar.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

          <MiniSidebar/>

  </React.StrictMode>,
)
