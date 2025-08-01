let img;
let posterized;

function preload() {
  img = loadImage('https://images.pexels.com/photos/797797/pexels-photo-797797.jpeg'); 
}

function setup() {
  createCanvas(img.width, img.height);
  img.loadPixels();
  posterized = createImage(img.width, img.height);
  posterized.loadPixels();

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = (x + y * img.width) * 4;
      let r = quantize(img.pixels[index], 4);
      let g = quantize(img.pixels[index + 1], 4);
      let b = quantize(img.pixels[index + 2], 4);

      posterized.pixels[index] = r;
      posterized.pixels[index + 1] = g;
      posterized.pixels[index + 2] = b;
      posterized.pixels[index + 3] = 255;
    }
  }

  posterized.updatePixels();
  image(posterized, 0, 0);
}

function quantize(value, levels) {
  return int(value / (256 / levels)) * (256 / levels);
}
