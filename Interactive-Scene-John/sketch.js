// Interactive Scene
// John Asiamah
// 9/26/2025
//
// Extra for Experts:
// - used mouseWheel to toggle the color of lines and shape outlines 
// 

let gameState = 'kaleidoscope';
let reflectX = false;
let reflectY = false;
let shape_type = "line";
let x_1, y_1;
let x_2, y_2;
let colorHue = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);
  background (255, 128, 64);
  strokeWeight(2);
  noStroke();
  noFill();
}
function draw() {
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
  x_2 = mouseX;
  y_2 = mouseY;
}
function mousePressed(){
  x_1 = mouseX;
  y_1 = mouseY;
}

function mouseReleased(){
  if (shape_type === "circle") {
    symmetric_circles(x_1, y_1, mouseX, mouseY);
  }
  else if (shape_type === "rectangle") {
    symmetric_rect(x_1, y_1, mouseX, mouseY);
  }
  // reseting previous mouse position values after each drag and click down.
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
  r = dist(x1, y1, x2, y2);
  fill('black');
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
  fill('black');
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
  if (key === 'c') {
    background(255);
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
  colorHue += event.delta /5; //setting sensitivity
  colorHue = (colorHue + 360) % 360; // range from 0-360;
}

function kaleidoscope_effect(){
  if (gameState === "kaleidoscope") {
    translate(width / 2, height /2);
    if (shape_type === "line" && mouseIsPressed) {
      let x1 = mouseX - width /2;
      let y1 = mouseY - height /2;
      let x2 = pmouseX - width /2;
      let y2 = pmouseY - height /2;
      let s_rotation = 360 / segments;
      for (let segments = 0; segments < shape_segments; segments++) {
        push();
        rotate(s_rotation * segments);
        stroke(0);
        line(x1, y1, x2, y2);
        //reflecting about the origin
        scale(1, -1);
        line(x1, y1, x2, y2);
        pop();
      }
    }
  } 
}

