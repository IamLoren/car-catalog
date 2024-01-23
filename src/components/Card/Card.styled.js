import { FiHeart } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 451px;
  padding: 5px;
  border-radius: 20px;
  box-shadow: 1px 1px 4px lightgray;
  position: relative;
  & img {
    height: 268px;
    object-position: center;
    object-fit: contain;
    transform: scale(1.2);
    transition: all 0.5s;

    &:hover {
      transform: scale(1);
    }
  }
`;
export const ImgWrapperDiv = styled.div`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
  overflow: hidden;
  margin-bottom: 10px;
`;
export const StyledH = styled.h2`
  display: flex;
  font-family: "Manrope-medium";
  color: var(--name-text);
  font-size: 16px;
  margin-bottom: 20px;

  & span:last-child {
    margin-left: auto;
  }
`;
export const AccentSpan = styled.span`
  color: var(--accent-color);
`;
export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;

  & li {
    font-family: "Manrope-regular";
    font-size: 12px;
    line-height: 18px;
  }
`;
export const StyledSpanTooltip = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const StyledTooltip = styled(Tooltip)`
 &#my-tooltip {
    background-color: var(--main-bg);
    border: 1px solid lightgray;
    border-radius: 15px;
    color: var(--tags-color);
  }
`;

export const StyledHeart = styled(FiHeart)`
  &.heart {
  }
`;
