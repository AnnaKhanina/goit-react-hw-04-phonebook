import styled from '@emotion/styled';

const ContactsItem = styled.div`
  & p {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
  & ul {
    margin-top: 10px;${p => p.theme.space[4]}px;
  }
  & li {
    font-size: 22px;${p => p.theme.fontSizes.m};
  }
`;

export default ContactsItem;