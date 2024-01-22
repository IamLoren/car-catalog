import React from "react";
import logo from "../../../img/logo.png";
import { StyledAddress, StyledDivWrapper, StyledPCall } from "./Contacts.styled";
import Container from "../../Container/Container";

const Contacts = () => {
  return (
    <Container>
    <StyledDivWrapper>
      <a href="/">
        <img src={logo} alt="" width="150" />
      </a>
      <StyledPCall>Your happy travels are awaiting you!</StyledPCall>
      <StyledAddress>
        <a href="tel:+380730000000">+380730000000</a>
        <a href="mailto: carrent@gmail.com">Email: carrent@gmail.com</a>
      </StyledAddress>
    </StyledDivWrapper>
    </Container>
  );
};

export default Contacts;
