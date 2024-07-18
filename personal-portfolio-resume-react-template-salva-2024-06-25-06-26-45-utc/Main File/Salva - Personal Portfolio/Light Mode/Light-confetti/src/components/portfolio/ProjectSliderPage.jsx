import React, { useState, useEffect } from "react";

const ProjectSliderPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevActive, setPrevActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(changeSlides, 4000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  const changeSlides = () => {
    const slides = document.querySelectorAll(".slide");
    const controls = document.querySelectorAll(".control");
    slides[prevActive].classList.remove("active");
    controls[prevActive].classList.remove("active");

    slides[activeSlide].classList.add("active");
    controls[activeSlide].classList.add("active");

    setPrevActive(activeSlide);

    setActiveSlide((prev) => (prev + 1 >= slides.length ? 0 : prev + 1));
  };

  const handleControlClick = (idx) => {
    setActiveSlide(idx);
    clearInterval(interval);
    const interval = setInterval(changeSlides, 4000);
  };

  return (
    <div className="slider-container">
      <div className="slide slide-one"></div>
      <div className="slide slide-two"></div>
      <div className="controls-container">
        <div
          className={`control ${activeSlide === 0 ? "active" : ""}`}
          onClick={() => handleControlClick(0)}
        ></div>
        <div
          className={`control ${activeSlide === 1 ? "active" : ""}`}
          onClick={() => handleControlClick(1)}
        ></div>
        <div
          className={`control ${activeSlide === 2 ? "active" : ""}`}
          onClick={() => handleControlClick(2)}
        ></div>
      </div>
    </div>
  );
};

export default ProjectSliderPage;
