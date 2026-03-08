import React from 'react'
import {Outlet} from 'react-router-dom'
import {Navbar} from '../components/Navbar.jsx'

export const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}
