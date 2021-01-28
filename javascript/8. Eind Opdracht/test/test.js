const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

const mouse = {
  x: undefined,
  y: undefined,
};
const maxRadius = 80;

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});
window.addEventListener("resize", function () {
  canvas2.width = window.innerWidth;
  canvas2.height = window.innerHeight;

  init();
});

function Shroom(x, y, dx, dy, x2, y2, radius, color2) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.x2 = x2;
  this.y2 = y2;
  this.radius = radius;
  this.minRadius = radius;
  this.color2 = color2;

  this.draw2 = function () {
    ctx2.beginPath();
    ctx2.arc(this.x, this.y, this.radius, 0, Math.PI * 1, true);
    ctx2.lineTo(this.x - 0.05 * this.x2, this.y);
    ctx2.lineTo(this.x - 0.05 * this.x2, this.y + this.y2 * (5 / 30));
    ctx2.lineTo(this.x + 0.05 * this.x2, this.y + this.y2 * (5 / 30));
    ctx2.lineTo(this.x + 0.05 * this.x2, this.y);

    ctx2.strokeStyle = `#${color2}`;
    ctx2.closePath();
    ctx2.stroke();
  };
  this.update2 = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    // interacitivity
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;
        ctx2.fillStyle = `#${color2}`;
        ctx2.fill();
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw2();
  };
}

let shroomArray = [];

function init() {

  shroomArray = [];

  for (let i = 0; i < 200; i++) {
    let radius = Math.random() * 3 + 50;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let y2 = 300;
    let x2 = 300;
    let dx = Math.random() - 0.5;
    let dy = Math.random() - 0.5;
    let color2 = Math.floor(Math.random() * 16777215).toString(16);

    shroomArray.push(new Shroom(x, y, dx, dy, x2, y2, radius, color2));
    
  }
}

function animate2() {
  requestAnimationFrame(animate2);
  ctx2.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < shroomArray.length; i++) {
    shroomArray[i].update2();
  }
}

init();
animate2();