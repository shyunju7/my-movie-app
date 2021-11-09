import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const Container = styled.div``;
const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  arrows: false,
  autoplay: true,
  fade: true,
  lazyLoad: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: (dots) => (
    <div style={{ padding: "50px" }}>
      <ul style={{ margin: "0px", fontSize: "24px" }}>{dots}</ul>
    </div>
  ),
};
const BASE_URL = "https://image.tmdb.org/t/p/original";
const HomeSlider = ({ children }) => (
  <Container>
    <link
      rel="stylesheet"
      type="text/css"
      charSet="UTF-8"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
    <Slider {...settings}>{children}</Slider>
  </Container>
);

export default HomeSlider;
