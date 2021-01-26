const colors = ["green", "red", "blue", "yellow"];
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];

class Particle {
  constructor(moveRadius, step, position, size, colorNr) {
    this.moveRadius = moveRadius;
    this.step = step;
    this.position = position;
    this.size = size;
    this.colorNr = colorNr;
  }
  draw() {
    // ctx.beginPath();
    // ctx.arc(
    //   Math.cos(this.position) * this.moveRadius + canvas.width / 2,
    //   Math.sin(this.position) * this.moveRadius + canvas.height / 2,
    //   this.size,
    //   0,
    //   Math.PI * 2
    // );
    // ctx.closePath();
    // ctx.strokeStyle = colors[this.colorNr];
    // ctx.stroke();

    ctx.beginPath();
    ctx.arc(
      Math.cos(this.position) * this.moveRadius + canvas.width / 2,
      Math.sin(this.position) * this.moveRadius + canvas.width / 2,
      this.size * 10,
      0,
      Math.PI * 1,
      true
    );
    ctx.lineTo(
      Math.cos(this.position) * this.moveRadius +
        canvas.width / 2 -
        0.1 * (Math.sin(this.position) * this.moveRadius + canvas.width / 2),
      Math.sin(this.position) * this.moveRadius + canvas.width / 2
    );
    ctx.lineTo(
      Math.cos(this.position) * this.moveRadius +
        canvas.width / 2 -
        0.1 * (Math.sin(this.position) * this.moveRadius + canvas.width / 2),
      Math.sin(this.position) * this.moveRadius +
        canvas.width / 2 +
        0.6 * (Math.cos(this.position) * this.moveRadius + canvas.width / 2)
    );
    ctx.lineTo(
      Math.cos(this.position) * this.moveRadius +
        canvas.width / 2 +
        0.1 * (Math.sin(this.position) * this.moveRadius + canvas.width / 2),
      Math.sin(this.position) * this.moveRadius +
        canvas.width / 2 +
        0.6 * (Math.cos(this.position) * this.moveRadius + canvas.width / 2)
    );
    ctx.lineTo(
      Math.cos(this.position) * this.moveRadius +
        canvas.width / 2 +
        0.1 * (Math.sin(this.position) * this.moveRadius + canvas.width / 2),
      Math.sin(this.position) * this.moveRadius + canvas.width / 2
    );
    ctx.lineTo(
      Math.cos(this.position) * this.moveRadius +
        canvas.width / 2 +
        0.1 * (Math.sin(this.position) * this.moveRadius + canvas.width / 2),
      Math.sin(this.position) * this.moveRadius + canvas.width / 2
    );
    ctx.closePath();
    ctx.strokeStyle = colors[this.colorNr];
    ctx.stroke();
  }
  update() {
    this.position += this.step;
    this.draw();
  }
}

function init() {
  particleArray = [];
  for (let i = 0; i < 100; i++) {
    let moveRadius = Math.random() * canvas.width;
    let step = Math.random() * 0.005 + 0.005;
    let position = Math.random() * (Math.PI * 2);
    let size = Math.random() * 28 + 0.1;
    let colorNr = Math.floor(Math.random() * colors.length);

    particleArray.push(new Particle(moveRadius, step, position, size, colorNr));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = "rgba(0,0,0,0.06)";
  ctx.fillRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
  }
}
init();
animate();

window.addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});
