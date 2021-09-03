import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import NoImage from "assets/defaultImage.png";
import { Helmet } from "react-helmet";
import ReactPlayer from "react-player";
import ActorProfile from "Components/ActorProfile";
import SimilarContents from "Components/SimilarContents";
import SimpleSlider from "Components/SimpleSlider";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  transition: opacity 1s linear;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: -1;
  padding: 50px;
`;

const Cover = styled.div`
  width: 30%;
  height: 90%;
  background-image: url(${(props) => props.url});
  background-position: center center;
  background-size: cover;
  border-radius: 4px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.url});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: -1;
`;

const Data = styled.div`
  width: 70%;
`;
// span은 margin을 가지지 않음
const Title = styled.h3`
  margin-left: 20px;
  font-size: 32px;
  font-style: bold;
  font-weight: 600;
  margin-bottom: 10px;
  font-family: "Glory-Bold";
`;

const ItemContainer = styled.div`
  margin-bottom: 20px;
  margin-left: 20px;
`;
const Item = styled.span`
  opacity: 0.7;
`;
const Divider = styled.span`
  opacity: 0.8;
`;
const Overview = styled.p`
  margin-left: 20px;
  margin-bottom: 25px;
  line-height: 1.5;
  opacity: 0.8;
  width: 90%;
`;

const CastContainer = styled.div`
  display: flex !important;
  width: 90%;
  flex-direction: row;
  overflow: scroll;
`;

const SubTitle = styled.h3`
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: 600;
`;

const TagLine = styled.h3`
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 22px;
  font-family: "Glory-ExtraLight";
  font-style: italic;
`;

const BASE_URL = "https://image.tmdb.org/t/p/original";

const DetailPresenter = ({ result, castingActors, similar, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | songflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | songflix
        </title>
      </Helmet>
      <Container>
        <Backdrop url={`${BASE_URL}${result?.backdrop_path}`} />
        <Content>
          <Cover
            url={
              result.poster_path
                ? `${BASE_URL}${result.poster_path}`
                : `${NoImage}`
            }
          />
          <Data>
            <Title>
              {result.original_title
                ? result.original_title
                : result.original_name}
            </Title>
            <ItemContainer>
              <Item>
                {result.release_date
                  ? result.release_date.substring(0, 4)
                  : result.first_air_date.substring(0, 4)}
              </Item>
              <Divider> ⎮ </Divider>
              <Item>
                {result.runtime ? result.runtime : result.episode_run_time} min
              </Item>
              <Divider> ⎮ </Divider>
              <Item>
                {result.genres &&
                  result.genres.map((genre, index) =>
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name} • `
                  )}
              </Item>
              <Divider> ⎮ </Divider>
              <span role="img" aria-label="Rating">
                ⭐️{" "}
              </span>
              <Item>{result.vote_average && result.vote_average}</Item>
              <Divider> ⎮ </Divider>
              <Link to={`/movie/${result.id}/reviews`}>
                <Item>more reviews..</Item>
              </Link>
            </ItemContainer>
            <TagLine>
              {result.tagline ? '"' + result.tagline + '"' : ""}
            </TagLine>
            <Overview>{result.overview}</Overview>
            <SubTitle>
              <span role="img" aria-label="Rating">
                👑{" "}
              </span>
              Casting Actors
            </SubTitle>
            <CastContainer>
              {castingActors &&
                castingActors.length > 0 &&
                castingActors.map((actor) => (
                  <ActorProfile
                    key={actor.credit_id}
                    id={actor.credit_id}
                    originalName={actor.original_name}
                    character={actor.character}
                    profilePath={actor.profile_path}
                  />
                ))}
            </CastContainer>
            {/* <SubTitle>
              <span role="img" aria-label="Rating">
                🎬{" "}
              </span>
              videos
            </SubTitle>
            {result.videos && result.videos.results.length > 0 ? (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${result.videos.results[0].key}`}
                width="30%"
                height="30%"
              />
            ) : (
              <div>Sorry, I can't find video!</div>
            )} */}
          </Data>
        </Content>
        <SubTitle style={{ marginLeft: "50px" }}>
          <span role="img" aria-label="Similar">
            🏆{" "}
          </span>
          similar contents!
        </SubTitle>
        <SimpleSlider>
          {similar &&
            similar.length > 5 &&
            similar.map((movie) => (
              <SimilarContents
                key={movie.id}
                id={movie.id}
                rating={movie.vote_average}
                originalTitle={
                  movie.original_title
                    ? movie.original_title
                    : movie.original_name
                }
                posterPath={movie.poster_path}
              />
            ))}
        </SimpleSlider>
        {error && <Message text={error} color="#e74c3c" />}
      </Container>
    </>
  );

DetailPresenter.propType = {
  result: PropTypes.object,
  castingActors: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
