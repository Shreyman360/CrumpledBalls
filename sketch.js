const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,dustbin1,dustbin2,dustbin3,paper;
var Img1, Img2;


function preload() {

  Img1 = loadImage("Paper.png");
  Img2 = loadImage("Dustbin.png");  

}

function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
	world = engine.world;

  
  ground= new Ground(600,390,1200,10);



  paper= new Paper(200,335,30);
  dustbin1= new Dustbin(950,310,10,35);
  dustbin2= new Dustbin(1030,310,10,35);
  


  
  
}

function draw() {
  background(345);
  Engine.update(engine);

  ground.display();

  paper.display();
  dustbin1.display();
  dustbin2.display();
 
  
 
    


drawSprites();  
}

function keyPressed() {

if(keyCode === UP_ARROW) {

Matter.Body.applyForce(paper.body,paper.body.position,{x:170,y:-170});

}

}
