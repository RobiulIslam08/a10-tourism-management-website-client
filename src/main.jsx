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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'addTouristsSports',
        element: <AddTouristsSports></AddTouristsSports>,
      },
      {
        path: 'allTouristsSports',
        element: <AllTouristsSports></AllTouristsSports>
      },
      {
        path: 'mylist',
        element: <MyList></MyList>
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
        path:'details',
        element:<Details></Details>
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
