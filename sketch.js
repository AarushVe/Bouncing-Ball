const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

var ball;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true 
  }
  object = Bodies.rectangle(400.00000000, 390, 800, 10, options);
  World.add(world, object);

  var ballOpts = {
    restitution: 1
  }
  ball = Bodies.circle(400, 100, 5, ballOpts);
  World.add(world, ball);

  console.log(object);
}

function draw() {
  background(138, 148, 368);  
  Engine.update(engine);
  drawSprites();
  rectMode(CENTER);
  ellipseMode(RADIUS);-
  ellipse(ball.position.x, ball.position.y, 5, 5);
  rect(object.position.x, object.position.y, 800, 10);
  
}

