let homeScreen;
let cols;
let rows;
let SNAKE;
let gameState = "home";
let r, g, b = 255;
const PLAYER_SPAWN_X = 0;
const PLAYER_SPAWN_Y = 0;

let firstPlayer = {
  x: PLAYER_SPAWN_X + 10,
  y: PLAYER_SPAWN_Y + 10,
  dx: 0,
  dy: 3,
  color: "Green"
};
let secondPlayer = {
  x: PLAYER_SPAWN_X + 75,
  y: PLAYER_SPAWN_Y + 75,
  dx: 0,
  dy: 3,
  color: "Blue"
};
let thirdPlayer = {
  x: PLAYER_SPAWN_X + 150,
  y: PLAYER_SPAWN_Y + 150,
  dx: 0,
  dy: 3, 
  color: "Orange",
};
let fourthPlayer = {
  x: PLAYER_SPAWN_X + 225,
  y: PLAYER_SPAWN_Y + 225,
  dx: 0,
  dy: 3,
  color: "Black",
};

let fifthPlayer = {
  x: PLAYER_SPAWN_X + 300,
  y: PLAYER_SPAWN_Y + 300,
  dx: 0,
  dy: 3,
  color: "Grey",
};
let sixthPlayer = {
  x: PLAYER_SPAWN_X + 375,
  y: PLAYER_SPAWN_Y + 375,
  dx: 0,
  dy: 3, 
  color: "Yellow",
};
let seventhPlayer = {
  x: PLAYER_SPAWN_X + 450,
  y: PLAYER_SPAWN_Y + 450,
  dx: 0,
  dy: 3,
  color: "Purple",
};
let eightPlayer = {
  x: PLAYER_SPAWN_X + 525,
  y: PLAYER_SPAWN_Y + 525,
  dx: 0,
  dy: 3,
  color: "Red",
};
let ninthPlayer = {
  x: PLAYER_SPAWN_X + 600,
  y: PLAYER_SPAWN_Y + 600,
  dx: 0,
  dy: 3,
  color: "Pink",
};
let tenthPlayer = {
  x: PLAYER_SPAWN_X + 675,
  y: PLAYER_SPAWN_Y + 675,
  dx: 0,
  dy: 3,
  color: "Cyan"
};
class snake {
  constructor (x, y, dx, dy){
    this.x = x;
    this.y =  y;
    this.dx = dx;
    this.dy = dy;
    this.isAlive = false;
  }
  
}
function assignPlayer(){
  if (!guests.find((p) => p.role === "player1")){
    
    const sp = guests.find((p) => p.role === "somePlayer");
    if (sp === me) {
      sp.role = "player1";
      console.log("Player1 found!");
    }
  }
  if (!guests.find((p) => p.role === "player2")){
    const sp = guests.find((p) => p.role === "somePlayer");
    if (sp === me) {
      sp.role = "player2";
      console.log("Player2 found!");
    }
  }
  if (!guests.find((p) => p.role === "player3")){
    const sp = guests.find((p) => p.role === "somePlayer");
    if (sp === me) {
      sp.role = "player3";
    }
  }
  if (!guests.find((p) => p.role === "player4")){
    const sp = guests.find((p) => p.role === "somePlayer");
    if (sp === me) {
      sp.role = "player4";
    }
  }
  if (!guests.find((p) => p.role === "player5")){
    const sp = guests.find((p) => p.role === "somePlayer");
    if (sp === me) {
      sp.role = "player5";
    }
  }
  if (!guests.find((p) => p.role === "player6")){
    const sp = guests.find((p) => p.role === "somePlayer");
    if (sp === me) {
      sp.role = "player6";
    }
  }
  if (!guests.find((p) => p.role === "player7")){
    const sp = guests.find((p) => p.role === "somePlayer");
    if (sp === me) {
      sp.role = "player7";
    }
  }
  if (!guests.find((p) => p.role === "player8")){
    const sp = guests.find((p) => p.role === "somePlayer");
    if (sp === me) {
      sp.role = "player8";
    }
  }
  if (!guests.find((p) => p.role === "player9")){
    const sp = guests.find((p) => p.role === "somePlayer");
    if (sp === me) {
      sp.role = "player9";
    }
  }
  if (!guests.find((p) => p.role === "player10")){
    const sp = guests.find((p) => p.role === "somePlayer");
    if (sp === me) {
      sp.role = "player10";
    }
  }
  
}

