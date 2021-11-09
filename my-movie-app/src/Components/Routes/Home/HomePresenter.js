import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import { Helmet } from "react-helmet";
import HomeSlider from "Components/HomeSlider";
import HomeSliderItem from "Components/HomeSLiderItem";

const Container = styled.div`
  padding: 20px;
`;

const Cover = styled.div`
  position: relative;
  height: ${(props) => (props.isMobile ? "20vw" : "80vw")};
  align-self: center;
  background-image: url(${(props) => props.backdropPath});
  background-position: center center;
  background-size: cover;
  border-radius: 4px;
  opacity: 0.6;
  margin-bottom: 40px;
`;

const Contents = styled.div`
  width: 100%;
  height: ${(props) => (props.isMobile ? "20vw" : "20vw")};
  position: absolute;
  bottom: 0px;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Title = styled.div`
  font-size: ${(props) => (props.isMobile ? "28px" : "20px")};
  font-weight: bold;
  margin-bottom: 20px;
  z-index: 1000;
`;

const BASE_URL = "https://image.tmdb.org/t/p/original";

const HomePresenter = ({
  nowPlaying,
  popular,
  upcoming,
  videos,
  isMobile,
  loading,
  error,
}) => (
  <>
    <Helmet>
      <title>Movies | songflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {popular.length > 0 && popular && (
          <HomeSlider>
            {popular.map((movie) => (
              <HomeSliderItem
                key={movie.id}
                id={movie.id}
                rating={movie.vote_average}
                overview={movie.overview}
                title={movie.original_title}
                imageURl={movie.backdrop_path}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </HomeSlider>
        )}

        {nowPlaying.length > 0 && nowPlaying && (
          <Section title="NOW PLAYING!">
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
        {upcoming.length > 0 && upcoming && (
          <Section title="UPCOMING MOVIES!">
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
