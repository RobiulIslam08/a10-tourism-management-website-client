import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home';
import AddTouristsSports from './pages/addTouristsSports/AddTouristsSports';
import AllTouristsSports from './pages/allToristSports/AllTouristsSports';
import MainLayout from './layout/MainLayout';
import MyList from './pages/myList/MyList';
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import ErrorPage from './pages/errorPage/ErrorPage';
import AuthProviders from './providers/AuthProviders';
import Details from './components/details/Details';
import AddTouristProtected from './privetRoute/AddTouristProtected';
import MyListProtected from './privetRoute/MyListProtected';
import ViewDateailsProtected from './privetRoute/ViewDateailsProtected';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/addTouristsSports')
        
      },
      {
        path: 'addTouristsSports',
        element: <AddTouristProtected><AddTouristsSports></AddTouristsSports></AddTouristProtected>,
      },
      {
        path: 'allTouristsSports',
        element: <AllTouristsSports></AllTouristsSports>,
        loader: ()=> fetch('http://localhost:5000/allTouristsSports')

      },
      {
        path: 'mylist',
        element:<MyListProtected> <MyList></MyList></MyListProtected>
      },
      {
        path: 'login',
        element: <LoginPage></LoginPage>,

      },
      {
        path: 'register',
        element: <RegisterPage></RegisterPage>,
      },
      {
        path:'/details/:_id',
        element:<ViewDateailsProtected><Details></Details></ViewDateailsProtected>,
        loader: ({params})=> fetch(`http://localhost:5000/addTouristsSports/${params._id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
