// OOP Inheritance
// John Asiamah
// 11/19/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mickey;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //mickey = new Vehicle("SSC", "car");
  mickey = new Car("Kona");
  console.log(mickey.getName());
  console.log(mickey.getType());
}

function draw() {
  background(220);
}


class Vehicle {
  constructor(name, type){
    this.name = name;
    this.type = type;

  }
  display(){
    
  }
  getName(){
    return this.name;
  }
  getType(){
    return this.type;
  }
}

class Car extends Vehicle {
  constructor(name){
    super(name, "car");

  }
  getName(){
    return "this is a car called " + super.getName();
  }
}
