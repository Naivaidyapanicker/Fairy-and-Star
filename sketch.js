var fairy,fairyImage;
var star,starImage;
var bg,bgImage;
function preload(){
   //preload the images here
fairyImage=loadImage("fairyImage1.png");
starImage=loadImage("star.png");
bgImage=loadImage("starNight.png");
}

function setup() {
  createCanvas(800, 750);
  
  bg=crateSprite(0,0,800,750);
  bg.addImage("background",bgImage);
  
 fairy=createSprite(200,200,20,20);
 fairy.addImage("fairyImg1",fairyImage);

 star=createSprite(500,500,10,10);
 star.addImage("sarImg1",starImage);
}


function draw() {
  background("black");

  drawSprites();

}
