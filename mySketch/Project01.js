function setup() {
createCanvas (windowWidth, windowHeight);
background (0);

}

function draw() {
//print(mouseX);
  
if (millis()<8000){
  circlespawn();
}
  
//if (millis()>8000 && millis()<10000){
  
  //clearout();
//}

if (millis()>10000 && millis()<11000){  
  background(0);
  doggocircle(0);
}
/*
if (millis()>13000 && millis ()<15000){
  background(0);
  dogbox();
}
*/
if (millis()>15000 ){
   doginbox();
fill(66, 140, 73);
for(var b=0;b<=width;b=b+250){
ellipse(b,700,500,500);

}
}



function circlespawn(){
  frameRate(100);
  noStroke();
  fill (255);
  ellipse (199,335,50,50);
  fill (255, random(255));
  ellipse ((random(1728)), (random(1117)),50,50);
  
  }
}

  /*function clearout(){
  noStroke();
  background (0);
  fill(255);
  ellipse (199,335, 50,50);
}
*/

function doggocircle(){
  background(0);
  ellipse (199,335,50,50);

}
/*
function dogbox(){
  //print(mouseX,mouseY);
  noStroke();
  
  
  stroke(0);
  strokeWeight(1);
  fill (199, 166, 143);
  
  beginShape();
  vertex(231,312);
  vertex(231,331);
  vertex(261,331);
  endShape(CLOSE);



  fill (199, 166, 143);
  //translate(30,20);
  rect (130,309,100,50);

  beginShape();
  vertex(131,310);
  vertex(162,331);
  vertex(162,379);
  vertex(131,359);
  endShape(CLOSE);
  
  fill(255);
  noStroke();
  ellipse(199,335,50,50);
  
  stroke(0);
  strokeWeight(2);
  fill (158, 131, 112);
  rect (161, 331, 100,50);
  
}
*/
function doginbox (){
background(0);

  push();
  translate(mouseX-250,mouseY-300);
  fill(255);
  //dogbox();
  doggocircle();
  noStroke();

  fill(255);
  ellipse(205,315,25,25);
  ellipse(190,315,25,25);
  fill (0);
  ellipse(205,325,10,10);
  ellipse(190,325,10,10);
  pop();
fill(255);  
for (var s=0; s<400; s = s+1){ 
  rect(s*windowWidth/3, 0, 5, height);
}  
}

//function scene1(){
 // fill(66, 140, 73);
 // ellipse(windowWidth/(1/3),windowHeight/(2/3),500,500);
//}


