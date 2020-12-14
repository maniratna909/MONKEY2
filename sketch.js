var PLAY=1;
var END=0;
var gamestate= PLAY;
var monkey , monkey_running;
var banana,bananaImage, obstacleImg;
var bananaGroup, obstacleGroup, obstacle;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png","banana.png");
  obstacleImg = loadImage("obstacle.png");
 ban=loadImage=("banana.png");
}



function setup() {
  createCanvas(600,400);

  monkey= createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale= 0.1;
  
  ground= createSprite(400,350,900000,10);
  ground.velocityX= -4;
  

    
bananaGroup= new Group();
 obstacleGroup = new Group();
score = 0;
}


function draw() {
background("pink");
  fill("red") 
  text("Score: "+ score, 500,100,100,170);
   
  if(gamestate===PLAY){
    if(bananaGroup.isTouching(monkey)){
      score= score+2
      bananaGroup.destroyEach()
    
     }
     if (obstacleGroup.isTouching(monkey)){
   
       gamestate= END;
     }
  
  if (ground.x < 0){
      ground.x = ground.width/4;
    }
  
   if(keyDown("space")&& monkey.y >= 10) {
        monkey.velocityY = -12 ;
  
   }
  
   monkey.velocityY = monkey.velocityY + 0.8
  }
  if (gamestate ===END){
     obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    score= score=0;
       obstacleGroup.setLifetimeEach(-2);
       monkey.velocityY=0;
  }
  
 
  monkey.collide(ground);
  
  movingbanana();
  movingobstacle();
  drawSprites();
}

function movingbanana(){
// var  banana = createSprite(600,260,10,40);
  if(World.frameCount %180 === 0){
     
  var  banana = createSprite(600,Math.round(random(290,300)),10,40);
  banana.addImage(bananaImage);
  banana.scale= 0.1;
  banana.velocityX= -3;
     banana.lifetime = 230; 
    bananaGroup.add(banana)
} 
   
  
  

}
function movingobstacle(){
   if(World.frameCount %180 === 0){
     
  var  obstacle = createSprite(600,Math.round(random(340,340)),10,40);
  obstacle.addImage(obstacleImg);
  obstacle.scale= 0.1;
 obstacle.velocityX= -4 ;
     obstacle.lifetime = 230; 
    obstacleGroup.add(obstacle);
} 
     
}
