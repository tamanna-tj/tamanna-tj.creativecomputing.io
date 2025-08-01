let particles = [];
let mic;
let waveSize = 0;
let showText = true;
let textColor;
let colorTheme = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  textFont('Georgia');
  textSize(48);
  textAlign(CENTER, CENTER);
  textColor = color(255);
}

function draw() {
  background(10, 20, 30, 50);

  
  let vol = mic.getLevel();
  waveSize = map(vol, 0, 0.2, 50, 300);

 
  if (frameCount % 2 === 0) {
    particles.push(new Particle(mouseX, mouseY));
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].isFinished()) {
      particles.splice(i, 1);
    }
  }

 
  noStroke();
  fill(150, 100, 255, 50);
  ellipse(width / 2, height / 2, waveSize);

 
  if (showText) {
    push();
    fill(textColor);
    textSize(48 + sin(frameCount * 0.05) * 5);
    text("Welcome to Bath Spa University", width / 2, height / 2);
    pop();
  }
}


function mousePressed() {
  showText = !showText;
}


function keyPressed() {
  colorTheme = (colorTheme + 1) % 3;
  switch (colorTheme) {
    case 0:
      textColor = color(255);
      break;
    case 1:
      textColor = color(255, 204, 0);
      break;
    case 2:
      textColor = color(100, 255, 200);
      break;
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(1, 3));
    this.alpha = 255;
    this.size = random(5, 15);
  }

  update() {
    this.pos.add(this.vel);
    this.alpha -= 4;
  }

  show() {
    noStroke();
    fill(200, 100, 255, this.alpha);
    ellipse(this.pos.x, this.pos.y, this.size);
  }

  isFinished() {
    return this.alpha < 0;
  }
}
