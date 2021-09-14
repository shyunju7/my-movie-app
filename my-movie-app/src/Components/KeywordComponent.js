import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  border: 1px solid #ffa31a;
  background-color: rgba(255, 218, 159, 0.2);
  //background-color: rgba(253, 245, 234, 0.2);
  margin: 0 4px 10px 4px;

  padding: 2px 8px;
`;

const KeywordText = styled.h3`
  color: #ffa31a;
  font-size: 16px;
  font-weight: bold;
`;

const KeywordComponent = ({ text }) => (
  <Container>
    <KeywordText># {text}</KeywordText>
  </Container>
);

export default KeywordComponent;
