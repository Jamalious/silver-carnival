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
let c = windowHeight;
let waitTime = 2000;
let add_shape;
let swtich = 0;
let x;
let y;
let circle_x;
let circle_y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB);
  background (255, 128, 64);
  let x = width / 2;
  let y = height /2;
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

function add_circle(){
  if (add_shape){
    fill(random(255));
    for ( let dr = 0; dr < 12; dr = dr + 30) {
      line( x - dr, y - dr, x + dr, y + dr);
      let a = 0;
      circle(circle_x - dr, circle_y - dr ,50);
      circle_x = x;
      circle_y = y;
      circle_x = circle_x +  10;
      circle_y = circle_y + 10;
    }
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
function circle_metronome(){
  
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

