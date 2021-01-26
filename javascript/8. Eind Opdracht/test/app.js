const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.arc(500, 500, 300, 0, Math.PI * 1, true);
ctx.lineTo(450, 500);
ctx.lineTo(450, 800);
ctx.lineTo(550, 800);
ctx.lineTo(550, 500);
ctx.lineTo(800, 500);
ctx.strokeStyle = "yellow";
ctx.stroke();

ctx.beginPath();
ctx.arc(
  Math.cos(this.position) * this.moveRadius + canvas.width / 2,
  Math.cos(this.position) * this.moveRadius + canvas.width / 2,
  this.size,
  0,
  Math.PI * 1,
  true
);
ctx.lineTo(
  Math.cos(this.position) * this.moveRadius +
    canvas.width / 2 -
    0.1 * (Math.cos(this.position) * this.moveRadius + canvas.width / 2),
  Math.cos(this.position) * this.moveRadius + canvas.width / 2
);
ctx.lineTo(
  Math.cos(this.position) * this.moveRadius +
    canvas.width / 2 -
    0.1 * (Math.cos(this.position) * this.moveRadius + canvas.width / 2),
  Math.cos(this.position) * this.moveRadius +
    canvas.width / 2 +
    0.6 * (Math.cos(this.position) * this.moveRadius + canvas.width / 2)
);
ctx.lineTo(
  Math.cos(this.position) * this.moveRadius +
    canvas.width / 2 +
    0.1 * (Math.cos(this.position) * this.moveRadius + canvas.width / 2),
  Math.cos(this.position) * this.moveRadius +
    canvas.width / 2 +
    0.6 * (Math.cos(this.position) * this.moveRadius + canvas.width / 2)
);
ctx.lineTo(
  Math.cos(this.position) * this.moveRadius +
    canvas.width / 2 +
    0.1 * (Math.cos(this.position) * this.moveRadius + canvas.width / 2),
  Math.cos(this.position) * this.moveRadius + canvas.width / 2
);
ctx.lineTo(
  Math.cos(this.position) * this.moveRadius +
    canvas.width / 2 +
    0.6 * (Math.cos(this.position) * this.moveRadius + canvas.width / 2),
  Math.cos(this.position) * this.moveRadius + canvas.width / 2
);
ctx.closePath();
ctx.strokeStyle = colors[this.colorNr];
ctx.stroke();
