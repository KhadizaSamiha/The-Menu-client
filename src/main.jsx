import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Recipes from './Pages/Recipes';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './Providers/AuthProvider';
import PrivateRoutes from './Routes/PrivateRoutes';
import Error from './Pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/chef/:id',
        element:<PrivateRoutes><Recipes></Recipes></PrivateRoutes>,
        loader: ({params}) => fetch(`https://the-menu-server-khadizasamiha.vercel.app/chefs/${params.id}`)
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
