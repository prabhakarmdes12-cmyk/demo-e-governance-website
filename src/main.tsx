import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'ux4g-web-components/styles.css'
import 'ux4g-web-components/design-system'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
