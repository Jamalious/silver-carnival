// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const CELL_SIZE = 50;
const IMPASSABLE = 1;
const OPEN_TILE = 0;
const PLAYER = 9;
let grid;
let rows;
let cols;
let thePlayer = {
  x: 0,
  y: 0,
};

function setup() {
  createCanvas(windowWidth * 0.9, windowHeight * 0.9);
  cols = Math.floor(width/CELL_SIZE);
  rows = Math.floor(height/CELL_SIZE);
  grid = generateRandomGrid(cols, rows);
  grid[thePlayer.y][thePlayer.x];
}

function draw() {
  background("green");
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < rows; y ++){
    for (let x = 0; x < cols; x++){
      if(grid[y][x] === OPEN_TILE){
        fill("white");
      }
      else if (grid[y][x] === IMPASSABLE) {
        fill("black");
      }
      else if (grid[y][x] === PLAYER){
        fill("yellow");
      }
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

function keyPressed(){
  if (key === "r"){
    grid = generateRandomGrid(cols, rows);
  }
  else if (key === "e"){
    grid = generateEmptyGrid(cols, rows);
  }
  else if (key === "w" ){
    movePlayer(thePlayer.x, thePlayer.y - 1);
  }
  else if(key ==="d") {
    movePlayer(thePlayer.x + 1, thePlayer.y);
  }
  else if (key === "a") {
    movePlayer(thePlayer.x -1, thePlayer.y);
  }
  else if (key === "s"){
    movePlayer(thePlayer.x, thePlayer + 1);
  }
}

function movePlayer(x, y){
  if (x >= 0 && x < cols && y >= 0 && y < rows && grid[y][x] === OPEN_TILE){
    //previous position
    let oldx = thePlayer.x;
    let oldy = thePlayer.y;
  
    //moving the player location
    thePlayer.x = x;
    thePlayer.y = y;
  
    //put player on grid
    grid[thePlayer.y][thePlayer.x] = PLAYER;
    
    //reset old spot
    grid[oldx][oldy] = OPEN_TILE;
  }
}
function mousePressed() {
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);
  toggleCell(x, y);

}
function toggleCell(x, y){
  if (x >= 0 && x < cols && y >= 0 && y <rows){


    if(grid[y][x] === OPEN_TILE){
      grid[y][x] = IMPASSABLE;
    }
    else if(grid[y][x] === IMPASSABLE){
      grid[y][x] = OPEN_TILE;
    }
  }
}

function generateRandomGrid(cols, rows){
  noStroke();
  let newGrid = [];
  for(let y = 0; y < rows; y++){
    newGrid.push([]);
    for (let x = 0; x < cols; x++){
      if (random(100) < 50){
        newGrid[y].push(OPEN_TILE);
      }
      else {
        newGrid[y].push(IMPASSABLE);
      } 
    }

  }
  return newGrid;
}
function generateEmptyGrid(cols, rows){
  let newGrid = [];
  for(let y = 0; y < rows; y++){
    newGrid.push([]);
    for (let x = 0; x < cols; x++){
      newGrid[y].push(OPEN_TILE);
    }  
  }
  return newGrid;
}