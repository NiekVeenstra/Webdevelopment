// menu
const nav = document.querySelector(".navigation__menu");
const mobmenu = document.querySelector(".navigation__mobmenu");
const links = nav.querySelectorAll("a");

mobmenu.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  mobmenu.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    mobmenu.classList.toggle("toggle");
  });
});

// canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

function Shroom(x, y, dx, dy, x2, y2, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.x2 = x2;
  this.y2 = y2;
  this.radius = radius;
  this.minRadius = radius;
  this.color = color;

  this.draw2 = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 1, true);
    ctx.lineTo(this.x - 0.05 * this.x2, this.y);
    ctx.lineTo(this.x - 0.05 * this.x2, this.y + this.y2 * (5 / 30));
    ctx.lineTo(this.x + 0.05 * this.x2, this.y + this.y2 * (5 / 30));
    ctx.lineTo(this.x + 0.05 * this.x2, this.y);

    ctx.strokeStyle = `#${color}`;
    ctx.closePath();
    ctx.stroke();
  };
  this.update = function () {
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
        ctx.fillStyle = `#${color}`;
        ctx.fill();
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

  for (let i = 0; i < 5; i++) {
    let radius = Math.random() * 3 + 50;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let y2 = 300;
    let x2 = 300;
    let dx = Math.random() - 0.5;
    let dy = Math.random() - 0.5;
    let color = Math.floor(Math.random() * 16777215).toString(16);

    shroomArray.push(new Shroom(x, y, dx, dy, x2, y2, radius, color));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < shroomArray.length; i++) {
    shroomArray[i].update();
  }
}

init();
animate();

// name
const logo = document.querySelectorAll("#name path");


for(let x = 0; x<logo.length; x++) {
 console.log(`letter ${x} is ${logo[x].getTotalLength()}`); 
}