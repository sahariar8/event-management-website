import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './routes/Router'
import { RouterProvider } from 'react-router-dom'
import ContextProvider from './Provider/ContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
        <RouterProvider router={Router}></RouterProvider>
    </ContextProvider>
  </React.StrictMode>,
)
