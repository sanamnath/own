const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;

var backgroundImage;
var backgroundOver;

var bike;
var ground1, ground2, ground3, ground4, ground5, ground6;

var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8;
var rope1, rope2, rope3, rope4, rope5, rope6, rope7, rope8;

function preload(){
    backgroundImage = loadImage("images/bachground/Desert.jpg");
    backgroundOver = loadImage("images/bachground/Game over.jpg");
}
function setup(){
    createCanvas(1600,800);

    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(400,500,800,10,0);

    ground2 = new Ground(1490,210,1500,10,75);

    ground3 = new Ground(3000,120,800,10,0);

    ground4 = new Ground(6500,300,5000,10,0);

    ground5 = new Ground(10050,100,2000,10,75);

    ground6 = new Ground(11230,-290,500,10,0);

    bike = new Bike(200,498); 
    

    ball1=new BallPen(5000,140);
    rope1 = new Pendulum(ball1.body,{x:5000, y:-25});

    ball2 =new BallPen(6000,140);
    rope2 = new Pendulum(ball2.body,{x:6000, y:-25});
    
    ball3=new BallPen(7000,140);
    rope3 = new Pendulum(ball3.body,{x:7000, y:-25});
    
    ball4=new BallPen(8000,140);
    rope4 = new Pendulum(ball4.body,{x:8000, y:-25});

    ball5=new BallPen(9000,140);
    rope5 = new Pendulum(ball5.body,{x:9000, y:-25});

     var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
          width: 1600,
          height: 800,
          wireframes: false
        }
      });
        
        Engine.run(engine);
}
function draw(){ 
    background(backgroundImage);
   
    camera.position.x =bike.body.position.x;
    camera.position.y =bike.body.position.y;

    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
    ground5.display();
    ground6.display();

    bike.display();

    ball1.display();
    rope1.display();
    ball2.display();
    rope2.display();
    ball3.display();
    rope3.display();

    collision(bike,ball1);
    collision(bike,ball2);
    collision(bike,ball3);
 

    if (bike.body.position.y > 460){
        camera.position.y = height/2;
        background(backgroundOver);
    }
  //  console.log(Math.round(bike.body.position.y));
}

function keyPressed(){
    if (keyCode === 39){
        Body.setVelocity(bike.body, {x:20,y:0});
    }
    if (keyCode === 37){
        Body.setVelocity(bike.body, {x:-15,y:0});
    }
    if (keyCode === 83){
        Body.setVelocity(bike.body, {x:0,y:0});
    }
}
function collision(bike,ball){
    var distance = dist(bike.body.position.x,bike.body.position.y,ball.body.position.x,ball.body.position.y);
   if(distance <150 && distance >120){
    camera.position.y = height/2;
    background(backgroundOver);
    console.log("you lost");
   }
}




