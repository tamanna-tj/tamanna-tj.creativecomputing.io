let trail = [];

function setup() {
  createCanvas(1000, 1000);
  background(10);
}

function draw() {
  
  background(10, 10, 10, 25);

  
  trail.push({ x: mouseX, y: mouseY, t: frameCount });

  
  if (trail.length > 100) {
    trail.shift();
  }

  noFill();
  for (let i = 0; i < trail.length; i++) {
    let pos = trail[i];
    let alpha = map(i, 0, trail.length, 0, 255);
    let size = map(i, 0, trail.length, 30, 2);
    let hue = (pos.t * 2) % 360;

    strokeWeight(2);
    stroke(color(`hsla(${hue}, 100%, 70%, ${alpha / 255})`));
    ellipse(pos.x, pos.y, size);
  }

 
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 8);
}
