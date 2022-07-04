import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ThemeContextProvider from './hooks/useTheme'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
)
