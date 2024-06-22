import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"

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
    path: '/#portfolio',
    element: <Profile />
  },
  {
    path: '/contact-us',
    element: <ContactPage />
  }
]);

ReactDOM.createRoot(document.getElementById('___wynx')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics/>
  </React.StrictMode>,
);
