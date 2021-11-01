let r,b,g;
let loc;


function setup() {
createCanvas (windowWidth, windowHeight);
  background (0);

}

function draw() {
//print(mouseX);
frameRate(500);
noStroke();
fill (255, random(255));
ellipse ((random(1728)), (random(1117)),50,50);
setTimeout (clearout,9000);
fill (255);
ellipse (windowWidth/2,windowHeight/2, 50,50);

}

function clearout(){
  background(0);
}

