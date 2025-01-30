import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/common/RootLayout.jsx'
import Dashboard from './components/pages/Dashboard.jsx'
import Login from './components/pages/Login.jsx'
let router=createBrowserRouter(
  [
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          path:'/dashboard',
          element:<Dashboard/>
        }
      ]
    },
    
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
