let img;

function preload() {
  img = loadImage('https://images.pexels.com/photos/797797/pexels-photo-797797.jpeg'); 
}

function setup() {
  createCanvas(img.width, img.height);
  background(255);
  img.loadPixels();
  noStroke();
}

function draw() {
  for (let i = 0; i < 100; i++) { 
    let x = floor(random(img.width));
    let y = floor(random(img.height));
    let index = (x + y * img.width) * 4;
    let r = img.pixels[index];
    let g = img.pixels[index + 1];
    let b = img.pixels[index + 2];

    fill(r, g, b, 200);
    ellipse(x, y, 6, 6); 
  }
}
