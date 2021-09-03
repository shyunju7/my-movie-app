import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  font-size: 28px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const LoadingMessage = styled.h2`
  font-size: 40px;
  font-family: "Glory-bold";
  color: #c3c5c9;
`;

const Loader = () => (
  <Container>
    <LoadingMessage>
      <span role="img" aria-label="Loading">
        🍿{" "}
      </span>
      Loading...
    </LoadingMessage>
  </Container>
);

export default Loader;
