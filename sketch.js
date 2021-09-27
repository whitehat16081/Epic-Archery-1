const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;



function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  //CHOOSE THE COORECT CODE FOR MAKING THE PLAYER BASE
  
  //playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  //World.add(world, playerBase);

  //playerBase = Bodies.circle(200, 350, 180, 150, options);
  //World.add(playerBase,world);

  //playerBase = Bodies,rectangle(200, 350, 180, options);
  //World.add(world, playerBase);

  //playerBase = rectangle(200, 350, 180, 150, options);
  //World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world,player)
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

//CHOOSE THE COORECT CODE FOR DISPLAYING THE PLAYER BASE
  //image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  //image(baseimage,playerBase.positionx,playerBase.positiony,180,150)
  //Image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  //image(playerBase.position.x,playerBase.position.y,180,150)








  image(playerimage,player.position.x,player.position.y,50,180)

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}




