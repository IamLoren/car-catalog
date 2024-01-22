import styled from "styled-components";
import HomeBG from '../../img/Home-bg.webp';

export const StyledDivWrapper = styled.div`
    width: 100%;
    height: 500px;
    background-image: url(${HomeBG});
    background-size: cover;
    background-repeat: non-repeat;
    background-position: center;
    padding-top: 150px;
`

export const StyledArticle = styled.article`
width: 50%;
    color: var(--white-text);

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