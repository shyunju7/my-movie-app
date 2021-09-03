import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import NoImage from "../assets/defaultImage.png";
import { Link } from "react-router-dom";

const Rating = styled.div`
  position: absolute;
  bottom: 30px;
  opacity: 0;
  z-index: 10;
  font-size: 12px;
`;

const MovieImage = styled.div`
  position: relative;
  margin: 12px;
  width: 160px;
  height: 220px;
  border-radius: 12px;
  margin-bottom: 4px;
  background-image: url(${(props) => props.url});
  background-position: center center;
  background-size: cover;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

const Title = styled.h3`
  margin-left: 10px;
  font-size: 16px;
  z-index: 100;
  opacity: 0.6;
`;

const BASE_URL = "https://image.tmdb.org/t/p/original";
const SimilarContents = ({ id, originalTitle, posterPath, rating }) => (
  <Link to={`/movie/${id}`}>
    <MovieImage url={posterPath ? `${BASE_URL}${posterPath}` : NoImage} />
    <Title>
      {originalTitle && originalTitle.length < 18
        ? originalTitle
        : originalTitle.substring(0, 18) + "..."}
    </Title>
    <Rating>
      <span role="img" aria-label="Rating">
        ⭐️
      </span>
      {rating}
    </Rating>
  </Link>
);

SimilarContents.propTypes = {
  id: PropTypes.number,
  originalTitle: PropTypes.string,
  posterPath: PropTypes.string,
  rating: PropTypes.number,
};
export default SimilarContents;
