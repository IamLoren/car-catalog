import styled from "styled-components";

export const StyledLi = styled.li`
width: 100%;
    & img {
        width: 100%;
        height: 268px;
        transform: scale(1.3);
        transition: all 0.5s;

        &:hover {
            transform: scale(1.05);
        }
    }
`
export const ImgWrapperDiv = styled.div`
width: 100%;
border-radius: 14px;
object-fit: cover;
overflow: hidden;
`