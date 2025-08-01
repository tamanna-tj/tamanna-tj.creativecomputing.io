let data = [
  { country: "China", population: 1425887337 },
  { country: "India", population: 1417173173 },
  { country: "USA", population: 339996563 },
  { country: "Indonesia", population: 277534122 },
  { country: "Pakistan", population: 240485658 },
  { country: "Nigeria", population: 223804632 },
  { country: "Brazil", population: 216422446 },
  { country: "Bangladesh", population: 172954319 },
  { country: "Russia", population: 144444359 },
  { country: "Mexico", population: 132246760 }
];

let maxPop;

function setup() {
  createCanvas(1000, 600);
  textFont('Georgia');
  textSize(16);
  textAlign(CENTER, CENTER);
  maxPop = max(data.map(d => d.population));
}

function draw() {
  background(30);
  fill(255);
  textSize(24);
  text("Population of Top 10 Countries (2023)", width / 2, 40);

  let barWidth = width / (data.length * 1.5);
  for (let i = 0; i < data.length; i++) {
    let d = data[i];
    let barHeight = map(d.population, 0, maxPop, 0, height - 150);

    let x = 100 + i * (barWidth + 30);
    let y = height - barHeight - 50;

   
    if (
      mouseX > x &&
      mouseX < x + barWidth &&
      mouseY > y &&
      mouseY < height - 50
    ) {
      fill(255, 204, 0);
      cursor(HAND);
    } else {
      fill(100, 200, 255);
      cursor(ARROW);
    }

    rect(x, y, barWidth, barHeight);

    
    fill(255);
    textSize(14);
    text(d.country, x + barWidth / 2, height - 25);

    
    if (
      mouseX > x &&
      mouseX < x + barWidth &&
      mouseY > y &&
      mouseY < height - 50
    ) {
      fill(255);
      textSize(16);
      text(nf(d.population), x + barWidth / 2, y - 20);
    }
  }
}
