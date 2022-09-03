import styled from '@emotion/styled';

const Button = styled.button`
  display: block;
  width: ${p => p.theme.sizes.quater};
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s};

  background-color: ${p => p.theme.colors.grey};
  color: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.lg};
  cursor: pointer;

  transition: color ${p => p.theme.transition.cubic}, background-color ${p => p.theme.transition.cubic};


  &:hover {
    color: ${p => p.theme.colors.black};
    background-color: ${p => p.theme.colors.white};
  }
`;

export default Button;