var fairy,fairyImage;
var star,starImage;
var bg,bgImage;
var music;
function preload(){
   //preload the images here
fairyImage=loadImage("images/fairyImage1.png");
starImage=loadImage("images/star.png");
bgImage=loadImage("images/starNight.png");
music=loadSound("sound/JoyMusic.mp3");

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
}


function draw() {
  background("black");
  if(keyDown("SPACE")){
    star.y=star.y = 563;
  }
  if(keyDown(RIGHT_ARROW)){
    fairy.x=fairy.x = 600;
  }
  drawSprites();

}
