// Varibles 
float brush= 1;
float brushChange= 1;
float a=0;
//int random;



void setup(){
  size (800,800);
  background (0);
}

void draw(){
  if (brushChange == 1 && mousePressed == true) {
    brush1();
  }
  if (brushChange == 2 && mousePressed == true) {
    brush2();
    brush2circle();
  }
  if (brushChange == 3 && mousePressed == true) {
    brush3();
  }
}

void brush1(){ // large scale brush using sections of frame 1 from sketch 2
  pushMatrix();
  translate(mouseX,mouseY);
  ellipseMode(CORNER);
   for (int c=0; c<=width; c+=125){
   for (int b=0; b<=height; b+=125){
   fill (random(0), random (15)); // varrying alphas when pattern created, build on each other creating a cool shading effects within shape.
      rotate(radians(15));
      stroke(190, 210, 237);
      strokeWeight (5); 
      myShape(b, c, 65, 65); // circle
      strokeWeight(2); 
      myShape (b,c,75,55); //  smaller ellipse
     
   }
   }
   popMatrix();
}

void brush2 (){ // using the general shape but rotating it
  pushMatrix();
  translate(mouseX, mouseY);
  for (int c=0; c<=50; c+=10){
  for (int b=0; b<=50; b+=10){
  noFill ();
  stroke(177, 165, 240, random(255));
  rotate(radians(a++));
   myShape(c,b,25,25);
   myShape(b,c,30,20);
}
  }
   popMatrix();
}

void brush2circle(){ // I could add this to sketch two without the circle being weird so I seperated the two voids but they active with the same keypress
  pushMatrix();
  fill(247, 229, 32, 20);
  ellipse(mouseX,mouseY, 50, 50);
  popMatrix();
   
}

void brush3(){
  pushMatrix();
  translate(pmouseX,mouseY-150);
  stroke(193, 224, 188,50);
  fill(147, 181, 174, 15);
  myShape(100,100,75,75);
  myShape(100,100,115,40);
  popMatrix();
  
}

/*void brush4(){
  pushMatrix();
  translate(mouseX,mouseY);
  
  popMatrix();
}
*/
void mousePressed() { 
  brush++;
  if (brush>5) { 
    brush=1;
  }
}

void keyPressed() { 
  if (key == '0'){
    background(0); //reset the screen
  }
 
   if (brushChange <= 4){
    brushChange++;
  } else {
    brushChange=1;
  }
}

void myShape(int c,int b,int size1, int size2){
 ellipseMode (CENTER);
 ellipse (c, b, size1, size2); 
 ellipse (b,c, size1, size2);
}
