//variables are created for background, wall, thickness, bullet, speed, weight, texts and images

var background;
var crack;
var wall,thickness;
var bullet,speed,weight;
var text1, text2;

var backgroundIMG, bulletIMG, text1IMG, text2IMG, crackIMG;

function preload(){

  //images are being loaded into varibles

  backgroundIMG = loadImage("backgroundd.png")
  bulletIMG = loadImage("bullet.png");
  text1IMG = loadImage("text1.png");
  text2IMG = loadImage("text2.png");
  crackIMG = loadImage("crack.png")

}

function setup() {

  //canvas is created

  createCanvas(1600,400);

  //speed and weight are given random values
  
  speed = random(223,321);
  weight = random(30,52);

  //sprites are being created and images are being added to sprites

  backgroundM = createSprite(800,200,1600,400);
  backgroundM.addImage(backgroundIMG);
  backgroundM.scale = 2;

  bullet = createSprite(200, 200, 50, 20);
  bullet.addImage(bulletIMG);
  bullet.shapeColor = color(255,255,255)
  bullet.scale = 0.5;

  wall = createSprite(1200, 200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  text1 = createSprite(220,60,70,70);
  text1.addImage(text1IMG);
  text1.scale = 0.5;

  text2 = createSprite(900,60,70,70);
  text2.addImage(text2IMG);
  text2.scale = 0.5;

  crack = createSprite(1200,200,50,50);
  crack.addImage(crackIMG);
  crack.visible = false;

}

function draw() {

  //thickness is being given a random value

  thickness = random(22,83);

  background(0,0,0); 

  //has collided function chnages color of wall, either red or grenn, depending on the damage done

  if(hasCollided(bullet, wall)){

    bullet.velocityX = 0;
    bullet.x=100

    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    //red wall

    if(damage>10){

      wall.shapeColor = color(255,0,0);
      bullet.velocityX = 0;
      crack.visible = true
      crack.scale = 0.5

    }

    //green wall

    if(damage<10){

      wall.shapeColor = color(0,255,0);
      bullet.velocityX = 0;
      crack.visible = true
      crack.scale = 0.2

    }

  }

  //function that fires the bullets



  if(keyDown("space")){

    bullet.velocityX = speed;
    wall.shapeColor = color(80,80,80);
  
  }

  drawSprites();

  textSize(15);
  fill(255, 255, 255);
  text("Bullet Speed: " + speed , 1300, 20);

  textSize(15);
  fill(255, 255, 255);
  text("Bullet Weight: " + weight , 1300, 60);

  textSize(15);
  fill(0, 0, 255);
  text("Bullet Thickness: " + thickness , 1300, 100);



}