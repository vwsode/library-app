import React, { FC } from 'react'
import Container from './Container/Container';
import Header from './Header/Header';

interface ILayout {
    children: React.ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <Container>
        <Header />
        {children}
    </Container>
  )
}

export default Layout