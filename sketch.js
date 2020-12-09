const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var tree1, g1, boy1, stone1, slingshot1;
var treeImg , boyImg , backgImg;

function preload(){
  treeImg=loadImage("tree.png");
  boyImg=loadImage("boy.png");    
  backgImg = loadImage("background.jpg")
}

function setup() {
  createCanvas(2304,1005);
  engine = Engine.create();
  world = engine.world;

  g1 = new ground(width/2,height-30,width,30);

  tree =createSprite(1800,510,500,700)
  tree.addImage(treeImg);
  tree.scale = 0.76
  boy1=createSprite(500,835,400,600);
  boy1.addImage(boyImg);
  boy1.scale = 0.2;


  box1 = new box(1750,420,100,100);
  box2 = new box(1750,250,130,130);
  box3 = new box(1900,300,70,70);   
  box4 = new box(2000,400,120,120);
  box5 = new box(1960,200,80,80);
  box6 = new box(2050,280,100,100);
  box7 = new box(1600,400,130,130);
  box8 = new box(1580,300,70,70);
  box9 = new box(1870,100,100,100);
  box10 = new box(1700,150,100,100);

  //tree1 = new tree(1800,505,800,1000);

  //boy1 = new boy(500,830,400,600);

  stone1 = new stone(400,700,100,100);

  slingShot1 = new slingshot(stone1.body,{x:395,y:710});  

 
}



function draw() {
  background(backgImg);

  drawSprites();

  Engine.update(engine);
 
  g1.display();
  //tree1.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();       
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

 //boy1.display();
  slingShot1.display();  
  stone1.display();
  
  detectCollision(stone1,box1);
  detectCollision(stone1,box2);
  detectCollision(stone1,box3);
  detectCollision(stone1,box4);   
  detectCollision(stone1,box5);
  detectCollision(stone1,box6);
  detectCollision(stone1,box7);
  detectCollision(stone1,box8);
  detectCollision(stone1,box9);
  detectCollision(stone1,box10);

  

}

function mouseDragged(){
	Matter.Body.setPosition (stone1.body,{x:mouseX,y:mouseY})
    

}

function mouseReleased(){
slingShot1.fly ();
}

function keyPressed(){
  if(keyCode == 32){
    slingshot1.attach(stone1.body);
  }
}


function detectCollision(l,m)
{
      var distance=dist(l.body.position.x,  l.body.position.y,  m.body.position.x,  m.body.position.y)
      if(distance<=l.width/2+m.width/2||distance<l.height/2+m.width/2)
      {
        Matter.Body.setStatic(m.body,false)
      }
}

