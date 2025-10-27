import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './mobile.css'
import Web from './Website.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Web/>
  </StrictMode>,
)
