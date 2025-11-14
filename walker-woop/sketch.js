// Project Title
// John Asiamah
// 11/13/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walker {
  constructor(theColor, x, y) {
    this.color = theColor;
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.speed =  10;
    this.id = Math.floor(random(100));

  }
  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius * 2);
  }
  move() {
    let choice = random(100);
    if(choice < 25) {
      this.y -= this. speed;
    }
    else if(choice < 50){
      this.y += this.speed;
    }
    else if(choice < 75){
      this.x -= this.speed;
    }
    else {
      this.x += this.speed;
    }
  }
}


function preload(){
  partyConnect("wss://deepstream-server-1.herokuapp.com","grid.io");
  shared = partyLoadShared("shared");
  guests = partyLoadGuestShareds();
  me = partyLoadMyShared();
}

let theWalkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  for (let myWalker of theWalkers){
    myWalker.move();
    myWalker.display();
  }
}

function spawnWalker(x, y){
  let r = random(255);
  let g = random(255);
  let b = random(255);
  let theColor = color(r, g, b);
  let someWalker = new Walker(theColor, x, y);
  theWalkers.push(someWalker);
}

function mousePressed(){
  spawnWalker(mouseX, mouseY);
}
