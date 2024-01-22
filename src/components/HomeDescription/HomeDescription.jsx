import React from "react";
import { StyledArticle, StyledDivWrapper } from "./HomeDescription.styled.js";
import Container from "../Container/Container.jsx";

const HomeDescription = () => {
  return (
    <StyledDivWrapper>
      <Container>
        <StyledArticle>
          <h1>Rent a Car with CarRent and Drive Happy</h1>
          <p>
            Book your next rental car in advance with Plan Ahead Specials and
            save money on rentals
          </p>
          <p>
            Enjoy a free one-car class upgrade on your next car rental of an
            economy, compact, intermediate, midsize or standard size car..
          </p>
        </StyledArticle>
      </Container>
    </StyledDivWrapper>
  );
};

export default HomeDescription;
