import React, { FC } from 'react';
import { DataBlockItemText, DataBlockItemTitle } from './BookInfoContent.styles';

interface IDataBlockItem {
  title: string;
  text: string;
}

const DataBlockItem: FC<IDataBlockItem> = ({ title, text }) => {
  return (
    <DataBlockItemTitle>
      {title}
      <DataBlockItemText>{text}</DataBlockItemText>
    </DataBlockItemTitle>
  );
};

export default DataBlockItem;
