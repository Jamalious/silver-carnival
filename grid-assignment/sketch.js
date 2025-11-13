// Project Title
// John Asiamah
// 11/12/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
const CELL_SIZE = 50;
const IMPASSABLE = 1;
const OPEN_TILE = 0;

// increase/decreasing movement speed between tiles
const FRAME_STEP = 8;

//const PLAYER1 = 9;
//const PLAYER2 = 9;
//const PLAYER3 = 9;
//const PLAYER4 = 9;
//const PLAYER5 = 9;
//const PLAYER6 = 9;
//const PLAYER7 = 9;
//const PLAYER8 = 9;
//const PLAYER9 = 9;
//const PLAYER10 = 9;

let GRIDWIDTH,GRIDHEIGHT = 10;
let cellSize;
let grid;
let displayWorld;
let TOP_RADIUS = 10;
let shared, guests, me;
let BOTTOM_RIGHT_RADIUS = 10;
let BOTTOM_LEFT_RADIUS = 10;
let cols, rows;
let direction = 'left';

function preload(){
  partyConnect("wss://deepstream-server-1.herokuapp.com","grid.io");
  shared = partyLoadShared("shared");
  guests = partyLoadGuestShareds();
  me = partyLoadMyShared({
    role: "somePlayer",
    y: 0,
    x: 0, 
    id: Math.floor(Math.random() * 1000000),
    direction: "left",
    isAlive: true,
    playerTrail: [],
    territory: [],
    name: "player" + Math.floor(random(100)),
    color: [random(50, 255), random(50, 255), random(50, 255)],
  });
}

function setup() {
  createCanvas(3000, 3000);
  frameRate(60);
  stroke(15);
  grid = createGrid(cols, rows); 
  cols = Math.floor(width/ CELL_SIZE);
  rows = Math.floor(height / CELL_SIZE);

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
  const grid = createGrid(cols, rows);
  playerData(grid, me, true);
  displayGrid(grid);
  for (let g of guests) {
    if (!g || !g.territory){
      continue;
    }
  }
  updatePlayerMovement(grid);
  drawAllPlayers();
}

//Storing direction for continous player movement
function keyPressed(){
  
  //stopping the player from moving if they are dead
  if (!me. alive){
    return;
  }
  if (key === "w" && me. direction !== "down"){
    me.direction = 'up';
  }
  else if(key ==="d" && me.direction !== "left") {
    me.direction = "right";
  }
  else if (key === "a" && me.direction !== "right") {
    me.direction = "left";
  }
  else if (key === "s" && me.direction !== "up"){
    me.direction = "down";
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

function playerData(){
  
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
function displayGrid(grid) {
  for (let y = 0; y < rows; y ++){
    for(let x = 0; x < cols; x ++){
      const gridPoint = grid[y][x];

      if (gridPoint === OPEN_TILE) {
        fill("white");
        square(x* CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
      }
      else if ( gridPoint < 0) {
        const ownerId = -gridPoint;
        const owner = assignPlayerId(ownerId);
        if (owner) {
          push();
          noStroke();
          fill(owner.color[0], owner.color[1], owner.color[2], 180);
          square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
          pop();
        }
        else {
          fill(120);
          square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
        }
      }
      else if (gridPoint > 0) {
        const owner = assignPlayerId(gridPoint);
        if (owner) {
          push();
          noStroke();
          fill(owner.color[0], owner.color[1], owner.color[2], 90);
          square(x* CELL_SIZE, y* CELL_SIZE, CELL_SIZE);
          pop();
        }
        else {
          fill(200);
          square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
        }
      }
    }  
  }
}


