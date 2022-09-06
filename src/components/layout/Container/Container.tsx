import React, { FC } from 'react'
import styled from 'styled-components'


interface IContainer {
    children: React.ReactNode;
}

const StyledContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 20px;
`


const Container: FC<IContainer> = ({ children }) => {
  return (
    <StyledContainer>{children}</StyledContainer>
  )
}

export default Container