// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

GRIDWIDTH , GRIDHEIGHT = 10;
let cellSize;
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width < height) {
    cellSize = width/SQUARE_DIMENSIONS;
  }
  else {
    cellSize = height/SQUARE_DIMENSIONS;
  }
  grid = generateRandomGrid(GRIDWIDTH, GRIDHEIGHT);
}

function draw() {
  background(220);
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
function drawPentagons(){}


function drawGrid(){
  for (let x = 0; x < GRIDWIDTH; x++){
    for(let y = 0; y < GRIDHEIGHT; y ++){
      if (grid[y][x] === 0){
        fill("black");
      }
      square(x* cellSize, y * cellSize, GRIDTHWIDTH, GRIDHEIGHT);
    }
  }

}