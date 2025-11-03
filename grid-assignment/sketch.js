// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let GRIDWIDTH , GRIDHEIGHT = 10;
let cellSize;
let grid;
let TOP_RADIUS = 10;
let BOTTOM_RIGHT_RADIUS = 10;
let BOTTOM_LEFT_RADIUS = 10;



let gridShape =  {
  x: GRIDWIDTH,
  y: GRIDHEIGHT,
  radius: cellSize,
  angle: shapeType,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  if (width < height) {
    cellSize = width/SQUARE_DIMENSIONS;
  }
  else {
    cellSize = height/SQUARE_DIMENSIONS;
  }
  grid = generateRandomGrid(GRIDWIDTH, GRIDHEIGHT);
}
function mapTiles(){
  const shapeAngles = [45, 60, 72, 36,];
  const randomIndex = Math.floor(Math.random() * shapeAngles.length);
  const shapeType = shapeAngles[randomIndex];

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
      square(x* cellSize, y * cellSize, GRIDTHWIDTH, GRIDHEIGHT, 15, 10, 5);
    }
  }

}