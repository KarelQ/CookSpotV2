import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Dynamicznie ustaw id na div#root
const rootElement = document.getElementById("root");
if (window.location.pathname === "/login" || window.location.pathname === "/register") {
    rootElement.setAttribute("class", "login-bimg");
} else {
    rootElement.setAttribute("class", "bimg base-container"); // domyślne
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
          <App />
  </StrictMode>,
)

