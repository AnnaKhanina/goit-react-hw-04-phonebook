import styled from '@emotion/styled';

const ButtonDeleteStyle = styled.button`
  margin-left: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.black};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.round};
  cursor: pointer;
  transition: color ${p => p.theme.transition.cubic}, background-color ${p => p.theme.transition.cubic};

  &: hover {
    background-color: ${p => p.theme.colors.purple};
    color: ${p => p.theme.colors.white};
  }
`;

export default ButtonDeleteStyle;