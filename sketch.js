var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var track,ground,car1img,car2img,car3img,car4img;
var save;
var button;

function preload(){
 
  track=loadImage("images/track.jpg");
  ground=loadImage("images/ground.png");
 // car1img=loadImage("images/car1.png");
  car1img=loadAnimation("images/boy11.png","images/boy12.png");
  car2img=loadImage("images/download.png");
  car3img=loadImage("images/car3.gif");
  car4img=loadImage("images/car4.png");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  button=createButton('speed');
  button.mousePressed(speed);
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}

function speed(){
    cars.distance=0;
}
  
