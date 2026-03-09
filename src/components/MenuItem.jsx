import React from 'react'
import { NavLink } from 'react-router-dom'

export const MenuItem = ({item, id}) => {
  return (

        <NavLink to={`/${item.toLocaleLowerCase()!=='home' ? item.toLocaleLowerCase() : '' }`} key={id} >
          <li className='nav-li'>{item}</li>
        </NavLink>
      )

}
