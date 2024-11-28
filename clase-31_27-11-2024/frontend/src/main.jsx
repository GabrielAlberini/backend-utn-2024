import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bulma/css/bulma.min.css"
import { AuthProvider } from './context/AuthContext.jsx'
import { AppRouter } from './router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </StrictMode>,
)