function addPlayer(){
  const p1 = guests.find((p) => p.role === "player1");
  const p2 = guests.find((p) => p.role === "player2");
  const p3 = guests.find((p) => p.role === "player3");
  const p4 = guests.find((p) => p.role === "player4");
  const p5 = guests.find((p) => p.role === "player5");
  const p6 = guests.find((p) => p.role === "player6");
  const p7 = guests.find((p) => p.role === "player7");
  const p8 = guests.find((p) => p.role === "player8");
  const p9 = guests.find((p) => p.role === "player9");
  const p10 = guests.find((p) => p.role === "player10");
  if (p1){

    grid[firstPlayer.y][firstPlayer.x] = PLAYER1;
  }

  if (p2){
    grid[secondPlayer.y][secondPlayer] = PLAYER2;
  }

  if (p3){
    grid[thirdPlayer.y][thirdPlayer.x] = PLAYER3;
  }
  if (p4){
    grid[fourthPlayer.y][fourthPlayer.x] = PLAYER4;
  }
  if (p5){
    grid[fifthPlayer.y][fifthPlayer.x] = PLAYER5;
  }
  if (p6){
    grid[sixthPlayer.y][sixthPlayer.x] = PLAYER6;
  }
  if (p7){
    grid[seventhPlayer.y][seventhPlayer.x] = PLAYER7;
  }
  if (p8){
    grid[eightPlayer.y][eightPlayer.x] = PLAYER8;
  }
  if (p9){
    grid[ninthPlayer.y][ninthPlayer.x] = PLAYER9;
  }
  if (p10){
    grid[tenthPlayer.y][tenthPlayer.x] = PLAYER10;
  }
}

function drawAllPlayers(){
  for (let g of guests){
    if(!g){
      continue;
    }
  }
}
function drawPlayer(playerShape){
  if (!playerShape){
    return;
  }
  const px = playerShape.x * CELL_SIZE + CELL_SIZE /2;
  const py = playerShape.x * CELL-SIZE + CELL-SIZE /2;
}
function movePlayer(x, y, dx, dy){
  if (snake.this.isAlive){
    if (x >= 0 && x < cols && y >= 0 && y < rows && grid[y][x] === OPEN_TILE){
      //previous position
      let oldx = snake.this.x;
      let oldy = snake.this.y;
      
      //moving the player location
      snake.x = snake.x + snake.dx;
      snake.y = snake.y + snake.dy;
      
      //put player on grid
      grid[thePlayer.y][thePlayer.x] = SNAKE;
        
      //reset old spot
      grid[oldx][oldy] = OPEN_TILE;
    }
  }
}
function updatePlayerMovement(grid) {
  
  // stopping this from running once the player dies
  if (!me.alive){
    return;
  }
  if(frameCount - lastMoveFrame < FRAME_STEP){
    return;
  }
  lastMoveFrame = frameCount;
  let posx = me.x;
  let posy = me.y;
  if (me.direction === "up"){
    posy--;
  }
  if (me.direction === "down"){
    posy++;
  }
  if (me.direction === "left"){
    posx--;
  }
  if (me.direction === "right"){
    posx++;
  }
  //Checks for collisions with other player;s trials or territory
  if (collisionsWithGuests(posx, posy)) {
    me.alive = false;
    return;
  }

  //Movement
  me.x = posx;
  me.y = posy;
}

function collisionsWithGuests(posx, posy) {

  //checks for collission with own trail:
  if (containsCell(me.trail, posx, posy)) {
    return true;
  }
  for (let g of guests){
    if (!g){
      continue;
    }
    //If another player's trail is in this position, then that player dies
    if (containsCell(g.trail, posx, posy)) { 
      g.isAlive = false;
    }
  }
  return false;
}

//eliminating a player if they run into the edge or touch a line
function killPlayer (player) {
  if (get(player.x + player.dx, player.y - player.dy).toString() !== PASSABLE.toString()){
    
  }
}


