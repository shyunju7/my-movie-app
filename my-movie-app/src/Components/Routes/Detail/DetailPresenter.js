import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import NoImage from "assets/defaultImage.png";
import { Helmet } from "react-helmet";
import ReactPlayer from "react-player";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: -1;
  padding: 50px;
`;

const Cover = styled.div`
  width: 15%;
  height: 50%;
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
  margin-left: 10px;
`;
// span은 margin을 가지지 않음
const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  margin-bottom: 10px;
`;
const Item = styled.span``;
const Divider = styled.span``;
const Overview = styled.p`
  line-height: 1.5;
  width: 90%;
`;

const BASE_URL = "https://image.tmdb.org/t/p/original";

const DetailPresenter = ({ result, loading, error }) =>
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
              {result.vote_average && result.vote_average}
            </ItemContainer>
            <Overview>{result.overview}</Overview>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${result.videos.results[0].key}`}
              width="50%"
              height="50%"
            />
          </Data>
        </Content>
        {error && <Message text={error} color="#e74c3c" />}
      </Container>
    </>
  );

DetailPresenter.propType = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
