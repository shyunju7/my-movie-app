import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
`;

const Grid = styled.div`
  margin-top: 24px;
  display: grid;
  place-content: center;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, 125px);
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
