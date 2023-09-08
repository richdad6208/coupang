import React from "react";
import { Outlet } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  padding:0;
  margin:0;
}
*, *::after, *::before {
  box-sizing: border-box;
}
`;

const Container = styled.div`
  width: min(1000px, 100% - 2rem);
  margin-inline: auto;
`;

function Root() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default Root;
