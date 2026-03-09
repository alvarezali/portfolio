import React from 'react'
import logo from '../assets/react.svg'
import {menuItemsData} from '../menuItemsData.js'
import { MenuItem } from './MenuItem.jsx'

export const Navbar = () => {

  return (
    <div className='nav-container'>
        <img className='nav-img' src={logo} alt="logo" />
        <ul className='nav-ul'>
            {menuItemsData.map(item => <MenuItem item={item.title} key={item.id} />)}
        </ul>
        <button className="nav-btn">T</button>
    </div>
  )
}
