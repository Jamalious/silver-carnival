// Interactive Scene
// John Asiamah
// 9/26/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gameState = 'kaleidoscope';
let userx;
let usery;
let userx2;
let usery2;
let w = 100;
let h = 45;
let button_1 = false;
let waitTime = 2000;
let d = -30;
let x = 400;
let y = 400;
let circle_x;
let circle_y;
let r = 100;
let a = 100;
let lastSwitchedTime = 0;
line_drawn = false;
lineDuration = 4000;
let circle_selected = false;
let reflectX = false;
let reflextY = false;
let shape_type = "line";
let x_1;
let y_1;
let x_2;
let y_2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB);
  background (255, 128, 64);
  let circle_button = createButton("Add circles");
  circle_button.position(0, windowHeight / 2);
  if (circle_button.mousePressed) {
    circle_selected = !circle_selected;
  }
  if (shape_type === "circle") {
    symmetric_circle(x_1, y_1, mouseX, mouseY);
  }
  else if (shape_type === "rectangle") {
    symmetric_rect(x_1, y_1, mouseX, mouseY);
  }

}
function symmetric_lines(x1,y1,x2,y2) {
  line(x1, y1, x2, y2);
  if (reflectX) {
    line(width -x1, y1, width - x2, y2);
  }
  if (reflectX && reflectY){
    line(width - x1, height - y1, width - x2, height -y2);
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
  w = x2 - x1;
  h - y2- y1;
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
function mousePressed(){
  x_1 = mouseX;
  y_1 = mouseY;
}
function mouseReleased(){
  if (shape_type === "circle") {
    symmetric_circles(x_1, y_1, mouseX, mouseY);
  }
  else if (shape_type === "circle") {
    symmetric_rect(x_1, y_1, mouseX, mouseY);
  }
  x_2 = undefined;
  y_2 = undefined;
}
function draw() {
  // create_shapes();
  // line_setup();
  // next_lines();
  if (shape_type === "line" && mouseIsPressed) {
    stroke(0);
    if ( x_2 !== undefined && y_2 !== undefined) {
      symmetric_lines(x_2, y_2, mouseX, mouseY);
    }
  }
  x_2 = mouseX;
  y_2 = mouseY;
}

function pencil_drawing() {
  if (mouseIsPressed) { 
    line(mouseX , mouseY, pmouseX , pmouseY);
    stroke(0, 0, 0);
  }
}
function line_setup(){
  if (millis() > lastSwitchedTime + lineDuration) {
    lastSwitchedTime = millis();
    draw_line = !draw_line;
  }
}

function next_lines(){
  if (draw_line === 'true'){
    line(x, y, x + r, y - 30);
  }
}

function create_shapes(){
  if (gameState === 'kaleidoscope') {
    translate( width /2 , height / 2) ;
  }
  if (gameState === 'kaleidoscope') {
    let shape_segments = 6;
    let rotation_angle = 360 / shape_segments;
    for ( let shape = 0; shape < shape_segments; shape++){
      fill( 45* shape , 45, 175);
      rotate(rotation_angle);
      stroke(150);
      strokeWeight(sw_selector);
      line(x_1, y_1, x_2, y_2);
      // reflecting the line
      scale( 1.1, -1.1);
      line(x_1, y_1, x_2, y_2);
      pop();
    }
  }
}



