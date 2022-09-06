import React, { FC } from 'react'
import { NavLink, NavList } from './NavBar.styles'
import { NAVIGATION_DATA_LIST } from '../../../../core/data/navigation-data'

const NavBar: FC = () => {
  return (
    <NavList>
        {NAVIGATION_DATA_LIST.map((item) => (
            <NavLink key={item.id} src={item.icon} to={item.path}>
              <i className='nav__link-icon'>
                {item.icon}
              </i>
              {item.title}
            </NavLink>
        ))}
    </NavList>
  )
}

export default NavBar