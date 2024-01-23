import styled, { keyframes } from "styled-components";

const moveLight = keyframes`
    from {
        transform: translateX(-4em) skewX(-45deg);
    }
    to {
        transform: translateX(335px) skewX(-45deg);
    }
`;

export const StyledButton = styled.button`
    width: 100%;
    background-color: var(--accent-color);
    color: white;
    padding: 15px 100px;
    border: none;
    border-radius: 12px;
    position: relative;
    overflow: hidden;

    &:before {
        display: block;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.2);
        transform: translateX(-4em) skewX(-45deg);
    }

    &:hover:before {
        animation: ${moveLight} 0.5s;
    }
`;