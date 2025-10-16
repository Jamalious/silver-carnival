// Project Title
// John Asiamah
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let words = ['might,'much' 'where', 'why', 'but', 'however', 'without', 'cause ]
let pos = {
  x: 0, 
  y: 0,
};
let number1;
let number2;
let solution;


function preload() {
  partyConnect(

    
  );
  pos = partyLoadShared("pos", pos);

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  ellipse(pos.x, pos.y, 100, 100);
  
}

function check_addition(a, b, Sum) {
  
}

function mousePressed(){
  pos.x = mouseX;
  pos.y = mouseY;
}