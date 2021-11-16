import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  text-align: center;
  height: 12vh;
`;

const Footer = () => {
  return <Container>&copy; {new Date().getFullYear()} SONGFLIX</Container>;
};

export default Footer;
