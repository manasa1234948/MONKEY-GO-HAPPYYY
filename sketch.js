
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0,survivalTime=0;

function preload(){
  
  var survivalTime=0;
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,800);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation('moving',monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)

  
  banana=createSprite(200,150,10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  
 obstacle=createSprite(200,320,10,10);
 obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;

  
}


function draw() {

  background('white')
  stroke('white');
  textSize(20);
  fill('white');
  text('Score:'+score,500,50);
  
  stroke('black');
textSize(20);
fill('black');
survivalTime=Math.ceil(frameCount/frameRate())
text('Survival TTime:'+survivalTime,50,50);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
 
  if(keyDown("space")&&monkey.y>50){                              
    monkey.velocityY = -10;
  }
    
  monkey.velocityY = monkey.velocityY + 0.5;

 monkey.collide(ground)
  

drawSprites();
}






