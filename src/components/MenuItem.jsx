import React from 'react'
import { NavLink } from 'react-router-dom'

export const MenuItem = ({item, id, subitem}) => {
  return (

      subitem ? 
      ( 
        <li className='nav-li dropdown-container'>
          {item}
          <div className="dropdown-wrapper">
            <ul className='dropdown-ul'>
              {subitem.map(subitem => {
                return (<NavLink to={`/${subitem.title.toLocaleLowerCase()}`} key={subitem.id} >
                          <li className='nav-li dropdown-li'>{subitem.title}</li>
                        </NavLink>
                        )
              })}
            </ul>
          </div>
        </li>

      ) : 
      (
        <NavLink to={`/${item.toLocaleLowerCase()!=='home' ? item.toLocaleLowerCase() : '' }`} key={id} >
          <li className='nav-li'>{item}</li>
        </NavLink>
      )
    
  )
}
