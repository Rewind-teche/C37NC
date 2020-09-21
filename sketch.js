//Create variables here
var canvas;
var rocFly, roc, astro;
var sp
var back1, back2, back3, back4;
var gameState
var player
var form

function preload()
{
  //load images here
  rocFly = loadImage("images/roc.png")
  roc = loadImage("images/rocky.png")
  astro = loadImage("images/astroid.png")
  back1 = loadImage("images/pluto.jpg")
  back2 = loadImage("images/mars.jpg")
  back3 = loadImage("images/nep.jpg")
  back4 = loadImage("images/ura.jpg")
}

function setup() {
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(displayWidth-40,displayHeight-20);
  game = new Game();
  game.getState();
  game.start();
}


function draw() 
{  
  background(rocFly)
  if(game.start)
  {
    game.updateState(1)
  }
  if(gameState === 1)
  {
    clear();
    game.play();
  }
  drawSprites();
}




