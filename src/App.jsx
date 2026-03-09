import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import {Home} from './menuItems/Home.jsx'
import {About} from './menuItems/About.jsx'
import {Contact} from './menuItems/Contact.jsx'
import {Projects} from './menuItems/Projects.jsx'
import {NotFound} from './menuItems/NotFound.jsx'
import {RootLayout} from './layout/RootLayout.jsx'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='projects' element={<Projects />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return (
       <RouterProvider router={router} />
  )
}

export default App