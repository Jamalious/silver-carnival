let homeScreen;
let cols;
let rows;
let SNAKE;
let gameState = "home";

class snake {
  constructor (x, y, dx, dy){
    this.x = x;
    this.y =  y;
    this.dx = dx;
    this.dy = dy;
    this.isAlive = false;
  }

}
// 
function drawPlayer(){
  const p1 = guests.find((p) => p.role === "snake1");
  const p2 = guests.find((p) => p.role === "snake2");
  const p3 = guests.find((p) => p.role === "snake3");
  const p4 = guests.find((p) => p.role === "snake4");
  const p5 = guests.find((p) => p.role === "snake5");
  const p6 = guests.find((p) => p.role === "snake6");
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