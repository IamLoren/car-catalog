import React from "react";
import Container from "../components/Container/Container";
import IconsLine from "../components/IconsLine/IconsLine";
import HomeDescription from "../components/HomeDescription/HomeDescription";

const Home = () => {
  return (
    <section>
      <Container>
        <HomeDescription />
        <IconsLine />
      </Container>
    </section>
  );
};

export default Home;
