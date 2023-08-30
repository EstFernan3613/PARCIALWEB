import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Timer from './Timer.jsx'
import Llamadas from './Llamadas.jsx'
import Bienvenida from './Bienvenida.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Timer />
    <Llamadas/>
    <Bienvenida/>
  </React.StrictMode>,
)
