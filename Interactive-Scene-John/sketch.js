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
let swtich = 0;
let x = 400;
let y = 400;
let circle_x;
let circle_y;
let r = 100;
let a = 100;
let lastSwitchedTime = 0;
line_drawn = false;
lineDuration = 4000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB);
  background (255, 128, 64);
}

function draw() {
  pencil_drawing();
  homescreen();
  create_shapes();
  add_circle();
  // line_setup();
  // next_lines();
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
function mouseWheel(){
   
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
    let shape_segments = 12;
    let rotation_angle = 360 / shape_segments; 
    for ( let shape = 0; shape < shape_segments; shape++){
      fill( 45 * shape , 45, 175);
      push();
      rotate(shape * rotation_angle);
      pencil_drawing();
    }
  }
}

function homescreen(){
  let x = windowWidth / 2;
  let y = windowHeight / 1.25;
  if (gameState === 'homescreen') {
    let dy;
  }
  if ( mouseX < x ) {
    let dx;
  }
}

function find_character(){
  for (let a = 25; a < width; a = a + 50 ){
    fill("black");
    circle(a, c / 2 , 30);
  }
  let a = -25;
  while (a < width) {
    a = a + 50;
    fill('black');
    circle(a, c , 30);
  } 
}

