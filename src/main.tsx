import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import "tailwindcss/tailwind.css"
// import './index.css'
import App from './App'
import axios from "axios";

// axios configurations
axios.defaults.baseURL = "https://api.codingninjas.com/api/v3/";
axios.defaults.headers.post[ 'Content-Type' ] = 'application/x-www-form-urlencoded';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById( 'root' )
)
