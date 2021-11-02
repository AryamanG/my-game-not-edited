var bg,bgImg;
var player, shooterImg, shooter_shooting, bullet, bulletImg, explosionImg;
var zombie,zombieImg;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg = loadImage("assets/zombie.png")
  bgImg = loadImage("assets/bg.jpeg")
  bulletImg = loadImage("assets/bullet.png")
  explosionImg = loadImage("assets/kaboom.png")


}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
bulletGroup = new Group();
zombieGroup = new Group();
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
  shoot();

 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
bulletGroup.collide(zombieGroup,explosion);

function explosion(spriteA,spriteB){
  spriteA.destroy();
  spriteB.destroy();
  


}


create_zombie();
drawSprites();

}

function create_zombie(){
  if (World.frameCount % 60 === 0){
    zombies = createSprite(width,height-50,50);
    zombies.velocityX = -5;
    zombies.addImage(zombieImg);
    zombies.scale = 0.2;
    zombies.y = random(height-500,height-100);
  }
  

}

function shoot(){
  bullet = createSprite(player.x,player.y-25);
  bullet.addImage(bulletImg);
  bullet.velocityX = 10;
  bullet.scale = 0.1;
  bulletGroup.add(bullet);
  

}


