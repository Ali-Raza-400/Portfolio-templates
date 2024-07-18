export const Circle = (pos, alpha, scale, velocity, width, height, ctx) => {
  const draw = () => {
    if (alpha <= 0) {
      init();
    }
    pos.y -= velocity;
    alpha -= 0.0005;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, scale * 50, 0, 5 * Math.PI, false);
    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    ctx.fill();
  };

  const init = () => {
    pos.x = Math.random() * width;
    pos.y = height + Math.random() * 100;
    alpha = 0.1 + Math.random() * 0.3;
    scale = 0.1 + Math.random() * 0.3;
    velocity = Math.random();
  };

  init();

  return { draw };
};
