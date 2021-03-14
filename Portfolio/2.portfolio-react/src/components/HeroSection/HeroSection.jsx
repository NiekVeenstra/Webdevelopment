import React from "react";
import Canvas from "./Canvas";

const HeroSection = () => {
  let x = Math.random();
  let y = Math.random();
  let dx = 1 * 0.0011;
  let dy = 1 * 0.005 + 0.005;
  let radius = 40;

  const draw = (ctx, frameCount, canvas) => {
    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // ctx.fillStyle = "#000000";
    // ctx.beginPath();
    // ctx.arc(300, 100, radius * 0.55, 0, 2 * Math.PI, true);
    // ctx.fill();

        let x = Math.random() * ctx.canvas.width;
        let y = Math.random() * ctx.canvas.width * ctx.canvas.height;
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.arc(x, y, radius * 0.55, 0, 2 * Math.PI, true);
        ctx.fill();
      

  };
  return (
    <div className="HeroContainer">
      <div className="HeroContainer__background">
        <h1>hello</h1>
        <Canvas draw={draw} className="canvas" />
      </div>
    </div>
  );
};

export default HeroSection;
