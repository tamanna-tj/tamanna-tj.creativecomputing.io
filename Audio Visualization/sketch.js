let song;
let fft;
let amp;
let playing = false;

function preload() { 
  
  song = loadSound('sound.mp3'); 
}

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB);
  fft = new p5.FFT();
  amp = new p5.Amplitude();
  background(0);
  textAlign(CENTER, CENTER);
  textSize(24);
  fill(255);
}

function draw() {
  background(0, 0.1); 
  
  let vol = amp.getLevel();
  let radius = map(vol, 0, 0.3, 100, 300);
  fill((frameCount % 360), 100, 100);
  noStroke();
  ellipse(width / 2, height / 2, radius);

  
  let waveform = fft.waveform();
  noFill();
  stroke(200, 100, 100);
  beginShape();
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = height / 2 + waveform[i] * 200;
    vertex(x, y);
  }
  endShape();


  let spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length; i += 10) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    stroke(map(i, 0, spectrum.length, 0, 360), 100, 100);
    line(x, height, x, h);
  }

 
  if (!playing) {
    fill(0, 0, 100);
    text("Click to Play Music & Visualize", width / 2, height - 50);
  }
}

function mousePressed() {
  if (!playing) {
    song.play();
    playing = true;
  } else {
    song.pause();
    playing = false;
  }
}
