import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";

const Container = styled.div`
  padding: 10px 0;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
  loading ? null : (
    <Container>
      {nowPlaying.length > 0 && nowPlaying && (
        <Section title="Now Playing!">
          {nowPlaying.map((movie) => movie.title)}
        </Section>
      )}
      {upcoming.length > 0 && nowPlaying && (
        <Section title="Upcoming Movies!">
          {upcoming.map((movie) => movie.title)}
        </Section>
      )}

      {popular.length > 0 && nowPlaying && (
        <Section title="Popular Movies!!">
          {popular.map((movie) => movie.title)}
        </Section>
      )}
    </Container>
  );

HomePresenter.propType = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
