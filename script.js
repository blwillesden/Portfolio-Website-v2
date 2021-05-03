let lineArray = [];
let lineColor = 0;
let lineWidth = 3;
function windowResized() {
  resizeCanvas (windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1')
  for (let i = 0; i < 200; i++) {
    lineArray.push(new lines(0, (windowHeight - i)));
    if (i <= 90) {
      lineColor = 0 + (i * lineWidth);
    }
    if (i >= 91) {
      lineColor = 255 - ((i - 91) * lineWidth);
    }

  }
}

function draw() {
  background("#111C31");
  lineColor = 255;
  for (let i = 0; i < lineArray.length; i++) {
    lineArray[i].move();
    lineArray[i].display();
  }
}
// Lines class
class lines {
  constructor(x,y,) {
    this.x = x;
    this.y = y;
    this.speed = 1;
    this.color = lineColor;
  }

  move() {
    this.y += this.speed;
    if (this.y >= height) {
      this.y = 0;
    }
  }

  display() {
    push();
    stroke(255, this.color);
    line(0, this.y, width, this.y )
    pop();
  }
}