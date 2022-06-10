
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, blocoA, blocoB, blocoC;

function preload()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_options={
		isStatic:true
	}
	ground = Bodies.rectangle(600,700,1200,2,plane_options);
	World.add(world,ground);

	Engine.run(engine);
	
	var blocoA_options={
		restitution:0.5,
		friction:0.03,
		frictionAir:0
	} 
	blocoA = Bodies.circle(150,400,20,blocoA_options);
	World.add(world,blocoA);

	var blocoB_options={
		restitution:3,
		friction:0.05,
		frictionAir:0.1
	}
	blocoB = Bodies.rectangle(350,600,20,20,blocoB_options);
	World.add(world,blocoB);

	var blocoC_options={
		restitution:10,
		friction:0.01,
		frictionAir:0.2
	}
	blocoC = Bodies.rectangle(500,250,40,20,blocoC_options);
	World.add(world,blocoC);

	fill(155);
	rectMode(CENTER);
	ellipseMode(RADIUS);

}

function draw() {
  background(0)

  rect(ground.position.x,ground.position.y,1200,2);
  ellipse(blocoA.position.x,blocoA.position.y,20);
  rect(blocoB.position.x,blocoB.position.y,20,20);
  rect(blocoC.position.x,blocoC.position.y,40,20);

	Engine.update(engine);
}



