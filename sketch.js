function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  angleMode(DEGREES)
}

function draw() {
  background(0);

  noStroke(); //set nostroke for all the objects
  ortho(); //orthogonal view
  //move the camero with the mouse
  camera(mouseX - width / 2, mouseY - height / 2, 250, 0, 0, 0, 0, 1, 0);

  //setting basic lights
  lights()

  //if the light is ON create a light in the lamp
  //"on" is the varible that contains the status of the light
  if (on == true) {
    lightFalloff(0.9, 0.002, 0);
    pointLight(250, 250, 200, 0, 0, 50);
  }

  //metallic material for all the structure
  specularMaterial(40, 40, 40)

  //draw the metallic part of the lamp
  push()
  translate(0, -145, 0)
  cylinder(20, 100);
  cylinder(200, 20);
  translate(0,-50,0)
  cylinder(100, 20);
  translate(0,-500,0)
  cylinder(20, 1000)
  pop();

  //draw cylinders inside the lamp's BULB
  push()
  ambientMaterial(255, 255, 255, 255)
  translate(0, -50, 0)
  //cylinder 1
  push()
  translate(25,-25,0)
  rotateZ(-30)
  cylinder(5, 50);
  pop()
  //cylinder 2
  push()
  translate(-25,-25,0)
  rotateZ(30)
  cylinder(5, 50);
  pop()
  //cylinder 3
  push()
  translate(0,-25,25)
  rotateX(30)
  cylinder(5, 50);
  pop()
  //cylinder 4
  push()
  translate(0, -25, -25)
  rotateX(-30)
  cylinder(5, 50);
  pop()
  pop();
  
  //if the linght is ON change the material of the lamp's BULB
  if (on == true) {
    //light ON --> yellow emissive BULB
    emissiveMaterial(255, 255, 150, 150)
  } else {
    //light off --> transparent glass BULB
    ambientMaterial(40, 40, 40, 50)
  }

  //draw the BULB
  sphere(100)
}

//variable that contains the lamp status
var on = false;

//on click invert the lamp's status
function mouseClicked() {
  on = !on
}
