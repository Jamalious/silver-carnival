// Project Title
// John Asiamah
// 11/12/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
const CELL_SIZE = 50;
const IMPASSABLE = 1;
const OPEN_TILE = 0;
const SNAKE = 9;
let GRIDWIDTH , GRIDHEIGHT = 10;
let cellSize;
let grid;
let displayWorld;
let TOP_RADIUS = 10;
let player, guests, my;
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

let gridShape =  {
  x: GRIDWIDTH,
  y: GRIDHEIGHT,
  radius: cellSize,
  angle: shapeType,
};

function preload(){
  partyConnect("wss://deepstream-server-1.herokuapp.com","grid.io");
  shared = partyLoadShared("shared", thePlayer);
  players = partyLoadGuestShareds();
  guest = partyLoadmyShared();
}

function setup() {
  createCanvas(6000, 6000);
  angleMode(DEGREES);
  if (width < height) {
    cellSize = width/SQUARE_DIMENSIONS;
  }
  else {
    cellSize = height/SQUARE_DIMENSIONS;
  }
  grid = generateRandomGrid(GRIDWIDTH, GRIDHEIGHT);
  //world map in bottom left corner
  displayWorld = generateRandomGrid(width - 250, height - 250);

  //instantiate the the new player
  newPlayer = new snake (0, 0, 0, 0);
}
function mapTiles(){
  //const shapeAngles = [45, 60, 72, 36,];
  //const randomIndex = Math.floor(Math.random() * shapeAngles.length);
  //const shapeType = shapeAngles[randomIndex];
}
function draw() {
  background(220);
  showGrid();
}
function showGrid() {
  for (let y = 0; y < SQUARE_DIMENSIONS; y++) {
    for (let x = 0; x < SQUARE_DIMENSIONS; x++) {
      if (theGrid[y][x] === 1) {
        fill("black");
      }
      else if (theGrid[y][x] === 0) {
        fill("white");
      }
      square(x * cellSize, y * cellSize, cellSize);
      
    }
  }
}
function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        newGrid[y].push(0);
      }
      else {
        newGrid[y].push(1);
      }
    }
  }
  return newGrid;
}

function drawGrid(){
  for (let x = 0; x < GRIDWIDTH; x++){
    for(let y = 0; y < GRIDHEIGHT; y ++){
      if (grid[y][x] === 0){
        fill("black");
      }
      square(x* cellSize, y * cellSize, GRIDWIDTH, GRIDHEIGHT, 15, 10, 5);
    }
  }
}
