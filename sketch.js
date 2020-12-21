const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2, ground3, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10,box11,box12, box13, box14, box15, box16;
var polygon1, sling1;
function preload(){

}

function setup(){

    createCanvas(1300, 700);
	
	engine = Engine.create();

    world = engine.world;

    ground1=new Ground(650,height-4,1300,5);

    //tower1

    ground2=new Ground(600, 450,300,5);
    
    box1= new Box(487.5, 412.5, 75,75);
    box2= new Box(562.5, 412.5, 75,75);
    box3= new Box(637.5, 412.5, 75,75);
    box4= new Box(712.5, 412.5, 75,75);

    box5= new Box2(525, 337.5, 75,75);
    box6= new Box2(600, 337.5, 75,75);
    box7= new Box2(675, 337.5, 75,75);

    box8= new Box3(562.5, 262.5, 75,75);
    box9= new Box3(637.5, 262.5, 75,75);

    box10= new Box2(600, 187.5, 75,75);

    //tower2

    ground3=new Ground(1000,400,300,5);

    box11= new Box2(925, 362.5, 75,75);
    box12= new Box2(1000, 362.5, 75,75);
    box13= new Box2(1075, 362.5, 75,75);

    box14= new Box3(962.5, 287.5, 75,75);
    box15= new Box3(1037.5, 287.5, 75,75);

    box16= new Box2(1000,212.5, 75,75);

    //polygon

    polygon1= new Polygon(150, 400, 50);

    //slingshot

    sling1= new Slingshot(polygon1.body, {x: 200,y: 300})


}

function draw(){
    
    rectMode(CENTER);
    
    background(0);

    Engine.update(engine);


    ground1.display();

    //tower1

    ground2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();

    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();

    box10.display();

    //tower2

    ground3.display();

    box11.display();
    box12.display();
    box13.display();

    box14.display();
    box15.display();

    box16.display();

    //polygon

    polygon1.display();

    //slingshot

    sling1.display();

    

    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling1.fly();
}

function keyPressed(){

    if(keyCode===32){
        sling1.attach(polygon1.body);
    }
}