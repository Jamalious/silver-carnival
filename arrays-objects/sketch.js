// Multiplayer Typing game 
// John Asiamah
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const words = ['might', 'much', 'where', 'why', 'but', 'however', 'without', 'cause', 'how', 'such', 'that', 'into' ];
let botLoadTime = 3000;
let button = 'false';
let number1;
let number2;
let solution;
let correctKey = false;
let typeLog = [];
let startSession = 'false';
let lastSpawned = 0;

class Cars {
  constructor(x, y, carWidth, carHeight, dx) {
    this.x = x;
    this.y = y;
    this.carWidth = carWidth;
    this.carHeight = carHeight;
    this.dx = 0;
    this.inSession = false;
    this.id = random(1, 10);
  }
  moveCar() {
    if (this.inSession) { 
    }
  }
}
class theBots {
  constructor(x, y, carWidth, carHeight, dx) {
    this.x = x;
    this.y = y;
    this.carWidth = carWidth;
    this.carHeight = carHeight;
    this.dx = 0;
    this.inSession = false;
    this.id = random(1, 10);
  }
  moveCar() {
    if (this.inSession) { 
    }


  }

}

//Characteristics of each players car
let playerOneCar = {
  x: 40, 
  y: 100,
  vel: 0,
  skip_word: 0,
  avg_accuracy: 0,
  session: 0,
  isSpawned: false,

};
let playerTwoCar = {
  x2: 40,
  y2: 300,
  vel2: 0,
  skip_word: 0,
  avg_accuracy: 0, 
  session: 0,
  isSpawned: false,
};

let bots = {
  x: 40,
  y: 100,
  vel3: 0,
  accuracy: 0,
  isSpawned: false,
};

function preload() {
  partyConnect( 'https://jamalious.github.io/silver-carnival/'
  );
  pos = partyLoadShared("cars", playerOneCar, playerTwoCar, bots);

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  partyToggleInfo(true);
  background(0);
  gameSession();
  generateWords();
}


function draw() {
  background(220);
  // Pretend these circles are cars for now
  ellipse(playerOneCar.x, playerOneCar.y, 100, 100);
  ellipse(playerTwoCar.x2, playerTwoCar.y2, 100, 100);
  ellipse(bots.x3, bots.y3, 100, 100);
}

function mousePressed(){
  playerOneCar.x = mouseX;
}


function generateWords(){
  const randomIndex = Math.floor(random() * words.length);
  return words[randomIndex];
}
function gameSession(){
  if (startSession){
    document.getElementById('words').innerHTML =  '';
    for (let i = 0; i < 200; i ++){
      document.getElementById('words').innerHTML += generateWords();
    }
    for (character of currentIndex){
      if (key === currentIndex[character]){
        playerOneCar.x =+ 0.001;
      }
    }
    //how to display these words on the screen? work on style/html stuff later
    console.log(currentIndex);
  }

}

function moveCarsAcrossScreen(){

}
function loadBots(){
  if (millis() > lastSpawned + botLoadTime) {
    lastSpawned = millis();
    newbot();
  }
}