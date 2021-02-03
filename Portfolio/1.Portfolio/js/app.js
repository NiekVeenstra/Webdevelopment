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

// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight + 400;
// let dx = 1 * 0.005 + 0.005;
// let dy = 1 * 0.005 + 0.005;
// let radius = 40;

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
    ctx.fillStyle = `#FFFFFF`;
    ctx.fill();
  };
  this.update = function () {
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

let starArray = [];

for (let i = 0; i < 100; i++) {
  let x = Math.random() * innerWidth;
  let y = Math.random() * innerHeight + 400;
  let dx = 1 * 0.0011;
  let dy = 1 * 0.005 + 0.005;
  let radius = 40;

  starArray.push(new Star(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < starArray.length; i++) {
    starArray[i].update();
  }
}

animate();
// =========

// const mouse = {
//   x: undefined,
//   y: undefined,
// };
// const maxRadius = 80;

// window.addEventListener("mousemove", function (event) {
//   mouse.x = event.x;
//   mouse.y = event.y;
// });
// window.addEventListener("resize", function () {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   init();
// });

// function Shroom(x, y, dx, dy, x2, y2, radius) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.x2 = x2;
//   this.y2 = y2;
//   this.radius = radius;
//   this.minRadius = radius;

//   this.draw = function () {
//     ctx.beginPath();
//     // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
//         ctx.arc(
//       Math.cos(this.x) * this.y + canvas.width / 2,
//       Math.sin(this.x) * this.y + canvas.height / 2,
//       this.radius *1,
//       0,
//       Math.PI * 2,
//       true
//     );
//     ctx.strokeStyle = `#FFFFFF`;
//     ctx.closePath();
//     ctx.stroke();
//   };
//   this.update = function () {
//     // if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//     //   this.dx = -this.dx;
//     // }
//     // if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
//     //   this.dy = -this.dy;
//     // }

//     this.x += 1;
//     this.y += 1;

//     // interacitivity
//     if (
//       mouse.x - this.x < 50 &&
//       mouse.x - this.x > -50 &&
//       mouse.y - this.y < 50 &&
//       mouse.y - this.y > -50
//     ) {
//       if (this.radius < maxRadius) {
//         this.radius += 1;
//         ctx.fillStyle = `#FFFFFF`;
//         ctx.fill();
//       }
//     } else if (this.radius > this.minRadius) {
//       this.radius -= 1;
//     }

//     this.draw();
//   };
// }

// let shroomArray = [];

// function init() {

//   shroomArray = [];

//   for (let i = 0; i < 20; i++) {
//     let radius = Math.random() * 3 + 5;
//     let x = Math.random() * (innerWidth - radius * 2) + radius;
//     let y = Math.random() * (innerHeight - radius * 2) + radius;
//     let y2 = 300;
//     let x2 = 300;
//     let dx = Math.random() - 0.5;
//     let dy = Math.random() - 0.5;

//     shroomArray.push(new Shroom(x, y, dx, dy, x2, y2, radius));

//   }
// }

// function animate() {
//   requestAnimationFrame(animate);
//   ctx.clearRect(0, 0, innerWidth, innerHeight);

//   for (let i = 0; i < shroomArray.length; i++) {
//     shroomArray[i].update();
//   }
// }

// init();
// animate();
