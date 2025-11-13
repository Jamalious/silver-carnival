let homeScreen;
let SNAKE;
let gameState = "home";
let r, g, b = 255;
const PLAYER_SPAWN_X = 0;
const PLAYER_SPAWN_Y = 0;

function drawAllPlayers(){
  for (let g of guests){
    if(!g){
      continue;
    }
    drawPlayer(g);
  }
}
function drawPlayer(thePlayer){
  if (!thePlayer){
    return;
  }
  const px = thePlayer.x * CELL_SIZE + CELL_SIZE /2;
  const py = thePlayer.x * CELL_SIZE + CELL_SIZE /2;
  push();
  noStroke();
  if (thePlayer.alive) {
    fill(thePlayer.color[0], thePlayer.color[1], thePlayer.color[2]);
  }
  else {
    //player becomes black after dying
    fill(30);
  }
  ellipse(px, py, CELL_SIZE* 0.9, CELL_SIZE * 0.9);
  pop();
}

function playerWithinBoundary(x, y){
  return x >= 0 && x < cols && y >= 0 && y < rows;
}
function containsCell(list, x, y) {
  if (!list){
    return false;
  }
  if (!list){
    return false;
  }
  for(let n of list){
    if(n.x === x && n.y === y){
      return true;
    }
  }
  return false;
}

function assignPlayerId(id){
  if (me && me.id === id){
    return me;
  }
  for (let g of guests){
    if (g && g.id === id){
      return g;
    }
  }
  return null;
}
function theCells(list){

}

function updatePlayerMovement() {
  
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


