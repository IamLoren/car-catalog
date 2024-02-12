import React, { useEffect} from "react";

import { CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import logo from "../../../img/logo.png";
import { StyledAddress, StyledDivWrapper, StyledPCall, StyledToggle } from "./Contacts.styled";
import Container from "../../Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { themeOfSite } from "../../../redux/selectors";
import { changeTheme } from "../../../redux/catalogSlice/catalogSlice";

const Contacts = () => {
  const dispatch = useDispatch();
  const theme = useSelector(themeOfSite);
  const handleTheme = () => {
    dispatch(changeTheme(!theme));
  };

  useEffect(() => {
    if(!theme) {
       document.documentElement.classList.add('page-theme-dark');
    } else {
      document.documentElement.classList.remove('page-theme-dark');
    }
  }, [theme]);

  return (
    <Container>
    <StyledDivWrapper>
      <a href="/car-catalog">
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
