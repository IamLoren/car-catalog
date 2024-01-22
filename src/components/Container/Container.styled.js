import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  /* padding-left: 16px; */
  padding-right: 16px;

  @media only screen and (max-width: 1440px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media only screen and (max-width: 767px) {
    max-width: 375px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;