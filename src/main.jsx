import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import MainLayout from './componets/MainLayout/MainLayout'
import ErrorElement from './componets/ErrorElement/ErrorElement'
import Home from './pages/Home'
import ProductsCard from './componets/ProductsCard/ProductsCard'
import Products from './pages/Products'
import DashBoard from './pages/DashBoard'
import Statistics from './pages/Statistics'
import ContactUs from './pages/ContactUs'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorElement></ErrorElement>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('../gadget.json'), 
        
      },
      
      {
        path: '/details/:id',
        element: <Products></Products>,
        loader: () => fetch('../gadget.json')
      }
      ,
     
      {
        path: '/dashBoard',
        element: <DashBoard></DashBoard>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      
      
    ]
  }
  
 
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
