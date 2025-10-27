// Multiplayer Typing game 
// John Asiamah
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let paragraphs = ["One summer night a man stood on a low hill overlooking a wide expanse of forest and field. By the full moon hanging low in the west he knew what he might not have known otherwise: that it was near the hour of dawn. A light mist lay along the earth, partly veiling the lower features of the landscape, but above it the taller trees showed in well defined masses against a clear sky. Two or three farmhouses were visible through the haze, but in none of them, naturally, was a light. Nowhere, indeed, was any sign or suggestion of life except the barking of a distant dog, which, repeated with mechanical iteration, served rather to accentuate than dispel the loneliness of the scene. ", "Smooth muscle cells are connected directly to one another, allowing electrical pulses to pass through them. Cardiac muscle is a special type of tissue that is only found within your heart. Did you know your heart is actually a very strong muscle? Like skeletal muscle cells, cardiac muscles cells are striated, or striped. Like smooth muscle cells, cardiac muscle cells are not under the control of your brain, but instead operate independently. Also like smooth muscle cells, the cells of your heart are connected directly to one another, allowing electrical pulses to flow through them.","Extrinsic motivation is one of the oldest and most common forms of motivation in the world. Simply stated, when we experience extrinsic motivation we expect to be rewarded. A more formal definition refers to motivation that's derived from outside a person. The motivating factors come externally in the form of rewards such as money or, in the case of a student, rewards come in the form of grades. It's the reward that provides satisfaction from completing the task and not the pleasure of doing it. A person who is motivated extrinsically will work on a task even though he may hate what he's doing because of the anticipated reward."];
const paragraphDisplayElement = document.getElementById('paragraphDisplay');
const userInputElement = document.getElementById('userInput');
let botLoadTime = 3000;
let button = 'false';
let number1;
let number2;
let solution;
let correctKey = false;
let typeLog = [];
let startSession = 'false';
let lastSpawned = 0;
let my, players, shared;
const START_X = 40;


class Cars {
  constructor(x, y, carWidth, carHeight, dx) {
    this.x = x;
    this.y = y;
    this.carWidth = carWidth;
    this.carHeight = carHeight;
    this.dx = dx;
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
    this.dx = dx;
    this.id = random(1, 10);
  }
  moveCar() {
    if (this.inSession) { 
    }

  }

}

//Characteristics of each players car
let playerOneCar = {
  x: START_X, 
  y: 100,
  vel: 0,
  skip_word: 0,
  avg_accuracy: 0,
  session: 0,
  isSpawned: false,

};
let playerTwoCar = {
  x2: START_X,
  y2: 200,
  vel2: 0,
  skip_word: 0,
  avg_accuracy: 0, 
  session: 0,
  isSpawned: false,
};


function preload() {
  //partyConnect( "wss://demoserver.p5party.org", "typing"
  //);
  //connecting to the server(based off Among Us demo setup)
  //my = partyLoadMyShared();
  //players = partyLoadGuestsShared();
  //shared = partyLoadShared("cars", bots,{
  // //carX: 200,
  // //carY: 200,
  // // vel2: 0,
  // //skip_word: 0,
  //  //avg_accuracy: 0, 
  // // session: 0,
  // //isSpawned: false,

  //}
  //);

}

function setup() {
  createCanvas(300, 300);
  generateParagraph();
  //my.car = new Cars(START_X, 100, 50, 50, 0);
  // bot.car = new theBots(START_X, 200, 50, 50, 0);
}


function draw() {
  // Pretend these circles are cars for now
  //ellipse(playerOneCar.x, playerOneCar.y, 100, 100);
  //ellipse(playerTwoCar.x2, playerTwoCar.y2, 100, 100);
  //ellipse(bots.x3, bots.y3, 100, 100);
  
}


function generateParagraph(){
  const paragraph = random(paragraphs);
  paragraphDisplayElement.innerText = paragraph;
  paragraph.split('');forEach(character => {
    const characterSpan = document.createElement('span');
    characterSpan.innerText = character;
    characterSpan.classList.add('correct-key-pressed')
    paragraphDisplayElement.appendChild(characterSpan);
  });
  console.log(quote);
  //clearing out user input for every new paragraph.
  userInputElement.value = null;

}
//function gameSession(){
// //if (startSession){
// // generate_paragraph(); 
// //for (character of currentIndex){
// // if (key === currentIndex[character]){
// //  playerOneCar.x =+ 0.001;
// // }
// //}
// //how to display these words on the screen? work on style/html stuff later
// // console.log(currentIndex);
// //}

//}

//function loadBots(){
// // if (millis() > lastSpawned + botLoadTime) {
// //  lastSpawned = millis();
// //spawnBot = new theBots(START_X, 200, 45, 45, 0);
// //theBots.y += 100;
// // }
//}

