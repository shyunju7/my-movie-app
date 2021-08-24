import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NoImage from "assets/defaultImage.png";

const Container = styled.div``;
const Image = styled.div`
  background-size: cover;
  height: 180px;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.2s linear;
  background-image: url(${(props) => props.url});
`;
const Rating = styled.span`
  position: absolute;
  bottom: 5px;
  right: 0rem;
  opacity: 0;
  font-size: 12px;
`;
const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  font-size: 12px;
  margin-bottom: 3px;
`;
const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;
const Poster = ({ id, imageURl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          url={
            imageURl ? `https://image.tmdb.org/t/p/w300/${imageURl}` : NoImage
          }
        />
        <Rating>
          <span role="img" aria-label="Rating">
            ⭐️
          </span>{" "}
          {rating} / 10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 15 ? `${title.substring(0, 15)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

export default Poster;

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageURl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};
