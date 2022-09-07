import React, { FC } from 'react';
import { Paragraph, Subtitle } from '../../../components/ui';
import {
  ContentContainer,
  ContentBody,
  TextBlock,
  DataBlock,
  ContentText,
} from './BookInfoContent.styles';
import DataBlockItem from './DataBlockItem';

const BookInfoContent: FC = () => {
  return (
    <ContentContainer>
      <ContentBody>
        <ContentText>
          <TextBlock>
            <Subtitle>About</Subtitle>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti magni eius commodi
              non quod dolorum iure consectetur velit excepturi reiciendis sit iste, nostrum maiores
              accusantium nam, aliquid a, eveniet perferendis harum officiis earum omnis
              exercitationem. Necessitatibus tempore velit molestias fuga deleniti unde soluta, nemo
              eius nostrum sit dignissimos maxime quia!
            </Paragraph>
          </TextBlock>
          <TextBlock>
            <Subtitle>Publisher Information</Subtitle>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolore nesciunt
              nobis, assumenda quisquam non esse pariatur dolores impedit nihil ipsum totam tenetur
              iste molestias deserunt facere ab. Itaque, enim?
            </Paragraph>
          </TextBlock>
        </ContentText>
        <DataBlock>
          <DataBlockItem text="Orbit" title="Publisher" />
          <DataBlockItem text="Orbit" title="Publisher" />
          <DataBlockItem text="Orbit" title="Publisher" />
          <DataBlockItem text="Orbit" title="Publisher" />
        </DataBlock>
      </ContentBody>
    </ContentContainer>
  );
};

export default BookInfoContent;
