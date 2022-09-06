import React, { FC } from 'react'
import NavBar from './NavBar/NavBar'
import { StyledHeader } from './Header.styles'
import Logo from '../../ui/logo/Logo'
import Profile from './Profile/Profile'


const Header: FC = () => {
  return (
    <StyledHeader>
        <Logo />
        <NavBar/>
        <Profile />
    </StyledHeader>
  )
}

export default Header