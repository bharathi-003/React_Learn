import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Brouse from './Brouse.jsx'
import Menu from './Day1/Menu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu/>
    <App />
    <Brouse/>
  </StrictMode>,
)
