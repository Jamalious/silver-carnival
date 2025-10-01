// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let light_state;
let lastSwitchedTime;
let lightColor = 'red';

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  updatedLightState();
  drawOutlineOfLights();
}

function updatedLightState() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights

  if (lightColor === "red" && millis() > lastSwitchedTime + redDuration) {
    lightColor = 'green';
  }
  else if (lightColor === 'green' & millis() > lastSwitchedTime + greenduration) {
    lightColor = 'yellow';
  }
  else if (lightColor === 'yellow' && millis() > lastSwitchedTime + yellowduration) {
    lightColor === 'red'
    lastSwitchedTime = millis();
  }
}
function drawOutlineOfLights() {
    fill(255)
    ellipse(width/2, height/2 - 65, 50, 50); //top
    ellipse(width/2, height/2, 50, 50); //middle
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
}