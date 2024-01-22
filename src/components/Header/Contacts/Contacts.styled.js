import styled from "styled-components";


export const StyledDivWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top:10px;
    padding-bottom: 10px;

    & a {
        display: block;
    }
`

export const StyledPCall = styled.p`
font-family: "Manrope-semibold";
font-size: 30px;
font-weight: 900;
color: var(--accent-color);

`
export const StyledAddress = styled.address`
display: flex;
flex-direction: column;
gap: 25px;
color: var(--accent-color);
`