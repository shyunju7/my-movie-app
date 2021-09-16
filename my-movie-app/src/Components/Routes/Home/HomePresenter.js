import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import { Helmet } from "react-helmet";
import HomeSlider from "Components/HomeSlider";
import NoImage from "assets/defaultImage.png";
import ReactPlayer from "react-player";

const Container = styled.div`
  padding: 20px;
`;

const Cover = styled.div`
  position: relative;
  width: 100vw;
  height: 90vh;
  align-self: center;
  background-image: url(${(props) => props.backdropPath});
  background-position: center center;
  background-size: cover;
  border-radius: 4px;
  opacity: 0.6;
`;

const Contents = styled.div`
  width: 100%;
  height: 30vh;
  position: absolute;
  bottom: 0px;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  z-index: 1000;
`;

const Overview = styled.p`
  width: 80%;
  font-size: 18px;
  opacity: 0.7;
  margin-top: 20px;
`;

const Rating = styled.span`
  font-size: 14px;
`;

const BASE_URL = "https://image.tmdb.org/t/p/original";

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => (
  <>
    <Helmet>
      <title>Movies | songflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {popular && popular.length > 0 && (
          <HomeSlider>
            {popular.map((movie) => (
              <Cover
                key={movie.id}
                backdropPath={
                  movie.backdrop_path
                    ? `${BASE_URL}${movie.backdrop_path}`
                    : `${NoImage}`
                }
              >
                <Title>MOVIE</Title>
                <Contents>
                  <Title>{movie.original_title}</Title>
                  <Rating>
                    <span aria-label="Rating" role="img">
                      ⭐️{" "}
                    </span>
                    {movie.vote_average}
                  </Rating>
                  <Overview>{movie.overview}</Overview>
                </Contents>
              </Cover>
            ))}
          </HomeSlider>
        )}
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
    )}
  </>
);
HomePresenter.propType = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
