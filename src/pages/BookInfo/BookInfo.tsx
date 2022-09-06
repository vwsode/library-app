import React, { FC } from 'react'
import { Author, BackgroundImage, BookInfoHeader, BookInfoWrapper, HeaderContent, ImageOverlay, Title } from './BookInfo.styles'
import BG_Image from '../../assets/images/thewitcher.jpg'

const BookInfo: FC = () => {
  return (
    <BookInfoWrapper>
      <BookInfoHeader>
        <BackgroundImage src={BG_Image} />
        <ImageOverlay />
        <HeaderContent>
          <Title>THE WITCHER. THE LAST WISH</Title>
          <Author>Andrzej Sapkowski</Author>
        </HeaderContent>
      </BookInfoHeader>
    </BookInfoWrapper>
  )
}

export default BookInfo