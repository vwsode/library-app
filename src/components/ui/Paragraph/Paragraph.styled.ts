import styled from 'styled-components';

interface ParagraphProps {
  width?: string;
}

export const Paragraph = styled.p<ParagraphProps>`
  font-size: 14px;
  width: ${(p) => p.width};
`;
