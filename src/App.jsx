import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import {Home} from './menuItems/Home.jsx'
import {About} from './menuItems/About.jsx'
import {Contact} from './menuItems/Contact.jsx'
import {Project1} from './projects/project1/Project1.jsx'
import {Project2} from './projects/project2/Project2.jsx'
import {Project3} from './projects/project3/Project3.jsx'
import {NotFound} from './menuItems/NotFound.jsx'
import {RootLayout} from './layout/RootLayout.jsx'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='project1' element={<Project1 />} />
        <Route path='project2' element={<Project2 />} />
        <Route path='project3' element={<Project3 />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return (
       <RouterProvider router={router} />
  )
}

export default App