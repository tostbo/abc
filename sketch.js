function setup() {
  createCanvas(200, 200);  
}
  
function mousePressed() {
  createP("His a random number: " + random(0,10));
}

function draw() {
  background(0);
  fill(255, 0, 0);
  rect(100, 100, 50, 50);
}
