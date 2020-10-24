var car,car2,car3,wall;
var speed,weight;



function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  car.velocityX=speed;

  car2=createSprite(50,250,50,50);
  car2.velocityX=speed;

  car3=createSprite(50,300,50,50);
  car3.velocityX=speed;

  if(wall.x - car < (car.width+wall.width)/2){
car.velocityX=0;
var deformation=0.5 * weight * speed* speed/22509;
if(deformation>180){
car.shapecolor=color(255,0,0);
}

if(deformation<180 && deformation>100){
car.shapecolor=color(230,230,0);
}

if(deformation<100){
car.shapecolor=color(0,255,0);
}
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
}