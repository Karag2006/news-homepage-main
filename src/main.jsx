import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App.jsx'
import {Footer} from './Components'
import './scss/style.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
)
