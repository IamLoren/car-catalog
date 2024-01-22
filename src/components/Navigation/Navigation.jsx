import React from "react";
import Container from "../Container/Container";
import { StyledLink, StyledNav, StyledUl } from "./Navigation.styled";

const Navigation = () => {
  return (
  
    <StyledNav>
      <Container>
        <StyledUl>
        <li>
          <StyledLink to={"/"}>Home</StyledLink>
        </li>
        <li>
          <StyledLink to={"catalog"}>Catalog</StyledLink>
        </li>
        <li>
          <StyledLink to={"favorites"}>Favorites</StyledLink>
        </li>
      </StyledUl>
      </Container>
    </StyledNav>
  );
};

export default Navigation;
