import styled from '@emotion/styled';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${p => p.theme.fontSizes.ml};
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[5]}px;
  }
`;

export default Label;