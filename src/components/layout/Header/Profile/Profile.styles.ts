import styled from 'styled-components';

interface IAvatar {
  src: string;
}

const HeaderProfile = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img<IAvatar>`
  width: 40px;
  height: 40px;
  border-radius: var(--default-border-radius);
  background: ${(p: IAvatar) => `url(${p.src})`} no-repeat center;
  object-fit: cover;
`;

export { Avatar, HeaderProfile };
