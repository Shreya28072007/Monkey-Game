
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var ground;
var survivalTime = 0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400,400);
  monkey = createSprite(80,330,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
    ground = createSprite(200,350,800,10);
    ground.velocityX = -7;
    ground.x = ground.width /2;
  
  //creating groups
  FoodGroup = createGroup() ; 
  obstacleGroup = createGroup();
}


function draw() {
background("white");

  //creating moving ground
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space") && monkey.y>150){
    monkey.velocityY = -12;
  }
  //giving gravity
  monkey.velocityY = monkey.velocityY+0.8;
  
   if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    score = score+1;
  }
  
  
 text(mouseX+","+mouseY, mouseX,mouseY);
  food();
  obstacles();
  
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time : "+survivalTime,100,50);
  
  text("Score:"+score,300,20);
  
 
 
  monkey.collide(ground);
  drawSprites(); 
}

function food(){
  if(frameCount % 80===0){
    banana = createSprite(400,100,10,10);
    banana.y = Math.round(random(100,200));
    banana.addImage("yummy",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 200;
    FoodGroup.add(banana);
  }
}

function obstacles(){
 if(frameCount % 200 === 0){
  obstacle = createSprite(400,330,10,10);
  obstacle.addImage("hit",obstacleImage);
   obstacle.scale = 0.15;
   obstacle.velocityX = -5;
   obstacle.lifetime = 200;
   obstacleGroup.add(obstacle);
 }
}





