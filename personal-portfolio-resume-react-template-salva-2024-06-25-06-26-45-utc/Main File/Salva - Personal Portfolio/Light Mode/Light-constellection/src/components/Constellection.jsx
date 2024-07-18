import React, { useEffect, useRef } from "react";

const ConstellationAnimation = ({ options }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const N_SQUARES = 164;
    const OPTS = ["fill", "stroke"];
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let stars = [];

    const config = {
      star: {
        color: "rgba(255, 255, 255, .9)",
        width: 2,
      },
      line: {
        color: "rgba(255, 255, 255, .7)",
        width: 0.2,
      },
      position: {
        x: 0, // This value will be overwritten at startup
        y: 0, // This value will be overwritten at startup
      },
      velocity: 0.1,
      length: 220,
      distance: 120,
      radius: 250,
      stars: [],
    };

    function Star() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;

      this.vx = config.velocity - Math.random() * 0.5;
      this.vy = config.velocity - Math.random() * 0.5;

      this.radius = Math.random() * config.star.width;
    }

    Star.prototype.create = function () {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      context.fill();
    };

    Star.prototype.animate = function () {
      let i;
      for (i = 0; i < config.length; i++) {
        let star = stars[i];

        if (star.y < 0 || star.y > canvas.height) {
          star.vx = star.vx;
          star.vy = -star.vy;
        } else if (star.x < 0 || star.x > canvas.width) {
          star.vx = -star.vx;
          star.vy = star.vy;
        }

        star.x += star.vx;
        star.y += star.vy;
      }
    };

    Star.prototype.line = function () {
      let length = config.length,
        iStar,
        jStar,
        i,
        j;

      for (i = 0; i < length; i++) {
        for (j = 0; j < length; j++) {
          iStar = stars[i];
          jStar = stars[j];

          if (
            iStar &&
            jStar &&
            iStar !== jStar &&
            iStar.x - jStar.x < config.distance &&
            iStar.y - jStar.y < config.distance &&
            iStar.x - jStar.x > -config.distance &&
            iStar.y - jStar.y > -config.distance
          ) {
            if (
              iStar.x - config.position.x < config.radius &&
              iStar.y - config.position.y < config.radius &&
              iStar.x - config.position.x > -config.radius &&
              iStar.y - config.position.y > -config.radius
            ) {
              context.beginPath();
              context.moveTo(iStar.x, iStar.y);
              context.lineTo(jStar.x, jStar.y);
              context.stroke();
              context.closePath();
            }
          }
        }
      }
    };

    const createStars = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < config.length; i++) {
        stars.push(new Star());
        let star = stars[i];

        star.create();
      }

      Star.prototype.line();
      Star.prototype.animate();
    };

    const setCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const setContext = () => {
      context.fillStyle = config.star.color;
      context.strokeStyle = config.line.color;
      context.lineWidth = config.line.width;
    };

    const setInitialPosition = () => {
      if (!options || !options.hasOwnProperty("position")) {
        config.position = {
          x: canvas.width * 0.5,
          y: canvas.height * 0.5,
        };
      }
    };

    const loop = (callback) => {
      callback();

      window.requestAnimationFrame(function () {
        loop(callback);
      });
    };

    const bind = () => {
      window.addEventListener("mousemove", function (e) {
        config.position.x = e.pageX - canvas.offsetLeft;
        config.position.y = e.pageY - canvas.offsetTop;
      });
    };

    const init = () => {
      setCanvas();
      setContext();
      setInitialPosition();
      loop(createStars);
      bind();
    };

    init();

    return () => {
      // Clean up animation when component unmounts
      stars = [];
    };
  }, [options]);

  return (
    <div className="col-12 col-md-5 col-lg-4 col-xxl-5 salva-left-fixed-image constellation p-0">
      <h1 className="d-none">this is a image of salva fixed</h1>
      <div className="salva-home-image"></div>
      <div className="salva-weekend-image"></div>
      <canvas
        id="constellationel"
        ref={canvasRef}
        width="800"
        height="900"
      ></canvas>
    </div>
  );
};

export default ConstellationAnimation;
