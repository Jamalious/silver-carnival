// Project Title
// John Asiamah
// 11/12/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
const CELL_SIZE = 50;
const IMPASSABLE = 1;
const OPEN_TILE = 0;
const PLAYER1 = 9;
const PLAYER2 = 9;
const PLAYER3 = 9;
const PLAYER4 = 9;
const PLAYER5 = 9;
const PLAYER6 = 9;
const PLAYER7 = 9;
const PLAYER8 = 9;
const PLAYER9 = 9;
const PLAYER10 = 9;

let GRIDWIDTH,GRIDHEIGHT = 10;
let cellSize;
let grid;
let displayWorld;
let TOP_RADIUS = 10;
let players, guests, me;
let BOTTOM_RIGHT_RADIUS = 10;
let BOTTOM_LEFT_RADIUS = 10;



let thePlayer = {
  x: 0,
  y: 0,
  dx: 5, 
  dy: 5,
  isAlive: false,
};

class bots {
  constructor(x, y, dx, dy, ){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
  }
};
function preload(){
  partyConnect("wss://deepstream-server-1.herokuapp.com","grid.io");
  shared = partyLoadShared("shared");
  guests = partyLoadGuestShareds();
  me = partyLoadMyShared({
    role: "somePlayer",
    y: 45,
    x: 0, 

  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  stroke(15);
  cols = Math.floor(width/CELL_SIZE);
  rows = Math.floor(height/CELL_SIZE);
  grid = createGrid(cols, rows); 
  
  //add players to grid
  addPlayer();
  //resetting the game clock
  if (partyIsHost){
    partySetShared(shared, {
      timer: 0,
    });
  }
}
function mapTiles(){
  //const shapeAngles = [45, 60, 72, 36,];
  //const randomIndex = Math.floor(Math.random() * shapeAngles.length);
  //const shapeType = shapeAngles[randomIndex];
}

function draw() {
  background(255);
  displayGrid();
  assignPlayer();
  if (partyIsHost()){
    me.y = mouseY - 50;
    me.x = mouseX- 50;
  }

}


function keyPressed(){
  if (key === "w" ){
    movePlayer(thePlayer.x, thePlayer.y - thePlayer.dy);
  }
  else if(key ==="d") {
    movePlayer(thePlayer.x + thePlayer.dx, thePlayer.y);
  }
  else if (key === "a") {
    movePlayer(thePlayer.x - thePlayer.dx, thePlayer.y);
  }
  else if (key === "s"){
    movePlayer(thePlayer.x, thePlayer.y + thePlayer.dy );
  }
}

function movePlayer(x, y) {
  if (x >= 0 && x < cols && y >= 0 && y < rows && grid[y][x] === OPEN_TILE) {
    //previous position
    let oldX = thePlayer.x;
    let oldY = thePlayer.y;
  
    //moving the player location
    thePlayer.x = x;
    thePlayer.y = y;
  
    //put player on grid
    grid[thePlayer.y][thePlayer.x] = PLAYER1;
  
    //reset old spot to be open tile
    grid[oldY][oldX] = OPEN_TILE;
  }


}
function createGrid(cols, rows){
  let theGrid = [];
  for (let y = 0; y < rows; y++) {
    theGrid.push([]);
    for (let x = 0; x < cols; x++) {
      theGrid[y].push(OPEN_TILE);
    }
  }
  return theGrid;



}
function displayGrid(){
  for (let y = 0; y < rows; y ++){
    for(let x = 0; y < cols; x ++){
      if (grid[y][x] === OPEN_TILE){
        fill("white");
        square(x* CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
      }
      else if (grid[firstPlayer.y][firstPlayer.x] === PLAYER1) {
        fill(firstPlayer.color);
        square(x* CELL_SIZE, y * CELL_SIZE, CELL_SIZE, 30);
      }
      else if (grid[y][x] === PLAYER2) {
        fill(secondPlayer.color);
        square(x* CELL_SIZE, y * CELL_SIZE, CELL_SIZE, 30);
      }
      else if (grid[y][x] === PLAYER3) {
        fill(thirdPlayer.color);
        square(x* CELL_SIZE, y * CELL_SIZE, CELL_SIZE, 30);
      }
      else if (grid[y][x] === PLAYER4) {
        fill(fourthPlayer.color);
        square(x* CELL_SIZE, y * CELL_SIZE, CELL_SIZE, 30);
      }
      else if (grid[y][x] === PLAYER5) {
        fill(fifthPlayer.color);
        square(x* CELL_SIZE, y * CELL_SIZE, CELL_SIZE, 30);
      }
      else if (grid[y][x] === PLAYER6) {
        fill(sixthPlayer.color);
        square(x* CELL_SIZE, y * CELL_SIZE, CELL_SIZE, 30);
      }
      else if (grid[y][x] === PLAYER7) {
        fill(seventhPlayer.color);
        square(x* CELL_SIZE, y * CELL_SIZE, CELL_SIZE, 30);
      }
      else if (grid[y][x] === PLAYER8) {
        fill(eightPlayer.color);
        square(x* CELL_SIZE, y * CELL_SIZE, CELL_SIZE, 30);
      }
      else if (grid[y][x] === PLAYER9) {
        fill(ninthPlayer.color);
        square(x* CELL_SIZE, y * CELL_SIZE, CELL_SIZE, 30);
      }
      else if (grid[y][x] === PLAYER10) {
        fill(tenthPlayer.color);
        square(x* CELL_SIZE, y * CELL_SIZE, CELL_SIZE, 30);
      }
    }
  }
}


