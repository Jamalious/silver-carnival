// Typing game 
// John Asiamah
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const words = ['might', 'much', 'where', 'why', 'but', 'however', 'without', 'cause', 'how', 'such', 'that', 'into' ];

let botLoadTime = 3000;
let number1;
let number2;
let solution;
let correctKey = false;
let typeLog = [];
let botSpawnTime = 2000;
let lastSpawned = 0;

//Characteristics of each players car
let playerOneCar = {
  x: 0, 
  y: 0,
  vel: 0,
  skip_word: 0,
  avg_accuracy: 0,
  session: 0,

};
let playerTwoCar = {
  x2: 0,
  y2: 0,
  vel2: 0,
  skip_word: 0,
  avg_accuracy: 0, 
  session: 0,
};
let bots = {
  x3: 0,
  y3: 0,
  vel3: 0,
  accuracy: 0,
};

function preload() {
  partyConnect( 'https://jamalious.github.io/silver-carnival/'
  );
  pos = partyLoadShared("cars", playerOneCar, playerTwoCar, bots);

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}


function draw() {
  background(220);
  // Pretend these circles are cars for now
  ellipse(playerOneCar.x, playerTwoCar.y, 100, 100);
  ellipse(playerTwoCar.x1, playerTwoCar.y1, 100, 100);
  ellipse(bots.x1, bots.x2, bots.x3, 100, 100);
  start_session();
  generate_words();
  
}


function mousePressed(){
  playerOneCar.x = mouseX;
  playerOneCar.y = mouseY;
}

function start_session() {
  if (button_2.mousePressed){
    generate_words();
  }
}
function generate_words(){
  const randomIndex = Math.floor (random() * words.length);
  const displayTheWords = words(randomIndex);
  for (let i = 0; i < 200; i ++){
    currentIndex = words[randomIndex]; 
  }
  //how to display these words on the screen? work on style/html stuff later
  console.log(currentIndex);
}
// creating a keylogger
function keylogger() {
  for (character of currentIndex){
    if (key === currentIndex[character]){
    }
  }
}
new_bot() {

}
function moveCarsAcrossScreen(){

}
function loadBots(){
  if (millis() > lastSpawned + botLoadTime) {
    lastSpawned = millis();
    newbot();
  }
}