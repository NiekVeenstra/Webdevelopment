const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d");
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;
let particleArray = [];

class Particle {
  constructor(moveRadius, step, position, size, color) {
    this.moveRadius = moveRadius;
    this.step = step;
    this.position = position;
    this.size = size;
    this.color = color;
  }
  draw() {
    // ctx.beginPath();
    // ctx.arc(
    //   Math.cos(this.position) * this.moveRadius + canvas.width / 2,
    //   Math.sin(this.position) * this.moveRadius + canvas.height / 2,
    //   this.size *5,
    //   0,
    //   Math.PI * 2,
    //   true
    // );
    // ctx.closePath();
    // ctx.strokeStyle = colors[this.colorNr];
    // ctx.stroke();

    ctx1.beginPath();
    ctx1.arc(
      Math.cos(this.position) * this.moveRadius + canvas1.width / 2,
      Math.sin(this.position) * this.moveRadius + canvas1.height / 2,
      this.size * 6,
      0,
      Math.PI * 1,
      true
    );

    ctx1.lineTo(
      Math.cos(this.position) * this.moveRadius + canvas1.width / 2.09,
      Math.sin(this.position) * this.moveRadius + canvas1.height / 2
    );
    ctx1.lineTo(
      Math.cos(this.position) * this.moveRadius + canvas1.width / 2.09,
      Math.sin(this.position) * this.moveRadius + canvas1.height / 1.7
    );
    ctx1.lineTo(
      Math.cos(this.position) * this.moveRadius + canvas1.width / 1.9,
      Math.sin(this.position) * this.moveRadius + canvas1.height / 1.7
    );
    ctx1.lineTo(
      Math.cos(this.position) * this.moveRadius + canvas1.width / 1.9,
      Math.sin(this.position) * this.moveRadius + canvas1.height / 2
    );

    ctx1.strokeStyle = `#${this.color}`;
    ctx1.closePath();
    ctx1.stroke();
  }
  update() {
    this.position += this.step;
    this.draw();
  }
}

function init() {
  particleArray = [];
  for (let i = 0; i < 300; i++) {
    let moveRadius = Math.random() * canvas1.width + 60;
    let step = Math.random() * 0.005 + 0.005;
    let position = Math.random() * (Math.PI * 2);
    let size = Math.random() * 28 + 2;
    let color = Math.floor(Math.random() * 16777215).toString(16);

    particleArray.push(new Particle(moveRadius, step, position, size, color));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx1.fillStyle = "rgba(0,0,0,0.06)";
  ctx1.fillRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
  }
}
init();
animate();

window.addEventListener("resize", function () {
  canvas1.width = innerWidth;
  canvas1.height = innerHeight;
  init();
});
