const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var ball,bin,ground;
var binImg;
function preload()
{
	//binImg=loadImage("dusbingreen.png")
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(700,550,1400,20);
	ball = new Paper(150,300);
	bin = new Bin(1000,420);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(1000);
  Engine.update(engine);
  ground.display();
  ball.display();
  bin.display();
   drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:20,y:-20});
	}
  
  }














































