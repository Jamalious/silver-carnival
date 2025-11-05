let homeScreen;
let cols;
let rows;
let SNAKE;


class snake {
  constructor (x, y, dx, dy){
    this.x = x;
    this.y =  y;
    this.dx = dx;
    this.dy = dy;
    this.isAlive = false;
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