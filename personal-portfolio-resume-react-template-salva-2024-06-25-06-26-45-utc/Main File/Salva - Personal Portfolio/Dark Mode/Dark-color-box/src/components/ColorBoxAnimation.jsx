import React, { useEffect, useRef } from "react";

const ColorBoxAnimation = () => {
  const canvasRef = useRef(null);
  const squares = useRef([]);

  useEffect(() => {
    const N_SQUARES = 164;
    const OPTS = ["fill", "stroke"];
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    const co = 0.5 * h;

    const rand = (max, min, is_int) => {
      const maxVal = (max - 1 || 0) + 1;
      const minVal = min || 0;
      const gen = minVal + (maxVal - minVal) * Math.random();
      return is_int ? Math.floor(gen) : gen;
    };

    const Square = function () {
      let x, y, e, o, θ, v, ω, α, φ, a, f;

      this.init = function () {
        e = rand(16, 8, true); // square edge length
        o = -0.5 * e;
        x = rand(w - o, o, true);
        y = rand(-co, -e, true);
        θ = rand(0.5 * Math.PI);
        v = rand(1, 0.25); // speed going down
        ω = rand(0.02, 0.005) * Math.PI; // angular velocity
        α = [0.5, 0.5];
        φ = [];
        a = [];
        f = [];

        for (let i = 0; i < 2; i++) {
          φ.push(rand(2 * Math.PI));
          a.push(rand(0.4, 0.1));
          f.push(rand(0.001, 0.0001) * Math.PI);
        }
      };

      this.update = function (t) {
        let k, d;

        y += v;
        θ += ω;

        k = Math.max(0, Math.floor(y / co));
        d = y - co;

        for (let i = 0; i < 2; i++)
          α[i] = Math.max(
            0,
            0.4 + 0.1 * i + a[i] * Math.sin(f[i] * t + φ[i]) - k * d * 0.01
          );

        if (y > h + e || !(α[0] + α[1])) this.init();

        context.fillStyle = context.strokeStyle =
          "hsl(" + ~~(t + 0.2 * y) + ",100%,65%)";

        this.draw();
      };

      this.draw = function () {
        context.save();
        context.translate(x, y);
        context.rotate(θ);

        for (let i = 0; i < 2; i++) {
          context.beginPath();
          context.globalAlpha = α[i];
          context[OPTS[i] + "Rect"](o, o, e, e);
        }

        context.restore();
      };

      this.init();
    };

    const animate = (t) => {
      context.clearRect(0, 0, w, h);

      squares.current.forEach((square) => square.update(t));

      requestAnimationFrame(animate.bind(this, ++t));
    };

    const init = () => {
      for (let i = 0; i < N_SQUARES; i++) squares.current.push(new Square());

      animate(0);
    };

    init();

    return () => {
      // Clean up animation when component unmounts
      squares.current = [];
    };
  }, []);

  return (
    <div className="col-12 col-md-5 col-lg-4 col-xxl-5 salva-left-fixed-image p-0 week-mode-effect">
      <h1 className="d-none">this is a image of salva fixed</h1>
      <div className="salva-home-image dark-salva-home-image rainbow-box"></div>
      <div className="salva-weekend-image dark-weekend-image"></div>
      <canvas
        ref={canvasRef}
        id="rainbow-box"
        width="1920"
        height="937"
      ></canvas>
    </div>
  );
};

export default ColorBoxAnimation;
