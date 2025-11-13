// Paper.Io beta
// John Asiamah
// 11/12/2025
//
// Extra for Experts:
// - Implemented p5.party multiplayer
// - Used concanate function to join strings
const CELL_SIZE = 50;
const OPEN_TILE = 0;
const TRAIL = 1000;
const TERRITORY = 2000;

// increase/decreasing movement speed between tiles
const GRIDWIDTH = 40;
const GRIDHEIGHT = 40;
let grid;
let me, guests, shared;
let cols, rows;

//Multiplayer Setup
function preload() {
  partyConnect("wss://deepstream-server-1.herokuapp.com","grid.io");
  shared = partyLoadShared("shared");
  guests = partyLoadGuestShareds();
  me = partyLoadMyShared({
    id: Math.floor(Math.random() * 1000000),
    color: [Math.floor(random(20, 255)), Math.floor(random(20, 255)), Math.floor(random(20, 255))],
    y: Math.floor(random(GRIDWIDTH)),
    x: Math.floor(random(GRIDHEIGHT)),
    direction: "right",
    alive: true,
    trail: [],
    territory: [],
    
  });
}

function setup() {
  createCanvas(1000, 1000);
  frameRate(30);
  stroke(15);
  cols = Math.floor(width/ CELL_SIZE);
  rows = Math.floor(height / CELL_SIZE);
  grid = createGrid(cols, rows); 

  //Initialize the grid once if there's a host
  if (partyIsHost()) {
    partySetShared(shared, { grit: createGrid(cols, rows)});
  }
  playerBase(me);
}

//setting up the grid
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
//giving the player a plot of territory 
function playerBase(player) {

  // stops the player from going outside the grid
  let baseX = constrain(player.x, 1, GRIDWIDTH - 2);
  let baseY = constrain(player.y, 1, GRIDHEIGHT - 2);
  for (let someY = -1; someY <= 1; someY++) {
    for(let someX = -1; someX <= 1; someX++) {
      grid[baseX + someY][baseY + someX] = TERRITORY + player.id;
      player.territory.push({x: baseX + someX, y: baseY + someY});
    }
  }
}

//Storing direction for continous player movement
function keyPressed(){

  //stopping the player from moving if they are dead
  if (!me. alive){
    return;
  }
  if (key === "w" && me.direction !== "down"){
    me.direction = "up";
  }
  if (key === "s" && me.direction !== "up"){
    me.direction = "down";
  }
  if (key === "a" && me.direction !== "right") {
    me.direction = "left";
  }
  if (key ==="d" && me.direction !== "left") {
    me.direction = "right";
  }
}

function draw() {
  background(255);
  if(partyIsHost()){
    shared.grid = grid;
  }
  if(me.alive){
    movePlayer(me);
  }
  displayGrid();
  drawAllPlayers();
  trailCollisions();
  
}

function movePlayer(player) {
  //used to control speed of player movement
  if (frameCount % 3 !== 0){
    return;
  }

  let newX = player.x;
  let newY = player.y;
  if (player.direction === "up"){
    newY--;
  }
  if (player.direction === "down"){
    newY++;
  }
  if (player.direction === "left"){
    newX--;
  }
  if (player.direction === "right"){
    newX++;
  }
  //Making sure the player stays within the canvas boundaries
  if(newX < 0 ||newY < 0 || newX >= cols|| newY >= rows){
    return;
  }
  //storing player position
  const cell = shared.grid[newY][newX];

  //if the player steps on their own trail, they die
  if(cell === TRAIL + player.id) {
    player.alive = false;
    return;
  }
  //If the player steps on another player's open trial, then that player will die
  for (let g of guests.concat([me])) {
    if(g.trail && g.trail.some(t => t.x === newX && t.y === newY)) {
      g.alive = false;
    }
  }
  //Creates a player trail when the player is outside of their territory
  const insideOwnTerritory = cell === TERRITORY + player.id;
  if(!insideOwnTerritory) {
    shared.grid[player.y][player.x] = TRAIL + player.id;
    player.trail.push({x: player.x, y: player.y });
  }
  //moving the player
  player.x = newX;
  player.y = newY;

  //checking if the player is re-entering their territory 
  if(insideOwnTerritory && player.trail.length > 0) {
    claimTerritory(player);
  }
  //Finding the player position
  shared.grid[player.y][player.x] = TERRITORY + player.id;
}
//Claim area after player creates a closed loop with their territory
function claimTerritory(player){
  for (let t of player.trail) {
    shared.grid[t.y][t.x] = TERRITORY + player.id;
    player.territory.push({x: t.x, y: t.y});
  }
  //resets the players trail
  player.trail = [];
}
function trailCollisions() {
  for (let g of guests) {
    if(!g.alive) {
      continue;
    }
    // Checks if a guest has touched another person's trail
    for (let other of guests.concat([me])) {
      if (other.id === g. id || ! other.alive) {
        continue;
      }
      for (let t of other.trail) {
        if (g.x === t.x && g.y === t.y) {
          other.alive = false;
        }
      }
    }
  }
}
function displayGrid() {
  for (let y = 0; y < rows; y ++){
    for(let x = 0; x < cols; x ++){
      const gridPoint = grid[y][x];

      if (gridPoint === OPEN_TILE) {
        fill("white");
      }
      //changing each cell based on it's assigned role
      else if ( gridPoint >= TERRITORY) {
        const ownerId = gridPoint - TERRITORY;
        const owner = assignPlayerId(ownerId);
        if (owner) {
          push();
          noStroke();
          fill(owner.color[0], owner.color[1], owner.color[2], 180);
          square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
          pop();
        }
      }
      else if (gridPoint >= TRAIL) {
        const ownerId = gridPoint - TRAIL;
        const owner = assignPlayerId(ownerId);
        if (owner) {
          push();
          noStroke();
          fill(owner.color[0], owner.color[1], owner.color[2], 100);
          square(x* CELL_SIZE, y* CELL_SIZE, CELL_SIZE);
          pop();
        }
      }
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }  
  }
}
//Drawing player positions
function drawAllPlayers(){
  drawPlayer(me);
  for (let g of guests){
    drawPlayer(g);
  }
}
// drawing individual players
function drawPlayer(p){
  if(!p.alive){
    return;
  }
  fill(p.color);
  square(p.x * CELL_SIZE, p.y * CELL_SIZE, CELL_SIZE, 5);
}
//Giving each player an id
function assignPlayerId(id){
  if (me.id === id){
    return me;
  }
  for (let g of guests){
    if (g.id === id){
      return g;
    }
  }
  return null;
}

