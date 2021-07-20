var humanShip,humanShipImage;
var alienShipImage;
var alienTorpedo,alienTorpedoImage;
var humanTN,humanTNImage;
var bGImage;
var edge;

var alienGroup;
var tnGroup;
var alienBombGroup;

function preload(){
  humanShipImage=loadImage("humanShip.png");
  humanTNImage=loadImage("TN.png");

  alienShipImage=loadImage("alienShip.png");
  alienTorpedoImage=loadImage("torpedo.png");

  bGImage=loadImage("BG.png");
}

function setup(){
createCanvas(600,400);

humanShip=createSprite(200,350,20,20);
humanShip.addImage(humanShipImage);
humanShip.scale=0.14;

tnGroup=new Group();
alienGroup=new Group();
alienBombGroup=new Group();

 for (var i=40;i<600; i=i+35){
   var a = createSprite(i,20,20,20);

   a.addImage(alienShipImage);

   a.scale = 0.07;

   alienGroup.add(a);
 }

 for (var i=40;i<600; i=i+35){
   var a =createSprite(i,50,20,20)

   a.addImage(alienShipImage);

   a.scale=0.07;

   alienGroup.add(a);
 }
 
 for (var i=40;i<600; i=i+35){
  var a =createSprite(i,80,20,20)

  a.addImage(alienShipImage);

  a.scale=0.07;

  alienGroup.add(a);
}

for (var i=40;i<600; i=i+35){
  var a =createSprite(i,110,20,20)

  a.addImage(alienShipImage);

  a.scale=0.07;

  alienGroup.add(a);
}

for (var i=40;i<600; i=i+35){
  var a =createSprite(i,140,20,20)

  a.addImage(alienShipImage);

  a.scale=0.07;

  alienGroup.add(a);
}

}

function draw(){
background(bGImage);

humanShip.velocityX= 0; 

if (keyDown("left")){
humanShip.velocityX= -4;
}

if (keyDown("right")){
  humanShip.velocityX=4;
}
 
if(keyWentDown("up")){
  ifClick();

}

alienBomb();

edge=createEdgeSprites();
humanShip.bounceOff(edge);


  drawSprites();
}

function ifClick(){
  humanTN=createSprite(300,300,1,1);

  humanTN.addImage(humanTNImage);

  humanTN.scale=0.05;

  humanTN.velocityY=-2;

  humanTN.x=humanShip.x;

  tnGroup.add(humanTN);

 
}

function alienBomb(){
alienTorpedo=createSprite(Math.round(random(40,600)),Math.round(random(0,200)),20,20);

alienTorpedo.addImage(alienTorpedoImage);

alienTorpedo.scale=0.07;

alienTorpedo.velocityY= +3;

alienBombGroup.add(alienTorpedo);

}