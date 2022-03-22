var bgcolor;
var button;

function setup() {
  createCanvas(200, 200);  
  bgcolor = color(200);
  button = createButton("go go go go");
  button.mousePressed(changeColor);
}

function changeColor()  {
  bgcolor = color(random(255));
}

function mousePressed() {
  createP("this is text");

}

function draw() {
  background(0);
  fill(255, 0, 0);
  rect(100, 100, 50, 50);
}
