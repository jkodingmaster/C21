
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundobject
var left
var right

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	groundobject=new ground(800,680,1600,20);
	left=new ground(1100,600,20,20,120
	right=new ground(1350,600,20,120))
	engine = Engine.create();
	world = engine.world;
	var ball_options = {
		isStatic: false, 
		resitution: 0.95,
		density: 1.2
	}

	

	//Create the Bodies Here.
	ball=Bodies.circle(260,100,20,ball_options);
	World.add(world,ball);
	ellipse(RADIUS)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
 ellipse(ball.position.x,ball.position.y,20,20);
 groundobject.show
 left.show
 right.show
}



