import styled from "styled-components";

export const StyledDropWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  backdrop-filter: blur(5px);

  & article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 541px;
    min-height: 752px;
    margin: auto;
    padding: 40px 35px;
    background-color: var(--main-bg);
    box-shadow: 1px 1px 4px lightgray;
    border-radius: 24px;
  }

  & h2 {
    font-family: "Manrope-medium";
    color: var(--name-text);
    font-size: 18px;
  }

  & ul {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  & li {
    display: inline-block;
    font-family: "Manrope-regular";
    font-size: 12px;
    line-height: 16px;
  }
`;
export const ImgWrapperDiv = styled.div`
  width: 100%;
  height: 33%;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 15px;

  & img {
    width: 100%;
  }
`;

export const StyledDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 65%;
`;

export const StyledP = styled.p`
  font-family: "Manrope-regular";
  font-size: 14px;
  line-height: 20px;
  color: var(--name-text);
`;
export const StyledUlAccessories = styled.ul`
  font-family: "Manrope-regular";
  font-size: 14px;
  line-height: 18px;
  color: var(--name-text);

  & li {
    color: var(--tags-color);
    line-height: 18px;
  }
`;

export const StyledUlConditions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-family: "Manrope-regular";
  font-size: 14px;
  line-height: 20px;
  color: var(--name-text);
  margin-top: 0;

  & li {
    color: var(--tags-color);
    line-height: 18px;
  }
`;
export const StyledCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 10px;
  border: none;
  background: transparent;
`;

export const StyledAccentSpan = styled.span`
font-size: var(--base-font-size);
font-weight: 700;
  color: var(--accent-color);
`;

export const StyledLink = styled.a`
  width: fit-content;
  padding: 12px 50px;
  background-color: var(--accent-color);
  border: 1px solid transparent;
  border-radius: 12px;
  color: var(--description-text);
  margin-top: 10px;
  transition: all 0.5s;

  &:hover {
    background-color: var(--description-text);
    color: var(--accent-color);
    border: 1px solid blue;
  }
`;
