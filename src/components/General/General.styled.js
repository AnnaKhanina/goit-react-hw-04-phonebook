import styled from '@emotion/styled';

const GeneralPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.primary};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${p => p.theme.space[5]}px;
  width: ${p => p.theme.sizes.l};
  
  & h1 {
    font-size: ${p => p.theme.fontSizes.xl};
    margin: auto auto ${p => p.theme.space[3]}px auto;
  }
`;

export default GeneralPage;