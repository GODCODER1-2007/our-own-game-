var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var runner1,runner2,runner3,runner4;
var runner;
var obstacle,obstacle2,obstacle3;
var obstacles;
var end;
var form, player, game;
var track;

function preload(){
  track = loadImage("../images/track.jpg");
  end = loadImage("../images/gameOver.png")
  run1_img = loadImage("../images/runner1.png");
  run2_img = loadImage("../images/runner2.png");
  run3_img = loadImage("../images/runner4.png");
  run4_img = loadImage("../images/harry.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
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
