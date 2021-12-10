document.oncontextmenu = () => false;
function setup() {
   createCanvas(windowWidth, windowHeight, WEBGL);
   createEasyCam();
}

function draw() {
  background(0);
	strokeWeight(0);

  push();
	translate(0, 0, -60);
	fill(0, 0, 255);
	torus(30);
	pop();
  
  push();
	translate(0, 0, -70);
	fill(0, 255, 0);
	torus(35);
	pop();
  
  push();
	translate(0, 0, -80);
	fill(255, 255, 0);
	torus(40);
	pop();
  
  push();
	translate(0, 0, -90);
	fill(255, 165, 0);
	torus(45);
	pop();

  push();
	translate(0, 0, -100);
	fill(255,0,0);
	torus(50);
	pop();
  

	translate(0, 0, -60);
  rotateX(PI/2);
	fill(255);
	cylinder(15, 60);
  
  push();
  translate(0, -50, 0);
  cylinder(68, 15);
  pop();
}