import styled from '@emotion/styled';

const Form = styled.form`
  padding: 15px 10px; ${p => p.theme.space[4]}px ${p => p.theme.space[3]}px;
  width: ${p => p.theme.sizes.l};
  border: 5px solid ${p => p.theme.colors.grey};
  border-radius: 10px;${p => p.theme.radii.round};

  display: flex;
  flex-direction: column;
`;

export default Form;