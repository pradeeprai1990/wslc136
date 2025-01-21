import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/pages/Home'
import About from './components/pages/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/common/Layout'
import Login from './components/pages/Login'
import Product from './components/pages/Product'
import ProductDetails from './components/pages/ProductDetails'
import MainContext from './context/MainContext'

let route=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',  //http://localhost:5173/,
        element:<Home/>
      },
      {
        path:'/about-us',  //http://localhost:5173/about-us,
        element:<About/>
      },
      {
        path:'/product',  
        element:<Product/>
      },
      {
        path:"/product-details/:pid",
        element:<ProductDetails/>
      }
    ]
  },
  {
    path:'/login',
    element:<Login/>
  },
  
  
])

createRoot(document.getElementById('root')).render(
   <MainContext name="pradeep">
         <RouterProvider router={route}/>
    </MainContext>
 
)
