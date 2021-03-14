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
// canvas.style.width ='100%';
// canvas.style.height='100%';

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

function Star(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;


  this.draw = function () {
    ctx.beginPath();
    ctx.arc(
      Math.cos(this.x) * this.y + canvas.width / 2,
      Math.sin(this.x) * this.y + canvas.height / 1.1,
      radius * 0.05,
      0,
      Math.PI * 2,
      true
    );
    ctx.fillStyle = `#75b5ff`;
    ctx.fill();
  };
  this.update = function () {
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

let starArray = [];

function init() {
  starArray = [];

  for (let i = 0; i < 200; i++) {
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight + innerWidth / 3;
    let dx = 1 * 0.0011;
    let dy = 1 * 0.005 + 0.005;
    let radius = 40;

    starArray.push(new Star(x, y, dx, dy, radius));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < starArray.length; i++) {
    starArray[i].update();
  }
}

init();
animate();
