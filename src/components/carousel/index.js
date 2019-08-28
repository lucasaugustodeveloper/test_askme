import "react-responsive-carousel/lib/styles/carousel.min.css";

import React from "react";
import { Carousel } from "react-responsive-carousel";

const Slider = props => (
  <Carousel
    autoPlay
    showArrows={false}
    showIndicators={false}
    showStatus={false}
    showThumbs={false}
    infiniteLoop
    width="100%"
  >
    {props.children}
  </Carousel>
);

export default Slider;
