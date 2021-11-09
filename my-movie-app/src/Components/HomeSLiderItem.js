import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NoImage from "assets/defaultImage.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Image = styled.div`
  background-size: cover;
  width: 90vw;
  height: 100vh;
  border-radius: 4px;
  align-self: center;
  background-position: center center;
  transition: opacity 0.2s linear;
  background-image: url(${(props) => props.url});
`;

const MovieInfoWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 25%;
  padding: 10px;
  background-color: black;
  opacity: 0.6;
`;

const Rating = styled.span`
  right: 0rem;
  opacity: 0;
  font-size: 12px;
`;

const OverView = styled.div`
  opacity: 0.8;
  font-size: 16px;
  margin-top: 12px;
`;
const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
  ${Image} {
    opacity: 0.3;
  }
`;

const Title = styled.span`
  display: block;
  font-size: 40px;
  margin-bottom: 3px;
`;
const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;
const HomeSliderItem = ({ id, imageURl, title, rating, year, overview }) => (
  <Link to={`/movie/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          url={
            imageURl
              ? `https://image.tmdb.org/t/p/original/${imageURl}`
              : NoImage
          }
        />
        <MovieInfoWrapper>
          <Title>{title}</Title>
          <OverView>
            {overview.length > 200 ? overview.substring(200) + "..." : overview}
          </OverView>
          <Year>{year}</Year>
          <Rating>
            <span role="img" aria-label="Rating">
              ⭐️
            </span>{" "}
            {rating} / 10
          </Rating>
        </MovieInfoWrapper>
      </ImageContainer>
    </Container>
  </Link>
);

export default HomeSliderItem;

HomeSliderItem.propTypes = {
  id: PropTypes.number.isRequired,
  imageURl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};
