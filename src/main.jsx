import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import Home from './pages/Home'
import Profile from './pages/profile'
import { ContactPage } from './pages/ContactPage'
import { ErrorPage } from './pages/ErrorPage'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/contact-us',
    element: <ContactPage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
]);

ReactDOM.createRoot(document.getElementById('___wynx')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
