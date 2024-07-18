import React, { useEffect, useRef } from "react";
import ParticlesJS from "particles.js";

const ParticleAnimation = () => {
  const bubbleRef = useRef(null);

  useEffect(() => {
    const initParticles = () => {
      if (window.particlesJS) {
        window.particlesJS("bubble-js", {
          particles: {
            number: { value: 64, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 5 },
              image: { src: "img/github.svg", width: 100, height: 100 },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 2.5,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: true,
              distance: 25,
              color: "#ffffff",
              opacity: 0.42,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2.5,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "bounce",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "bubble" },
              onclick: { enable: false, mode: "push" },
              resize: true,
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: {
                distance: 100,
                size: 5,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        });
      }
    };

    initParticles();

    return () => {
      // Clean up particles when the component unmounts
      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
      }
    };
  }, []);

  return (
    <div className="col-12 col-md-5 col-lg-4 col-xxl-5 salva-left-fixed-image p-0">
      <h1 className="d-none">this is a image of salva fixed</h1>
      <div className="salva-home-image dark-salva-home-image slava-bubb-parti-image"></div>
      <div className="salva-weekend-image salva-weekend-image"></div>
      <div id="bubble-js" ref={bubbleRef}></div>
    </div>
  );
};

export default ParticleAnimation;
