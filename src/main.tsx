import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainRoutes from './routes/routes'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <MainRoutes />
  </StrictMode>,
)
 