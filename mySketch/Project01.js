var sections = 0;
var x,y;


function setup() {
createCanvas (windowWidth, windowHeight);
background (0);

}

function draw() {
//print(mouseX);
  
if (millis()<8000){
  circlespawn();
}
  if (millis()<9000){
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
if (millis()>12000 && millis()<14000){  
  background(0);
  animal();
}
  
if (millis()>15000 ){
 background(0); 
 //dogbunnyidk();
  scene1();
  dogbunnyidk();
  
}  
}
   
  //else if (mouseX < 66) {
    //rect(33, 0, 33, 100); // Middle
  //}
  //else {
    //rect(66, 0, 33, 100); // Right
  //}


//}



function circlespawn(){
  frameRate(100);
  noStroke();
  fill (255);
  ellipse (199,335,50,50);
  fill (255, random(255));
  ellipse ((random(1728)), (random(1117)),50,50);
  
  
}

  /*function clearout(){
  noStroke();
  background (0);
  fill(255);
  ellipse (199,335, 50,50);
}
*/

function doggocircle(){
  fill(255);
  background(0);
  ellipse (199,335,50,50);

}

function animal(){
  doggocircle();
  fill(255);
  ellipse(205,315,25,25);
  ellipse(190,315,25,25);
  fill (0);
  ellipse(205,325,10,10);
  ellipse(190,325,10,10);
}

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

function dogbunnyidk (){

  push();
  translate(mouseX-250,mouseY-300);
  fill(255);
  //dogbox();
  noStroke();
  ellipse (199,335,50,50);
  

  fill(255);
  ellipse(205,315,25,25);
  ellipse(190,315,25,25);
  fill (0);
  ellipse(205,325,10,10);
  ellipse(190,325,10,10);
  pop();
}
function scene1(){
  
fill(255);  
for (var s=0; s<400; s = s+1){ 
  rect(s*windowWidth/3, 0, 5, height);
  for(var b=0;b<=width;b=b+250){
fill(66, 140, 73);
ellipse(b,700,500,500);
fill (163, 123, 119);
rect(b*2,height*3/8,200,250);
fill(100);
rect(50+b*2,height*0.55,50,90);
triangle(b*2,width/4.8,190+b*2,width/4.8,85+b*2,width/7);

}
} 
  if (mouseX < windowWidth*1/3) {
    fill(0);
    rect(0, 0, windowWidth*1/3, windowHeight); 
}
  else if( mouseX <windowWidth*2/3){
    fill(0);
    rect(windowWidth*1/3, 0, windowWidth*1/3, windowHeight);       
          }
  else {
    fill(0);
    rect(windowWidth*2/3, 0, windowWidth*1/3, windowHeight);    
  } 
  
}




//function scene1(){
 // fill(66, 140, 73);
 // ellipse(windowWidth/(1/3),windowHeight/(2/3),500,500);
//}

