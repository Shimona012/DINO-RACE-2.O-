var canvas, backgroundImage;
var c1,c2,c3,c4;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var cars=[];
var form, player, game;
var d1,d2,d3,d4;
var bg;
var ground;
var boost;
var bs;
function preload(){
d1=loadImage("js/1.jpg");
d2=loadImage("js/2.jpg");
d3=loadImage("js/3.jpg");
d4=loadImage("js/4.jpg");
bg=loadImage("bg.jpg");
ground=loadImage("ground.png");
boost=loadImage("Space.png");
}
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  // too down
  //image(boost,400,displayHeight/1.2,500,80);
  // is okay
  image(boost,400,displayHeight/2,500,80);
  //bs=createSprite(displayWidth/2,displayHeight/1.5,100,100);
  //bs.addImage(boost);

}

function draw(){
// background("orange");
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
   // background(bg);
   if(gameState===2){
    game.end();
  }
  textSize(30);
  fill("black");
  text("Move up down left and right with your keys..",displayWidth/2+10,0);
  text("The dino who reaches the top of the bubbling ",displayWidth/2+10,30);
  text("volcano first wins..btw Space bar to boost",displayWidth/2+10,60);
}
} 
/*
  function keyPressed(){
    if(keyCode===32){
      player.distancey +=30;
    }
   
  }


  //drawSprites();
}*/

