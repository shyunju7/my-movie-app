import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const settings = {
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 7,
  slidesToScroll: 7,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Container = styled.div`
  padding: 0 50px;
  background: linear-gradient(
    rgba(20, 20, 20, 0) 10%,
    rgba(20, 20, 20, 0.25) 25%,
    rgba(20, 20, 20, 0.5) 50%,
    rgba(20, 20, 20, 0.75) 80%,
    rgba(20, 20, 20, 1) 100%
  );
  opacity: 0.8;
  width: 100%;
  height: 40%;
`;

const SimpleSlider = ({ children }) => (
  <Container>
    <link
      rel="stylesheet"
      type="text/css"
      charset="UTF-8"
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

export default SimpleSlider;
