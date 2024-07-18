import React, { useEffect, useRef } from "react";
import $ from "jquery"; // Import jQuery

const GlitchAnimation = ({
  destroy = false,
  glitch = true,
  scale = true,
  blend = true,
  blendModeType = "hue",
  glitch1TimeMin = 600,
  glitch1TimeMax = 900,
  glitch2TimeMin = 10,
  glitch2TimeMax = 115,
  zIndexStart = 5,
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = $(elementRef.current);

    if (destroy) {
      if (
        element.hasClass("el-front-1") ||
        element.hasClass("front-3") ||
        element.hasClass("front-2")
      ) {
        $(".front-1, .front-2, .front-3").remove();
        $(".back").removeClass("back");
      }
    } else {
      const glitchSettings = {
        destroy,
        glitch,
        scale,
        blend,
        blendModeType,
        glitch1TimeMin,
        glitch1TimeMax,
        glitch2TimeMin,
        glitch2TimeMax,
        zIndexStart,
      };

      const clone = element
        .clone()
        .addClass("back")
        .css({ zIndex: zIndexStart });
      clone.insertBefore(element);

      if (blend) {
        const blendClone = element
          .clone()
          .addClass("front-3")
          .css({ zIndex: zIndexStart + 3, mixBlendMode: blendModeType });
        blendClone.insertAfter(element);
        glitchEffect(".back", 2, glitchSettings);
      }

      if (glitch) {
        const glitchClone = element
          .clone()
          .addClass("front-2")
          .css({ zIndex: zIndexStart + 2 });
        glitchClone.insertAfter(element);
        $(".back")
          .next()
          .addClass("front-1")
          .css({ zIndex: zIndexStart + 1 });
        glitchEffect(".back", 1, glitchSettings);
      }
    }

    return () => {
      if (destroy) {
        $(".front-1, .front-2, .front-3").remove();
        $(".back").removeClass("back");
      }
    };
  }, [
    destroy,
    glitch,
    scale,
    blend,
    blendModeType,
    glitch1TimeMin,
    glitch1TimeMax,
    glitch2TimeMin,
    glitch2TimeMax,
    zIndexStart,
  ]);

  const glitchEffect = (selector, type, settings) => {
    function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function glitch1() {
      const i = random(10, 1900);
      const n = 9999;
      const a = random(10, 1300);
      const o = 0;
      const h = random(0, 16);
      const f = random(0, 16);
      const d = random(settings.glitch1TimeMin, settings.glitch1TimeMax);
      $(selector).css({
        clip: `rect(${i}px, ${n}px, ${a}px, ${o}px)`,
        right: f,
        left: h,
      });
      setTimeout(glitch1, d);
    }

    function glitch2() {
      const s = random(10, 1900);
      const n = 9999;
      const c = random(10, 1300);
      const l = 0;
      const f = random(0, 40);
      const d = random(0, 40);
      const m = random(settings.glitch2TimeMin, settings.glitch2TimeMax);
      let x = 1;
      if (settings.scale === true) {
        x = (Math.random() * (1.1 - 0.9) + 0.9).toFixed(2);
      }
      $(selector)
        .next()
        .css({
          clip: `rect(${s}px, ${n}px, ${c}px, ${l}px)`,
          left: f,
          right: d,
          WebkitTransform: `scale(${x})`,
          MsTransform: `scale(${x})`,
          transform: `scale(${x})`,
        });
      setTimeout(glitch2, m);
    }

    if (type === 1) {
      glitch1();
    } else if (type === 2) {
      glitch2();
    }
  };

  return (
    <div className="col-12 col-md-5 col-lg-4 col-xxl-5 salva-left-fixed-image p-0">
      <h1 className="d-none">this is a image of salva fixed</h1>
      <div className="glitch salva-home-image dark-glitch dark-salva-home-image"></div>
      <div className="glitch-two salva-weekend-image dark-weekend-image"></div>
      <div ref={elementRef}></div>
    </div>
  );
};

export default GlitchAnimation;
