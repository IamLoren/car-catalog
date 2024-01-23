import styled from "styled-components";
import "../../css/variables.css";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  background-color: var(--accent-color);
  color: var(--description-text);
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 200px;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    gap:20px;
  }

  & li {
    @media only screen and (max-width: 767px) {
    text-align: center;
  }
  }
`;

export const StyledLink = styled(NavLink)`
  padding-bottom: 5px;
  font-family: "Manrope-semibold";
  font-size: 24px;

  &.active {
    display: block;
    border-bottom: 2px solid var(--description-text);
  }
`;
