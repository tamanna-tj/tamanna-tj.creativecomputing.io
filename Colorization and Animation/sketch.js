let sunX = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(135, 206, 235); 

  
  fill(255, 204, 0);
  noStroke();
  ellipse(sunX, 80, 60, 60);
  sunX += 1;
  if (sunX > width + 30) {
    sunX = -30;
  }

  
  fill(100, 200, 100);
  rect(0, 300, 400, 100);

  
  fill(255, 204, 153);
  stroke(0);
  rect(130, 200, 140, 100);

  
  fill(150, 75, 0);
  triangle(130, 200, 270, 200, 200, 140);

 
  fill(100, 50, 0);
  rect(185, 250, 30, 50);

  
  fill(173, 216, 230);
  rect(145, 215, 25, 25);
  rect(230, 215, 25, 25);

  
  drawCloud(100, 100);
  drawCloud(250, 120);
}


function drawCloud(x, y) {
  fill(255);
  noStroke();
  ellipse(x, y, 40, 40);
  ellipse(x + 20, y - 10, 40, 40);
  ellipse(x + 40, y, 40, 40);
}
