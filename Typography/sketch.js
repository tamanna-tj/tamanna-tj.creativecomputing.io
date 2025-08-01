let angle = 0;
let bounceY;
let speed = 2;
let clicked = false;
let quote = "Creativity is intelligence having fun.";
let author = "- Albert Einstein";
let hover = false;

function setup() {
  createCanvas(1000, 1000);
  textAlign(CENTER, CENTER);
  textSize(36);
  bounceY = height / 2;
}

function draw() {
  background(20, 20, 40);
  
 
  for (let i = 0; i < width; i += 50) {
    for (let j = 0; j < height; j += 50) {
      fill(255, 255, 255, 15);
      ellipse(i + sin(radians(frameCount + i + j)) * 10, j, 10, 10);
    }
  }

 
  bounceY += speed;
  if (bounceY > height - 100 || bounceY < 100) {
    speed *= -1;
  }


  let d = dist(mouseX, mouseY, width / 2, bounceY);
  hover = d < 300;

  
  if (hover) {
    fill(255, 204, 0);
    cursor(HAND);
  } else {
    fill(255);
    cursor(ARROW);
  }

  
  push();
  translate(width / 2, bounceY);
  if (clicked) {
    rotate(angle);
    angle += 0.01;
  }

  text(quote, 0, 0);
  textSize(24);
  text(author, 0, 50);
  pop();
}

function mousePressed() {
  if (hover) {
    clicked = !clicked;
  }
}
