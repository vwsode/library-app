import React, { FC } from 'react';
import { BsBookmarkFill } from 'react-icons/bs';
import { StyledButton } from '../../../components/ui/Buttpn/Button.styles';
import BookInfoContainer from '../../../components/ui/Containers/BookInfoContainer';
import { IBookInfo } from '../../../core/intefaces/IBookInfo.interfce';
import {
  Author,
  BookCover,
  Header,
  HeaderBody,
  HeaderContent,
  BookCoverWrapper,
  HeaderIcons,
  TagItem,
  Tags,
  Title,
} from './BookInfoHeader.styles';

const BookInfoHeader: FC<IBookInfo> = ({ title, author, tags, cover }) => {
  return (
    <Header cover={cover}>
      <HeaderBody>
        <HeaderContent>
          <Title>{title}</Title>
          <Author>{author}</Author>
          <Tags>
            {tags.map((tag) => (
              <TagItem key={tag.id}>{tag.title}</TagItem>
            ))}
          </Tags>
        </HeaderContent>
        <HeaderIcons>
          <BsBookmarkFill size={24} />
        </HeaderIcons>
      </HeaderBody>
    </Header>
  );
};

export default BookInfoHeader;
