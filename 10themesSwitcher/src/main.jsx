import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(   // ReactDOM.createRoot() is used to render the root component
  <React.StrictMode>
    <App />     // App component is rendered here
  </React.StrictMode>
)
