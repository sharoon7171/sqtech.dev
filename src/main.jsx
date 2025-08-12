import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/base/theme.css'
import './styles/base/fonts.css'
import './styles/base/typography-spacing.css'
import './styles/base/app.css'
import './styles/components/buttons.css'
import './styles/components/links.css'
import './styles/components/HeroSection.css'
import './styles/components/StatsSection.css'
import './styles/components/StatCard.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
