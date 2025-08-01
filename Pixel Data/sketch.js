let img;

function preload() {
  img = loadImage('https://images.pexels.com/photos/797797/pexels-photo-797797.jpeg'); 
}

function setup() {
  createCanvas(img.width, img.height);
  img.loadPixels();

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index];
      img.pixels[index] = r;        
      img.pixels[index + 1] = 0;    
      img.pixels[index + 2] = 0;    
    }
  }

  img.updatePixels();
  image(img, 0, 0);
}
