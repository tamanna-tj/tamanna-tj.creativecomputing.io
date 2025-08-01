let mood = "calm";
let colors = {
  calm: ["#AEC6CF", "#BFD8D2", "#D6E3F8"],
  angry: ["#FF6F61", "#FF3B3F", "#9B1D20"],
  happy: ["#FFF275", "#FFE066", "#FFD23F"],
  sad: ["#6A0572", "#AB83A1", "#3E2F5B"]
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
  frameRate(60);
}

function draw() {
  let c = random(colors[mood]);
  stroke(c);
  strokeWeight(random(0.5, 2));

  let yoff = 0;
  beginShape();
  for (let x = 0; x < width; x += 10) {
    let y = noise(x * 0.01, yoff + frameCount * 0.005) * height;
    let variance = (mouseY - height / 2) * 0.05;
    y += variance;
    vertex(x, y);
    yoff += 0.01;
  }
  endShape();
}


function keyPressed() {
  if (key === '1') mood = "calm";
  if (key === '2') mood = "angry";
  if (key === '3') mood = "happy";
  if (key === '4') mood = "sad";
}


function mousePressed() {
  saveCanvas("emotional_landscape", "png");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
