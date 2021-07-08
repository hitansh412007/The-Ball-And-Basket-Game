
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() 
{
	createCanvas(1366, 663);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,	
		restitution:0.3,
		friction:0,
		density:1.2		
	}

	ball = Bodies.circle(100,200,35,ball_options);
    World.add(world,ball);

	var groundObj_options={
		isStatic:true		
	}

	groundObj = Bodies.rectangle(width/2,670,width,20,groundObj_options);
	World.add(world,groundObj);

	var leftSide_options={
		isStatic:true
	}

	leftSide = Bodies.rectangle(1000,575,20,140,leftSide_options);
	World.add(world,leftSide);

	var rightSide_options={
		isStatic:true
	}

	rightSide = Bodies.rectangle(1200,575,20,140,rightSide_options);
	World.add(world,rightSide);

	Engine.run(engine);
	
  
}


function draw() 
{

  background(0);
  rectMode(CENTER);

  ellipse(ball.position.x,ball.position.y,35);
  rect(groundObj.position.x,655,width,20);
  rect(1000,575,20,140);
  rect(1200,575,20,140);

}

function keyReleased()
{

	if(keyCode===UP_ARROW)
	{
	  Matter.Body.setVelocity(ball, { x:15, y: -20});
	  console.log("hello");
	}

}