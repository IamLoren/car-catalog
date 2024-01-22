import styled, { keyframes } from "styled-components";


export const AnimationWrapper = styled.div`
    position: relative; 
overflow: hidden; 
padding-top: 20px;
`
const scrollAnimation = keyframes`
  0% {
    transform: translateZ(0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  gap: 150px;
  align-items: center;
  margin: 0;
  list-style: none;
  white-space: nowrap;  
  
  animation: ${scrollAnimation} 10s linear infinite;
 
  & li {
    display: inline-block;
  
  }
`;
