const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;
// let y2 = 300;
// let x2 = 300;
// let dx = (Math.random() - 0.5) * 10;
// let dy = (Math.random() - 0.5) * 10;
// let radius = 50;

function Shroom(x, y, dx, dy, x2, y2, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.x2 = x2;
  this.y2 = y2;
  this.radius = radius;
  this.color = color;

  this.draw = function () {
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

    this.draw();
  };
}

let shroomArray = [];

for (let i = 0; i < 100; i++) {
  let radius = 50;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let y2 = 300;
  let x2 = 300;
  let dx = (Math.random() - 0.5);
  let dy = (Math.random() - 0.5);
  let color = Math.floor(Math.random()*16777215).toString(16);
  
  shroomArray.push(new Shroom(x, y, dx, dy, x2, y2, radius, color));
}

// ctx.arc(300, 300, 50, 0, Math.PI * 1, true);
// ctx.lineTo(285, 300);
// ctx.lineTo(285, 350);
// ctx.lineTo(315, 350);
// ctx.lineTo(315, 300);

// ctx.strokeStyle = "yellow";
// ctx.closePath();
// ctx.stroke();

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < shroomArray.length; i++) {
    shroomArray[i].update();
  }
}

animate();

// ctx.beginPath();
// ctx.arc(
//   Math.cos(this.position) * this.moveRadius + canvas.width / 2,
//   Math.cos(this.position) * this.moveRadius + canvas.width / 2,
//   this.size,
//   0,
//   Math.PI * 1,
//   true
// );
// ctx.lineTo(
//   Math.cos(this.position) * this.moveRadius +
//     canvas.width / 2 -
//     0.1 * (Math.cos(this.position) * this.moveRadius + canvas.width / 2),
//   Math.cos(this.position) * this.moveRadius + canvas.width / 2
// );
// ctx.lineTo(
//   Math.cos(this.position) * this.moveRadius +
//     canvas.width / 2 -
//     0.1 * (Math.cos(this.position) * this.moveRadius + canvas.width / 2),
//   Math.cos(this.position) * this.moveRadius +
//     canvas.width / 2 +
//     0.6 * (Math.cos(this.position) * this.moveRadius + canvas.width / 2)
// );
// ctx.lineTo(
//   Math.cos(this.position) * this.moveRadius +
//     canvas.width / 2 +
//     0.1 * (Math.cos(this.position) * this.moveRadius + canvas.width / 2),
//   Math.cos(this.position) * this.moveRadius +
//     canvas.width / 2 +
//     0.6 * (Math.cos(this.position) * this.moveRadius + canvas.width / 2)
// );
// ctx.lineTo(
//   Math.cos(this.position) * this.moveRadius +
//     canvas.width / 2 +
//     0.1 * (Math.cos(this.position) * this.moveRadius + canvas.width / 2),
//   Math.cos(this.position) * this.moveRadius + canvas.width / 2
// );
// ctx.lineTo(
//   Math.cos(this.position) * this.moveRadius +
//     canvas.width / 2 +
//     0.6 * (Math.cos(this.position) * this.moveRadius + canvas.width / 2),
//   Math.cos(this.position) * this.moveRadius + canvas.width / 2
// );
// ctx.closePath();
// ctx.strokeStyle = colors[this.colorNr];
// ctx.stroke();
