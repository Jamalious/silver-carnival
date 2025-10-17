// Typing game 
// John Asiamah
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let words = ['might', 'much', 'where', 'why', 'but', 'however', 'without', 'cause', 'how', 'such', 'that', 'into' ];
  
let playerOneCar = {
  x: 0, 
  y: 0,
};
let pklayerTwoCar = {
  x2: 0,
  y2: 0,
}
let number1;
let number2;
let solution;
let correctKey = false;
let typeLog = [];


function preload() {
  partyConnect( 'https://jamalious.github.io/silver-carnival/'
  );
  pos = partyLoadShared("pos", pos);

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(220);
  ellipse(pl.x, pos.y, 100, 100);
  ellipse(po)
  generate_words();
  
}


function mousePressed(){
  pos.x = mouseX;
  pos.y = mouseY;
}

function start_session() {
  if (button_2.mousePressed){
    generate_words();
  }
}
function generate_words(){
  const randomIndex = Math.floor (random() * words.length);
  for (let i = 0; i < 200; i ++){
    currentIndex = words[randomIndex]; 
    
  }
  //how to display these words on the screen? work on style/html stuff later
  console.log(currentIndex);
}
function checkKeys () {
  for (character of currentIndex){
    if (key === currentIndex[character]){
    }
  }
}