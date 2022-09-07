import React, { FC } from 'react';
import { IBookInfo } from '../../core/intefaces/IBookInfo.interfce';
import BookInfo from '../BookInfo/BookInfo';

const Home: FC = () => {
  return (
    <div>
      <BookInfo />
    </div>
  );
};

export default Home;
