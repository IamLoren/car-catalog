import React from "react";
import Contacts from "./Contacts/Contacts";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header>
      <Contacts />
      <Navigation />
    </header>
  );
};

export default Header;
