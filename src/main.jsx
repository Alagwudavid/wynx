import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import Home from './pages/Home'
import Profile from './pages/profile'
import { ContactPage } from './pages/ContactPage'
import { ErrorPage } from './pages/ErrorPage'

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
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
