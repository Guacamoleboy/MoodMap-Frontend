// Pathing
// _______
// src/main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from "@context/AuthProvider"
import { HelmetProvider } from 'react-helmet-async'
import '@styles/style.css'
import '@styles/animation.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)