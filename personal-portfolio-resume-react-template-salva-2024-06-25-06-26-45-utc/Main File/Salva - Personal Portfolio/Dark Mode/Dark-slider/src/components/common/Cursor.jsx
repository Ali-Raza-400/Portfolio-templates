import React, { useState } from "react";
import { useEffect } from "react";
import { TweenMax } from "gsap";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const bigBall = document.querySelector(".cursor__ball--big");
    const smallBall = document.querySelector(".cursor__ball--small");
    const hoverables = document.querySelectorAll(".hoverable");

    const onMouseMove = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    const onMouseHover = () => {
      setIsHovered(true);
    };

    const onMouseHoverOut = () => {
      setIsHovered(false);
    };

    document.body.addEventListener("mousemove", onMouseMove);
    hoverables.forEach((item) => {
      item.addEventListener("mouseenter", onMouseHover);
      item.addEventListener("mouseleave", onMouseHoverOut);
    });

    return () => {
      document.body.removeEventListener("mousemove", onMouseMove);
      hoverables.forEach((item) => {
        item.removeEventListener("mouseenter", onMouseHover);
        item.removeEventListener("mouseleave", onMouseHoverOut);
      });
    };
  }, []);

  useEffect(() => {
    const bigBall = document.querySelector(".cursor__ball--big");
    const smallBall = document.querySelector(".cursor__ball--small");

    TweenMax.to(bigBall, 0.4, { x: position.x - 15, y: position.y - 15 });
    TweenMax.to(smallBall, 0.1, { x: position.x - 5, y: position.y - 7 });

    if (isHovered) {
      TweenMax.to(bigBall, 0.3, { scale: 4 });
    } else {
      TweenMax.to(bigBall, 0.3, { scale: 1 });
    }
  }, [position, isHovered]);

  return (
    <div className="cursor">
      <div className="cursor__ball cursor__ball--big">
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
        </svg>
      </div>

      <div className="cursor__ball cursor__ball--small">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  );
};

export default Cursor;
