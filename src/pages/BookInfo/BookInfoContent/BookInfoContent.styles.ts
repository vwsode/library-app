import styled from 'styled-components';

const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
`;

const ContentBody = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 1fr;
  flex-direction: column;
  gap: 20px;
`;
const ContentText = styled.div``;
const TextBlock = styled.div`
  margin: 20px 0;
`;
const DataBlock = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: end;
  gap: 20px;
`;
const DataBlockItemTitle = styled.div`
  padding: 0;
  font-weight: 600;
`;
const DataBlockItemText = styled.div`
  padding: 5px 0;
  font-weight: 400;
`;

export {
  ContentContainer,
  ContentBody,
  TextBlock,
  DataBlock,
  ContentText,
  DataBlockItemTitle,
  DataBlockItemText,
};
