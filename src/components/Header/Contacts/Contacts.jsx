import React, { useState } from "react";

import { CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import logo from "../../../img/logo.png";
import { StyledAddress, StyledDivWrapper, StyledPCall, StyledToggle } from "./Contacts.styled";
import Container from "../../Container/Container";

const Contacts = () => {
  const [theme, setTheme] = useState(true);
  const handleTheme = () => {
    setTheme(!theme);
  };
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

  <StyledToggle
    defaultChecked={theme}
    icons={{
      checked: <CiSun size="15px"/>,
      unchecked: <FaRegMoon size="15px" color="white"/>,
    }}
    onChange={handleTheme} />
    </StyledDivWrapper>
    </Container>
  );
};

export default Contacts;
