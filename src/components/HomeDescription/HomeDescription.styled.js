import styled from "styled-components";
import HomeBG from '../../img/Home-bg.webp';

export const StyledDivWrapper = styled.div`
    width: 100%;
    height: 500px;
    background-image: url(${HomeBG});
    background-size: cover;
    background-repeat: non-repeat;
    background-position: center;
    padding-top: 140px;

    @media only screen and (max-width: 1430px) {
        padding-top: 40px;
      }
`

export const StyledArticle = styled.article`
width: 45%;
    color: var(--description-text);

    & h1 {
        font-family: "Manrope-semibold";
        font-size: 35px;
        margin-bottom: 20px;
    }

    & p {
        font-size: 24px;
        margin-bottom: 20px;
    }
`