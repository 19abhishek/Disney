import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="images/slider-badging.jpg" />
      </Wrap>
      <Wrap>
        <img src="images/slider-badag.jpg" />
      </Wrap>
      <Wrap>
        <img src="images/slider-scale.jpg" />
      </Wrap>
      <Wrap>
        <img src="images/slider-scales.jpg" />
      </Wrap>
    </Carousel>
  );
}

export default ImageSlider;

const Carousel = styled(Slider)`
  margin-top: 2rem;

  ul li button {
    &:before {
      font-size: 1rem;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;

  img {
    border-radius: 0.4rem;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 73%) 0px 16px 10px -10px;
    border: 0.4rem solid transparent;
  }

  &:hover {
    box-shadow: inset 0 0 0 1px #fff;
  }
`;
