import React, { useEffect, useRef } from "react";
import { Circle } from "../assets/js/Circle"; // Import Circle function

const GrowBubbleAnimation = () => {
  const canvasRef = useRef(null);
  let width, height, ctx, circles, animateHeader;

  useEffect(() => {
    initHeader();
    addListeners();

    return () => {
      window.removeEventListener("scroll", scrollCheck);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const initHeader = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    animateHeader = true;

    canvasRef.current.width = width;
    canvasRef.current.height = height;
    ctx = canvasRef.current.getContext("2d");

    circles = [];
    for (let x = 0; x < width * 0.5; x++) {
      const c = Circle({}, 0, 0, 0, width, height, ctx); // Create Circle instance
      circles.push(c);
    }

    animate();
  };

  const addListeners = () => {
    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", resize);
  };

  const scrollCheck = () => {
    animateHeader = !(document.body.scrollTop > height);
  };

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvasRef.current.width = width;
    canvasRef.current.height = height;
  };

  const animate = () => {
    if (animateHeader) {
      ctx.clearRect(0, 0, width, height);
      circles.forEach((circle) => circle.draw());
    }
    requestAnimationFrame(animate);
  };

  return (
    <div className="col-12 col-md-5 col-lg-4 col-xxl-5 salva-left-fixed-image growing_bubbles p-0">
      <h1 className="d-none">this is a image of salva fixed</h1>
      <div className="salva-home-image dark-salva-home-image"></div>
      <div className="salva-weekend-image dark-weekend-image-1"></div>
      <canvas
        ref={canvasRef}
        id="bubble-canvas"
        width="800"
        height="900"
      ></canvas>
    </div>
  );
};

export default GrowBubbleAnimation;
