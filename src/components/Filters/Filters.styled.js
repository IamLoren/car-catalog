import styled from "styled-components";

export const StyledForm = styled.form`
display: flex;
padding-top: 20px;
padding-bottom: 20px;
justify-content: center;
gap: 18px;

& label {
    display: block;
    margin-bottom: 5px;
}

& input {
    background-color: #F7F7FB;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    &::placeholder {
        color: black;
    }
}
`

export const StyledButton = styled.button`
    padding: 15px 44px;
    background-color: var(--accent-color);
    color: var(--white-text);
    border: none;
    border-radius: 15px;
`