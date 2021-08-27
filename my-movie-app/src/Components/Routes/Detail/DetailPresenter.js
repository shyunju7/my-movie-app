import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 1;
  padding: 50px;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${(props) => props.url});
  background-position: center center;
  background-size: cover;
  z-index: 10;
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
  z-index: 0;
`;

const BASE_URL = "https://image.tmdb.org/t/p/original";

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop url={`${BASE_URL}${result.backdrop_path}`} />

      <Content>
        <Cover url={`${BASE_URL}${result.poster_path}`} />
      </Content>
    </Container>
  );

DetailPresenter.propType = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
