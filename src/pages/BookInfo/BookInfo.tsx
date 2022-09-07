import React, { FC } from 'react';
import { IBookInfo } from '../../core/intefaces/IBookInfo.interfce';
import { BookInfoWrapper } from './BookInfo.styles';
import BookInfoHeader from './BookInfoHeader/BookInfoHeader';
import BgCover from '../../assets/images/witcher-banner.png';
import BookInfoContent from './BookInfoContent/BookInfoContent';

const BookInfo: FC = () => {
  const obj: IBookInfo = {
    title: 'THE WITCHER. THE LAST WISH',
    tags: [
      { title: 'Fantasy', id: 100 },
      { title: 'Adventure', id: 101 },
      { title: 'Drama', id: 102 },
      { title: 'Horror', id: 103 },
    ],
    author: 'Andrzej Sapkowski',
    cover: BgCover,
  };

  return (
    <BookInfoWrapper>
      <BookInfoHeader {...obj} />
      <BookInfoContent />
    </BookInfoWrapper>
  );
};

export default BookInfo;
