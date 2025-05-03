import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// AOS animation import and init (for when you install it)
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// AOS.init()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
