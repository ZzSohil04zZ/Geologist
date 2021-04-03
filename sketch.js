const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, rubber,iron,hammer;
var rubber,rubber1,rubber2,rubber3,rubber4;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    iron = new Iron(300,350);
    stone = new Stone(700,320,100,100);
    rubber =new Rubber(900,450,70);
    rubber1 = new Rubber(400,590,10);
    rubber2 = new Rubber(410,590,10);
    rubber3 = new Rubber(420,590,10);
    rubber4 = new Rubber(430,590,10);


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);  

    
    plane.display();
    hammer.display();
   
   
    iron.display(); 
    stone.display(); 
    rubber.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();


 
}