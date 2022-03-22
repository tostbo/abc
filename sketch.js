var bgcolor;
var button;

function setup() {
  createCanvas(200, 200);  
  bgcolor = color(200);
  createButton("go go go go");
//  button.mousePressed(changeColor);
}

//function changeColor()  {
//  bgcolor = color(random(255));
//}

//function mousePressed() {
//  createP("this is text");
//}

function draw() {
  background(bgcolor);
  fill(255, 0, 0);
  rect(100, 100, 50, 50);
}
