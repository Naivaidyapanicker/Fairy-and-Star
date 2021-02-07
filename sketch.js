var fairy,fairyImage;
var star,starImage;
var bg,bgImage;
var music;
var bor1;
function preload(){
   //preload the images here
fairyImage=loadImage("fairyImage1.png");
starImage=loadImage("star.png");
bgImage=loadImage("starNight.png");
music=loadSound("JoyMusic.mp3");

}

function setup() {
  createCanvas(800, 750);
  
  bg=createSprite(0,0,800,750);
  bg.addImage("background",bgImage);
  bg.scale = 1;
  
 fairy=createSprite(125,600,20,20);
 fairy.addImage("fairyImg1",fairyImage);
 fairy.scale = 0.2;

 star=createSprite(700,35,10,10);
 star.addImage("sarImg1",starImage);
 star.scale = 0.3;

 bor1 = createSprite(750,375,5,750)

}


function draw() {
  background("black");
  bor1.visible = false;
  if(star.isTouching(fairy)){
    fill("orange");
    textSize(26);
    text('YOU WIN',400,325)

  }

  fairy.bounce(bor1);
  if(keyDown(DOWN_ARROW)){
    star.velocityY = 2;
  }
  if(keyDown(RIGHT_ARROW)){
    fairy.velocityX = 2;
  }
  if(keyDown("SPACE")){
    star.velocityY = 0;
  }
  drawSprites();

}
