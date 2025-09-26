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
}

function pencil_drawing() {
  if (mouseIsPressed) { 
    line(mouseX , mouseY, pmouseX , pmouseY);
    stroke(0, 0, 0);
  }
}
function create_rect() {
  if (mousePressed && some_value) {
  
  }
}
  
function create_ellipse(){
  if (mousePressed && some_value ) {
  
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