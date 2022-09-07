import React, { FC } from 'react';
import styled from 'styled-components';

interface IBookInfoContainer {
  children: React.ReactNode;
}

const Container = styled.div`
  padding: 40px;
  width: 1080px;
  margin-left: auto;
`;

const BookInfoContainer: FC<IBookInfoContainer> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default BookInfoContainer;
