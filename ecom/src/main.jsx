import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'
import Home from './Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Home/>
    <Footer/>
  </StrictMode>,
)
