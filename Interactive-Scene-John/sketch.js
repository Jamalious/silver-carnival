// Interactive Scene
// John Asiamah
// 9/26/2025
//
// Extra for Experts:
// - used mouseWheel to toggle the color of lines and shape outlines 
// 

let reflectX = false;
let reflectY = false;
let shape_type = "line";
let x_1, y_1;
let x_2, y_2;
let colorHue = 0;
let rt_repititions = 6; // number of rotational repititions.

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);
  background (0);
  strokeWeight(2);
  noStroke();
  noFill();
  textSize(18);
}

function draw() {
  noStroke();
  text( "0- Line |  1 - Circle | 2 - Rect| x and y to reflect | r to restart", width /2, height - 50);
  // enabling a toggable colors controlled by mouse.
  if (mouseIsPressed) {
    let a = color(colorHue, 100, 100);
    stroke(a);
    noFill();
  }
  if (shape_type === "line" && mouseIsPressed) {
    if ( x_2 !== undefined && y_2 !== undefined) {
      symmetric_lines(x_2, y_2, mouseX, mouseY);
    }
  }
  //storing previous mouse positions
  x_2 = mouseX;
  y_2 = mouseY;
}

//storing starting point/ where to begin drawing
function mousePressed(){
  x_1 = mouseX;
  y_1 = mouseY;
}

// reseting previous mouse position values after each drag and click down.
function mouseReleased(){
  if (shape_type === "circle") {
    symmetric_circles(x_1, y_1, mouseX, mouseY);
  }
  else if (shape_type === "rectangle") {
    symmetric_rect(x_1, y_1, mouseX, mouseY);
  }
 
  x_2 = undefined;
  y_2 = undefined;
}

// symmetry functions for reflecting shapes across x, y, and x-y axis.
function symmetric_lines(x1, y1, x2, y2) {
  line(x1, y1, x2, y2);
  if (reflectX) {
    line(width - x1, y1, width - x2, y2);
  }
  if (reflectY){
    line(x1, height - y1, x2, height - y2);
  }
  if (reflectX && reflectY) {
    line(width - x1, height - y1, width - x2, height - y2);
  }
}

function symmetric_circles(x1,y1,x2,y2) {
  line(x1, y1, x2, y2);
  // enabling the circles radius to be dragged/increased.
  r = dist(x1, y1, x2, y2);
  fill(random(255), random(255), random(255));
  ellipse(x1, y1, r * 2);
  if (reflectX) {
    ellipse(width -x1, y1, r * 2);
  }
  if (reflectY){
    ellipse(x1, height - y1, r * 2);
  }
  if (reflectX && reflectY) {
    ellipse(width - x1, height - y1, r * 2);
  }
}

function symmetric_rect(x1,y1,x2,y2) {
  let w = x2 - x1;
  let h = y2- y1;
  fill(random(255), random(255), random(255));
  rect(x1, y1, w, h);
  if (reflectX) {
    rect(width - x1 - w, y1, w, h);
  }
  if (reflectY){
    rect(x1, height - y1 - h, w, h);
  }
  if (reflectX && reflectY) {
    rect(width - x1 -w , height - y1 - h, w, h);
  }
}

function keyPressed() {
  //using keys to toggle the reflction axes and type of shape to draw
  if (key === 'x'){
    reflectX = ! reflectX;
  }
  if (key === 'y') {
    reflectY = !reflectY;
  }
  if (key === 'r') {
    background(0);
  }
  if (key === '0') {
    shape_type = "line";
  }
  if (key === '1'){
    shape_type = "circle";
  }
  if (key === '2'){
    shape_type = "rectangle";
  }
}

function mouseWheel(event) {
  //setting sensitivity
  colorHue += event.delta /5; 
  // ranges from 0-360
  colorHue = (colorHue + 360) % 360; ;
}

