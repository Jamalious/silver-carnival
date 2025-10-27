// Multiplayer Typing game 
// John Asiamah
// October 26, 2025
//
// Extra for Experts:
// - "Explored HTML and CSS"
// - "Began implementing multiplayer with p5.party"
//- "Implemented HTML and CSS design elements"
// "Looked into events and addeventListeners"
// didn't finish project but plan on continuing to work on it for my final project"
// -"Looked into how to use classes but didn't quite figure out how to use them"

let paragraphs = ["One summer night a man stood on a low hill overlooking a wide expanse of forest and field. By the full moon hanging low in the west he knew what he might not have known otherwise: that it was near the hour of dawn. A light mist lay along the earth, partly veiling the lower features of the landscape, but above it the taller trees showed in well defined masses against a clear sky. Two or three farmhouses were visible through the haze, but in none of them, naturally, was a light. Nowhere, indeed, was any sign or suggestion of life except the barking of a distant dog, which, repeated with mechanical iteration, served rather to accentuate than dispel the loneliness of the scene. ", "Smooth muscle cells are connected directly to one another, allowing electrical pulses to pass through them. Cardiac muscle is a special type of tissue that is only found within your heart. Did you know your heart is actually a very strong muscle? Like skeletal muscle cells, cardiac muscles cells are striated, or striped. Like smooth muscle cells, cardiac muscle cells are not under the control of your brain, but instead operate independently. Also like smooth muscle cells, the cells of your heart are connected directly to one another, allowing electrical pulses to flow through them.","Extrinsic motivation is one of the oldest and most common forms of motivation in the world. Simply stated, when we experience extrinsic motivation we expect to be rewarded. A more formal definition refers to motivation that's derived from outside a person. The motivating factors come externally in the form of rewards such as money or, in the case of a student, rewards come in the form of grades. It's the reward that provides satisfaction from completing the task and not the pleasure of doing it. A person who is motivated extrinsically will work on a task even though he may hate what he's doing because of the anticipated reward."];
const paragraphDisplayElement = document.getElementById('paragraphDisplay');
const userInputElement = document.getElementById('userInput');
let botLoadTime = 3000;
let accuracy;
let startSession = 'false';
let shared;
let player;
let players;
let waitTime = 2000;
let lastSwitched = 0;
const START_X = 40;
CAR_SIZE = 8;

//let lastSpawned = 0;
// comparing individual characters from the displayed paragraph to the user's input. Drawn https://www.youtube.com/watch?v=R-7eQIHRszQ&t=667s"


//class racer {
// //constructor(x, y, carWidth, carHeight, dx) {
// //this.x = x;
// //this.y = y;
// //this.carWidth = carWidth;
// //this.carHeight = carHeight;
// //this.dx = dx;
// //this.inSession = false;
// //this.id = random(1, 10);
// //}
//}
//class theBots {
// //constructor(x, y, carWidth, carHeight, dx) {
//  //this.x = x;
// //this.y = y;
// //this.carWidth = carWidth;
// //this.carHeight = carHeight;
// //  //this.dx = dx;
//  // //this.id = random(1, 10);
// //}
//};


//Characteristics of each players car
function preload() {
  partyConnect( "wss://demoserver.p5party.org", "typing"
  );
  //connecting to the server(looked at Among Us demo setup)
  shared = partyLoadShared();
  players = partyLoadGuestShareds();
  player = partyLoadMyShared( {
    pos: {
      x: 25,
      y: random(50, 150),
      dx: 0,
      accuracy: 0,
      wpm: 0,
    },
    gameInSession: false,
    colour: [random(255), random(255), random(255)],
    inSession: false,
  });
}

function setup() {
  createCanvas(500, 300);
  background(0);
  generateParagraph();
  checkCharacters();
}

function draw() {
  gameSession();
  sessionOver();
  sessionOver();
  moveCars();
}

// setting up the player cars for the typing session
function gameSession() {
  for(let guest of players) {
    if (guest.inSession){
      ellipse(width/2 + guest.pos.x - CAR_SIZE /2 , height/2 + guest.pos.y - CAR_SIZE /2, CAR_SIZE);
    }
  };
}

//determining when the session is over
function sessionOver() {
  let sessionOver = true;
  for (let guest of players) {
    if(guest.inSession) {
      sessionOver = false;
      break;
    }
  }
  noStroke();
  textAlign(CENTER, CENTER);
  fill("white");
  text("Race Over!", width /2, height /2 - height/2 - 50);
  fill("white");
  // text("Accuracy: {accuracy}", width /2, height /2- height /2 + 50);
}

//moving the player cars when the players type the correct keys
function moveCars(){
  if (player.inSession && player.pos.x < 400){
    player.pos.x += 5;
  }
}

// picking a new paragraph for each new session
function generateParagraph(){
  const paragraph = random(paragraphs);
  paragraphDisplayElement.innerHTML = '';
  paragraph.split('').forEach(character => {
    const characterSpan = document.createElement('span');
    characterSpan.innerText = character;
    paragraphDisplayElement.appendChild(characterSpan);
  });
  console.log(paragraph);
  
  //clearing out user input for every new paragraph.
  userInputElement.value = null;
}

function checkCharacters(){
  let finishedSession = true;

  //loops over every character in the paragraph array. If correct character is typed, 
  userInputElement.addEventListener('input', () => {
    const arrayParagraph = paragraphDisplayElement.querySelectorAll('span');
    
    //splitting the user's input into an array for each individual character
    const arrayPosition = userInputElement.value.split('');
    arrayParagraph.forEach((characterSpan, index) => {
      const character = arrayPosition[index];
      
      // adding and removing 
      if (character === null) {
        characterSpan.classList.remove("correct-key-pressed");
        characterSpan.classList.remove("incorrect-key-pressed");
        finishedSession = false;
      } 
      else if (character === characterSpan.innerText) {
        characterSpan.classList.add("correct-key-pressed");
        characterSpan.classList.remove("incorrect-key-pressed");
      } 
      else {
        characterSpan.classList.remove("correct-key-pressed");
        characterSpan.classList.add("incorrect-key-pressed");
        finishedSession = false;
      }
    });

    if (finishedSession){
      generateParagraph();
    }
  });
}