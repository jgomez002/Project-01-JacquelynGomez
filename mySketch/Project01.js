// Switched from using an for loop to create hill structures to a class array.
class Hill{
  constructor(x,y,r){
    this.x=x;
    this.y=y;
    this.r=r;
    
  }
  display(){
    
    noStroke();
    fill(66, 140, 73);
    ellipse(this.x,this.y,this.r,this.r);
    
}
moving(){ //  key part to last scene as the bunnydog animal moving around to find no one; also gives me an end cliff image (created by have a seclect amount of array objects)
this.speed=50;
this.x = this.x - this.speed;
  if (this.x < 0) {
    this.x = 100;
    }
  
}
}

// creates rain affect (code modified from "kelsierose94" rain code)
class Drop{
constructor(){
  this.x = random(0, width);
  this.y = random(0, -height);
} 
show () {
    noStroke();
    fill(169, 188, 219);
    rect(this.x, this.y, random(3, 8), random(8, 13));   
  }
update() {
    this.speed = random(5, 10);
    this.gravity = 1.05;
    this.y = this.y + this.speed*this.gravity;  
    
    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;

}
}
stop(){ // this adds dramatic effect to last scene, rain stops, does not disappear but stops its motions
  this.speed=0;
}
}
// main subject of 
class Bunnydog{
  constructor(x,y,z){ // have these established just incase i made the shapes coordinates more flexible
this.y=330; 

  }
  show(){
  noStroke();
  fill(255);
  ellipse (199,335,50,50);
  fill(255);
  ellipse(205,315,25,25);
  ellipse(190,315,25,25);
  fill (0);
  ellipse(205,325,10,10);
  ellipse(190,325,10,10);
  }
  
  teardrop(){ // crying base shape
    noStroke();
    fill(169, 188, 219); 
    rect(205,this.y,2,6);
  }
  sad(){ // crying animation; uses parts from the drop class
    this.speed = random(2, 3);
    this.gravity = 1.5;
    
    this.y = this.y + this.speed*this.gravity;  
    
    if (330>this.y >width/2) { // 330 y value is where I wanted the animation to start
      this.y = random(0, -330);
      this.gravity = 0;
    }
}
}




var sections = 0; // was meant to be usef in the house scene (the idea was to divide houses into sections and disapper when bunny gets close but was accomplished another way
var x,y; // established just in case (common used vars i find myself using)
var drop = [] // for rain
var fade = 5; // allows me to create a fadeout effecr
var hills =[]; // for hill scenery
var bunnydog1 =[]; // main subject; objected var declared 

//class objects declared here; for loops used to establish arrays for the objects
function setup() {
createCanvas (windowWidth, windowHeight); // using (windowWidth, windowHeight) gives me a better visual canvas to work with, which I enjoyed but it was harder to determine postion values for certain objects vs declaring a set canvas size. Neverthless I enjoyed using this canvas size
background (0);
 for(var i = 0; i < 200; i++) { // for rain array
    drop[i] = new Drop();
}
 for(var t = 0; t < 100; t++){ // for hill array
  let x = 0+width/8*t;
  hills[t] = new Hill(x,600,500);
} 
    bunnydog1 = new Bunnydog(199,335); // only new object declared 
  

}

function draw() {
//print(mouseX);
  
if (millis()<6000){
  circlespawn();
}
if (millis()>6000 && millis()<8000){ //allows circles from circle spawn to disapper while letting doggocircle to not be effected
    fadeout();
    doggocircle();


}

if (millis()>8000 && millis()<10000){  // dog circle left alone (sad & alone)
  background(0); // clears past scenes
  doggocircle(0);
}
/*
if (millis()>13000 && millis ()<15000){
  background(0);
  dogbox();
}
*/
if (millis()>10000 && millis()<12000){  // surprise! bunnydog animal appears
  background(0);//resets canvas
  bunnydog1.show();
}
  
if (millis()>12000 && millis()<20000){ // 
 background(0); // resets canvas
  scene1();
   for(var t = 0; t < hills.length; t++){
  hills[t].display();
  dogbunnyidk();
}
}
 
  if (millis()>20000 && millis()<28000){
    background(0);  //resets canvas
  
  for(var t = 0; t < hills.length; t++){
  hills[t].display();
  hills[t].moving();
}
    
  noStroke();
  for(var i = 0; i < 200; i++) {
  drop[i].show();
  drop[i].update();
  bunnydog1.show();
}
}
if (millis()>28000){
  for(var i = 0; i < 200; i++) {
  drop[i].stop();
  }
  //dogbox();
  bunnydog1.teardrop();
  bunnydog1.sad();
  
}
}


function circlespawn(){ // I tried making this into a class and array but I did not mimic this effcet I wanted, so after attempting I decided to stick to using a custom function instead
  //frameRate(100); used this to make rate of circlespawning quicker but felt unnecessary later on
  noStroke();
  fill (255);
  ellipse (199,335,50,50);
  fill (255, random(255));
  ellipse ((random(1728)), (random(1117)),50,50);
  
  
}

function fadeout(){ //fadeout effects adds more emotion to peice
//frameRate(15);
fill(0,fade++);
rect (0,0,windowWidth,windowHeight); // rather fading the background I found this approach much better and eaiser to work with
}

  /*function clearout(){ // didn't work out 
  noStroke();
  background (0);
  fill(255);
  ellipse (199,335, 50,50);
}
*/

function doggocircle(){ // single circle apart of bunnydog animal
  fill(255);
  //background(0);
  ellipse (199,335,50,50);

}


function dogbox(){ // I had worked hard creating this custom shape and was meant to be the first central point of this project but I changed directions, never using this. Since I spent a lot of time on this custom shape/fucntion I decided to keep it in the code to reflect 
  //print(mouseX,mouseY);
  noStroke();
  
  
  stroke(0);
  strokeWeight(1);
  fill (199, 166, 143);
  
  beginShape();
  vertex(220,312);
  vertex(220,331);
  vertex(250,331);
  endShape(CLOSE);



  fill (199, 166, 143);
  rect (119,309,100,50);

  beginShape();
  vertex(120,310);
  vertex(151,331);
  vertex(151,379);
  vertex(120,359);
  endShape(CLOSE);
  
  
  stroke(0);
  strokeWeight(2);
  fill (158, 131, 112);
  rect (150, 331, 100,50);
  
}

function dogbunnyidk (){ // main subject (used in the interactive scene); I probably could use my class instead but I found myself struggling to do so, so I kept using this custom function instead

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
function scene1(){ // The interactive scene; this scene goes to show how the idea of finding a home for the animal is useless since when it arrives to the houses, they disappear. This scene transtions to the wander scene continuing the idea of being abandoned from the other circles and homes
  
fill(255);  
for (var s=0; s<400; s = s+1){  // for the houses
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
} // this divides the screen into three sections, if the animal is in these establish areas, the homes disappear. 
  if (mouseX < windowWidth*1/3) {
    fill(0,fade++);
    rect(0, 0, windowWidth*1/3, windowHeight); 
}
  else if( mouseX <windowWidth*2/3){
    fill(0,fade++);
    rect(windowWidth*1/3, 0, windowWidth*1/3, windowHeight);       
          }
  else {
    fill(0,fade++);
    rect(windowWidth*2/3, 0, windowWidth*1/3, windowHeight);    
  } 
  
}


