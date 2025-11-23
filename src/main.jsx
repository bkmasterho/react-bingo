import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { BingoProvider } from './context/BingoProvider'
import router from './router'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BingoProvider>
        <RouterProvider router={router} />
    </BingoProvider>
  </StrictMode>,
)
