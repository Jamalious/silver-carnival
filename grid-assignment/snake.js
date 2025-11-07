let homeScreen;
let cols;
let rows;
let SNAKE;
let gameState = "home";
let r, g, b = random(255);

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
  const p1 = guests.find((p) => p.role === "snake1");
  const p2 = guests.find((p) => p.role === "snake2");
  const p3 = guests.find((p) => p.role === "snake3");
  const p4 = guests.find((p) => p.role === "snake4");
  const p5 = guests.find((p) => p.role === "snake5");
  const p6 = guests.find((p) => p.role === "snake6");
  const p7 = guests.find((p) => p.role === "snake7");
  const p8 = guests.find((p) => p.role === "snake8");
  const p9 = guests.find((p) => p.role === "snake9");
  const p10 = guests.find((p) => p.role === "snake10");
  if (!guests.find((p)) => p.role === "player1"){
    
  }
  
}
function drawPlayer(){
  if (p1){
    fill(r, g, b);
    rect( x * cellSize, y * cellSize, cellSize);
  }
  if (p2){
    fill(r, g, b);
    
    rect( x * cellSize, y * cellSize, cellSize);
  }
  if (p3){
    fill(r, g, b);
    rect( x * cellSize, y * cellSize, cellSize);
  }
  if (p4){
    fill(r, g, b);
    rect( x * cellSize, y * cellSize, cellSize);
  }
  if (p5){
    fill(r, g, b);
    rect( random(), y * cellSize, cellSize);
  }
  if (p6){
    fill(r, g, b);
    rect( x * cellSize, y * cellSize, cellSize);
  }
  if (p7){
    fill(r, g, b);
    rect( x * cellSize, y * cellSize, cellSize);
  }
  if (p8){
    fill(r, g, b);
    rect( x * cellSize, y * cellSize, cellSize);
  }
  if (p9){
    fill(r, g, b);
    rect( x * cellSize, y * cellSize, cellSize);
  }
  if (p10){
    fill(r, g, b);
    rect( x * cellSize, y * cellSize, cellSize);
  }
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


function keypressed(){
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