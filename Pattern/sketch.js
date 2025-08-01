let spacing = 40;
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
  stroke(255);
  noFill();
}

function draw() {
  background(10, 10, 10, 20); 

  for (let x = spacing; x < width - spacing; x += spacing) {
    for (let y = spacing; y < height - spacing; y += spacing) {
      let angle = noise(x * 0.01, y * 0.01, t) * TWO_PI * 2;
      let len = map(noise(x * 0.02, y * 0.02, t), 0, 1, 5, spacing);

      let x1 = x + cos(angle) * len;
      let y1 = y + sin(angle) * len;

      strokeWeight(1);
      stroke(
        150 + 100 * sin(t + x * 0.01),
        100 + 100 * cos(t + y * 0.01),
        255 * noise(x, y, t)
      );

      line(x, y, x1, y1);
    }
  }

  t += 0.01;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
