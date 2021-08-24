import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0px 10px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying.length > 0 && nowPlaying && (
        <Section title="Now Playing!">
          {nowPlaying.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              rating={movie.vote_average}
              title={movie.original_title}
              imageURl={movie.poster_path}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {upcoming.length > 0 && nowPlaying && (
        <Section title="Upcoming Movies!">
          {upcoming.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              rating={movie.vote_average}
              title={movie.original_title}
              imageURl={movie.poster_path}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {popular.length > 0 && nowPlaying && (
        <Section title="Popular Movies!!">
          {popular.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              rating={movie.vote_average}
              title={movie.original_title}
              imageURl={movie.poster_path}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {error && <Message text={error} color="#e74c3c" />}
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
