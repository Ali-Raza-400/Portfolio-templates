import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../assets/images/home-slider/slider-image-one.png";
import Img2 from "../assets/images/home-slider/slider-image-two.png";
import Img3 from "../assets/images/home-slider/slider-image-three.png";
import Img4 from "../assets/images/home-slider/slider-image-four.png";

class HeroSlider extends React.Component
{
    render ()
    {
        const settings = {
            infinite: true,
            speed: 1000,
            fade: true,
            autoplay: true,
            arrows: false,
        };

  return (
    <div className="col-12 col-md-5 col-lg-4 col-xxl-5 salva-left-fixed-image p-0">
      <h1 className="d-none">this is a image of salva fixed</h1>
      <Slider
        {...settings}
        className="salva-home-image"
      >
        <div className="item salva-slider-item">
          <img src={Img1} alt="Slide 1" />
        </div>
        <div className="item salva-slider-item">
          <img src={Img2} alt="Slide 2" />
        </div>
        <div className="item salva-slider-item">
          <img src={Img3} alt="Slide 3" />
        </div>
        <div className="item salva-slider-item">
          <img src={Img4} alt="Slide 4" />
        </div>
      </Slider>
      <div className="salva-weekend-image dark-weekend-image"></div>
    </div>
  );
}
}

export default HeroSlider;
