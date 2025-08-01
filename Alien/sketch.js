function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(20, 30, 50); 
  
  
  for (let i = 0; i < 50; i++) {
    stroke(255);
    point(random(width), random(height));
  }

  translate(width / 2, height / 2);

  drawAlien();
}

function drawAlien() {
  noStroke();

  
  fill(100, 255, 200);
  beginShape();
  vertex(-30, 0);
  bezierVertex(-60, 40, -60, 100, 0, 120);
  bezierVertex(60, 100, 60, 40, 30, 0);
  endShape(CLOSE);

  
  fill(255);
  ellipse(-15, 20, 20, 30);
  ellipse(15, 20, 20, 30);

  fill(0);
  ellipse(-15, 25, 10, 10);
  ellipse(15, 25, 10, 10);

 
  stroke(0, 255, 100);
  strokeWeight(3);
  line(-20, -30, -15, 0);
  line(20, -30, 15, 0);

  fill(255, 0, 200);
  ellipse(-20, -30, 10, 10);
  ellipse(20, -30, 10, 10);

  noStroke();

  
  push();
  rotate(sin(frameCount * 2) * 10);
  drawArm(-50, 40, true); 
  pop();

  push();
  rotate(-sin(frameCount * 2) * 10);
  drawArm(50, 40, false); 
  pop();

  
  fill(80, 200, 160);
  rect(-20, 120, 10, 30, 5);
  rect(10, 120, 10, 30, 5);
}

function drawArm(x, y, flip) {
  push();
  translate(x, y);
  if (flip) scale(-1, 1);
  fill(80, 200, 160);
  ellipse(0, 0, 15, 30); 
  ellipse(15, 10, 10, 30); 
  ellipse(25, 25, 10, 10); 
  pop();
}
