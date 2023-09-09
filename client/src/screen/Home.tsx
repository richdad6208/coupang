import React from "react";
import Header from "../components/header/Header";
import styled from "styled-components";
import Slider from "../components/header/Slider";

const Container = styled.div`
  width: 1100px;
  margin-inline: auto;
`;

function Home() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Slider />
    </>
  );
}

export default Home;
