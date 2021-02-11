
var engine, world, ground, ball;
function setup() {
  createCanvas(800,400);
  
  // 1. create object/instance = Class(Engine)
  engine = Matter.Engine.create();

  //2. create instance of World to add bodies in them
  world = engine.world;

  //3. alias createSprite
  // options(JSON {'key': value}) is used to override the default properties of physics engine body
  var options = 
  {
    //'isStatic': default false --> gravity, if override/change : no gravity
    'isStatic': true
  }
  ground = Matter.Bodies.rectangle(0, 250, 800, 20,options);

  //4. 
  Matter.World.add(world, ground);

  var ball_options = 
  {
    'restitution': 1, //colision --> dependent on friction, collision, density (what amount of collision would happen).
    'density': 0.5,
    'friction': 1
  }
  ball = Matter.Bodies.circle(200, 100, 50, ball_options);

  //4. 
  Matter.World.add(world, ball);
  
  console.log(ball); //ground --> obejct and has all properties as output in console.

}

function draw() {
  background(255,255,255);  

  //5. update the world
  Matter.Engine.update(engine);

  rectMode(CENTER);
  rect (ground.position.x, ground.position.y, 800, 20);

  ellipseMode(RADIUS); //makes the x and y positions the center of the body.
  ellipse(ball.position.x, ball.position.y, 50, 50); // has two centers --> ellipse
  
}