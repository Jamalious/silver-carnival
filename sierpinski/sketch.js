// Recursion Visual Demo

let initTriangle = [
  {x: 800, y: 50},{x: 50, y: 1000}, {x: 1550, y:1000}
];

let theDepth = 0;
let theColors = ["blue","pink", "cyan", "green", "purple", "red", "yellow", "orange", "brown", "gray", "lightblue", "violet", "magenta", "coral"];
function setup() {
  createCanvas(windowWidth, windowHeight);
  sierpinski(initTriangle, theDepth);
}

function draw() {
}

function mousePressed(){
  if (theDepth < 10 ){
    theDepth++;
    background("white");
    sierpinski(initTriangle, theDepth);
  }

};

function sierpinski(points, depth){
  fill(theColors[depth]);
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);

  //top triangle


  if (depth > 0) {
    sierpinski([points[0],
      midpoint(points[0], points[1]),
      midpoint(points[0], points[2])], depth - 1);

    sierpinski([points[1],
      midpoint(points[0], points[1]),
      midpoint(points[1], points[2])], depth - 1);
    
    sierpinski([points[2],
      midpoint(points[0], points[2]),
      midpoint(points[1], points[2])], depth - 1);
  }
  
}

function midpoint(point1, point2){
  let midx = (point1.x + point2.x ) / 2;
  let midy = (point1.y + point2.y ) / 2;
  return {x: midx, y: midy};
}