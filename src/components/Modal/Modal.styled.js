import styled from "styled-components";

export const StyledDropWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    width:100vw;
    height: 100vh;
    background-color: rgba(18, 20, 23, 0.50);
    backdrop-filter: blur(5px);

    & article {
        position: relative;
        width: 541px;
        max-height: 752px;
        margin: auto;
        padding: 40px 35px;
        background-color: white;
        border-radius: 24px;
    }

    & li {
        display: inline-block;
    }
`
export const ImgWrapperDiv = styled.div`
    width: 100%;
    height: 35%;
    border-radius: 14px;
    overflow: hidden;

    & img {
        width: 100%;
    }
    `

export const StyledDescriptionWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 65%;
`

export const StyledCloseButton = styled.button`
position: absolute;
top: 15px;
right: 10px;
border: none;
background: transparent;

`