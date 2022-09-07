import styled from 'styled-components';

type HeaderType = { cover: string };

const Header = styled.div<HeaderType>`
  display: flex;
  align-items: center;
  background: ${(p) => `url(${p.cover})`} no-repeat center;
  padding: 20px 30px;
  position: relative;
  width: 100%;
  height: 240px;
  border-radius: 20px;
  color: var(--color-white);
`;

const BookCoverWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 100%;
`;

const BookCover = styled.img`
  position: absolute;
  top: 0;
  border-radius: 20px;
  width: 100%;
`;
const HeaderContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const HeaderBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const HeaderIcons = styled.ul``;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1;
`;

const Author = styled.span`
  font-size: 18px;
  text-transform: capitalize;
`;

const Tags = styled.ul`
  display: flex;
  gap: 10px;
`;

const TagItem = styled.li`
  cursor: pointer;
  padding: 4px 10px;
  text-transform: capitalize;
  background: #384759;
  border-radius: 4px;
  font-size: 14px;
`;

export {
  Header,
  HeaderContent,
  HeaderBody,
  HeaderIcons,
  BookCoverWrapper,
  BookCover,
  Title,
  Author,
  Tags,
  TagItem,
};
