import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Apply saved theme BEFORE first React render to avoid flash
try {
  const saved = localStorage.getItem('portfolio-theme') || 'dark'
  document.documentElement.setAttribute('data-theme', saved)
} catch (e) {
  document.documentElement.setAttribute('data-theme', 'dark')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)