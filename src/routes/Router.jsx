import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../component/Home/Home';
import About from '../component/About/About';
import Services from '../component/services/Services';
import Gallery from '../component/gallery/Gallery';
import Login from '../component/Authentication/Login';
import Register from '../component/Authentication/Register';
import ErrorPage from '../component/Error/ErrorPage';
import PrivateRoute from '../private/PrivateRoute';
import Details from '../Details/Details';
import Contact from '../component/Contact/contact';


const Router = createBrowserRouter([
    {
      path:'/',
      element:<Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/services',
            element:<Services></Services>
        },
        {
            path:'/gallery',
            element:<PrivateRoute><Gallery></Gallery></PrivateRoute>
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
            path:'/details/:id',
            loader:()=>fetch('/service.json'),
            element:<PrivateRoute><Details></Details></PrivateRoute>
        },
      ]
    }
  ])

export default Router;