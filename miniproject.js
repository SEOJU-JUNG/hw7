var ccc = 0;
var cccSpeed = 0;

var ccc2 = 0;
var ccc2Speed = 0;
let ttt = 'Random color for this option';

function setup() {
  createCanvas(570, 350);
  noStroke();
  fill('#f2f2f2'); //light Grey
  rect(0, 0, 300, 350);

  fill('#f2d857'); ///yellow
  circle(150, 175, 154)
  
   
  

  
  
}



function preload(){

  eatSound = loadSound("giggles.wav")
  eatSound2 = loadSound("wow.wav")
  eatSound3 = loadSound("cry.wav")
  eatSound4 = loadSound("ah.wav")
  eatSound5 = loadSound("loveyou.wav")
  eatSound6 = loadSound("dead.wav")
  eatSound7 = loadSound("cat.wav")



}

function draw() {
  // background(320);
//Big first rect
  noStroke();
  fill('#f2f2f2'); //light Grey
  rect(300, 0, 270, 50);
  
  //Big SECOND rect
  noStroke();
  fill('#ffffff'); //White
  rect(300, 75, 335, 75);
  
   //Big THIRD rect
  noStroke();
   fill('#ffffff'); //White
  rect(300, 175, 335, 75);
  
  // Big Forth rect
  noStroke();
  fill('#ffffff'); //light Grey
  rect(300, 275, 335, 75);
  
  //Seconde little squares
  noStroke();
  fill('#f2f2f2'); //light Grey
  rect(310, 85, 55, 55); //2 1 square
  fill('#f2f2f2'); //light Grey
  noStroke();
  rect(375, 85, 55, 55); //2 2 square
  rect(440, 85, 55, 55); //2 3 square
  rect(505, 85, 55, 55); //2 4 square
  rect(570, 85, 55, 55); //2 5 square
  
    //Third little squares
  fill('#f2f2f2'); //light Grey
  noStroke();
  rect(310, 185, 55, 55); //3 1 square
  rect(375, 185, 55, 55); //3 2 square
  rect(440, 185, 55, 55); //3 3 square
  rect(505, 185, 55, 55); //3 4 square
  
  //Forth little squares
  fill('#f2f2f2'); //light Grey
  noStroke();
  rect(310, 285, 55, 55); //4 1 square
  rect(375, 285, 55, 55); //4 2 square
  rect(440, 285, 55, 55); //4 3 square
  rect(505, 285, 55, 55); //4 4 square
 
  

    //1 small dark rect
  noStroke();
  fill('#d1d0c6'); //light Grey
  rect(300, 50, 270, 25);

  //2 small dark rect
  noStroke();
  fill('#d1d0c6'); //dark
  rect(300, 150, 335, 25);

 

  //3 small dark rect
  noStroke();
  fill('#d1d0c6'); //light Grey
  rect(300, 250, 335, 25);



  //Middle line
  stroke('#d1d0c6'); //dark Grey
  strokeWeight(2);
  line(300, 0, 300, 350); //vertical
  
  //circle//
  stroke('#ffffff'); //White stroke
  strokeWeight(3);

  fill('#f0ebc8'); ///circle1- Defaultf
  circle(325, 25, 30);

  fill('#f2bb57'); ///circle2
  circle(368, 25, 30);
  
  fill('#35bcf2'); ///circle3
  circle(413, 25, 30);
  
  fill('#ffa2ba'); ///circle4
  circle(456, 25, 30);
  
  fill('#37f2df'); ///circle5
  circle(499, 25, 30);

  
  colorMode(HSB);
  fill(ccc,68,94);
  circle(542, 25, 30);
  
   if (ccc >= 500) {
    cccSpeed = -4;
  }
  //bouncing back-Brown
  if (ccc <= 0) {
    cccSpeed = 5;
  }
ccc = ccc + cccSpeed;

  
  

  
  fill('#ffffff') // 1 EYES
  ellipse(325, 113, 20, 20);
  ellipse(350, 113, 20, 20);
  fill('#000000')
  ellipse(325, 113, 12, 12);
  ellipse(350, 113, 12, 12);
  
  
  
  

  


 







  
  
  //heart start
  push();
  translate(390, 112);
  scale(0.6);
  fill('#f22e2e');
  noStroke();
  beginShape();
  for (var a = 0; a < TWO_PI; a += 0.01) {
  var r = 1;
  var x = 16 * pow(sin(a),3);
  var y = -1*(13 * cos(a) - 5*cos(2*a) - 2*cos(3 * a) - cos(4 * a));            vertex(x, y);
    }
  endShape();
  pop();  
  
   push();
  translate(415, 112);
  scale(0.6);
  fill('#f22e2e');
  noStroke();
  beginShape();
  for (var a2 = 0; a2 < TWO_PI; a2 += 0.01) {
  var r2 = 1;
  var x2 = 16 * pow(sin(a2),3);
  var y2 = -1*(13 * cos(a2) - 5*cos(2*a2) - 2*cos(3 * a2) - cos(4 * a2));            vertex(x2, y2);
    }
  endShape();
  pop();  
  
  //heart end  
  
  //sad//
strokeWeight(5);
stroke('#333333');
noFill();
arc(455, 108, 13, 13, 0, PI);
strokeWeight(5);
stroke('#333333');
noFill();
  stroke('#333333');

arc(480, 108, 13, 13, 0, PI);
fill('#35bcf2');
noStroke();
arc(480, 129, 15,15, 0, PI);

noStroke();
triangle(472.5, 129, 480, 120, 487.5, 129);
  //sad end//


  //dead//
stroke('#333333');

  noFill();
  line(515, 107, 525, 117);
  line(525, 107, 515, 117);
  line(540, 107, 550, 117);
  line(550, 107, 540, 117);
  //dead end//
  
  //smail Mouth1//
strokeWeight(5);
stroke('#333333');
noFill();
arc(337, 205, 40, 40, 0, PI);
  //smail Mouth1 END//
  
  //wow Mouth2//
stroke('#333333');
fill('#ffffff')
ellipse(402.5, 213, 37, 37);
noStroke(51);
fill('#333333')
arc(402.5, 207, 40, 50,0,PI);
  //wow Mouth2 END//

  //upset mouth3//
strokeWeight(5);
stroke('#333333');
noFill();
arc(467, 221, 40, 40, PI, 0);
//upset mouth3 END//
  
//merong mouth4//
strokeWeight(5);
stroke('#333333');
fill('#e35c34');
line(514,205,551,205);
arc(532.5,207.5, 25, 35, 0,-PI);
fill('#cf4824');
  
line(532,205,532,215);
// ellipse(532.5,217, 25, 27);
//arc(532.5, 221, 40, 40, PI, 0);
//mering mouth4 END//


// Glasses//
  strokeWeight(2);
stroke('#333333');
  strokeWeight(2.5);
  line(312, 310, 363, 310);
  fill('rgb(255,255,255)' ); 
  strokeWeight(1.5);
stroke('#333333');
  ellipse(328, 310, 20,20);
  ellipse(348, 310, 20,20);
//end Glasses//
  
// shy//
  fill('#f0b3a1' ); 
  noStroke();
  ellipse(389, 320, 15,15);
  ellipse(416, 320, 15,15);
  // shy end//
  
// SUNGlasses//
  strokeWeight(2);
stroke('#333333');
  strokeWeight(2.5);
  line(442, 307, 494, 307);
  fill('#333333' ); 
  arc(458, 307.5, 20,20, 0, PI);
  arc(478, 307.5, 20,20, 0, PI);
//end SUNGlasses//
 
//xxx//
//cat small//
push();
    scale(.7);
   noStroke();
   fill('#804337')
  translate(360,260);
  ellipse(402, 187, 12, 10);
  
  strokeWeight(5); 
  strokeWeight(2.5);
  stroke('#804337');
  line(390, 189,370, 191);
  line(390, 184,370, 182);
  line(390, 194,370, 199);
  line(415, 189,435, 191);
  line(415, 184,435, 182);
  line(415, 194,435, 199);
  pop();
 
    //cat//
///xxx
  
  
  fill('#333333'); //black- def
   noStroke();
   rect(120, 14, 55, 25,20); 
  //text//
  
  noStroke();
  textSize(12);
  fill('#000000');
  text('EYES', 310, 65);
  text('MOUTH', 310, 167);
  text('ACCESARIES ', 310, 267);
    fill('#333333'); //black

    textSize(10);
   text('Choose at the end after other options.', 395, 267);
  

  textSize(10);
  fill('#ffffff');
  strokeWeight(0);
  text('DEFAULT', 125, 30);
   //text//
  
 



  
 
   

  

}



function mousePressed() {
      noStroke();
  print(mouseX, mouseY);
  
   // the First circle on the menu bar
  if (310 <= mouseX && mouseX <= 340 && 10 <= mouseY && mouseY <= 40) {
    noStroke();
    fill('#f0ebc8');
    rect(0, 0, 300, 350);
    square(44, 280,230,30);
    noStroke();
    fill('#f2d857');
    circle(150, 175, 155); 
  }  
  // the second circle on the menu bar
  if (353 <= mouseX && mouseX <= 383 && 10 <= mouseY && mouseY <= 40) {
    noStroke();
    fill('#f2bb57'); 
    rect(0, 0, 300, 350);
    fill('#f2d857');
    circle(150, 175, 155);
  } 
  // the third circle on the menu bar
  if (396 <= mouseX && mouseX <= 426 && 10 <= mouseY && mouseY <= 40) {
    noStroke();
    fill('#3dc7ed'); //blue
    rect(0, 0, 300, 350);
    square(44, 280,230,30);
    noStroke();
    fill('#f2d857');
    circle(150, 175, 155);
  }
  
  // the forth circle on the menu bar
  if (439 <= mouseX && mouseX <= 469 && 10 <= mouseY && mouseY <= 40) {
    noStroke();
    fill('#ffa2ba'); ///pink
    rect(0, 0, 300, 350);
    square(44, 280,230,30);
    noStroke();
    fill('#f2d857');
    circle(150, 175, 155);
  }
  
  // the fifth circle on the menu bar
  if (482 <= mouseX && mouseX <= 512 && 10 <= mouseY && mouseY <= 40) { 
     noStroke();
    fill('#37f2df'); ///sky
    rect(0, 0, 300, 350);
    square(44, 280,230,30);
    noStroke();
    fill('#f2d857');
    circle(150, 175, 155);
  }
  
  // the sixth circle on the menu bar
  if (525 <= mouseX && mouseX <= 555 && 10 <= mouseY && mouseY <= 40) {

    
    noStroke();
    fill('#f2f2f2');//random
    rect(0, 0, 300, 350);
    square(44, 280,230,30);
    noStroke();
  
      colorMode(HSB);
  fill(random(255),68,94);
  rect(0, 0, 300, 350);
  fill('#f2d857');
  circle(150, 175, 155);

noStroke();
 fill(0)
   .strokeWeight(0)
   .textSize(12);
textStyle(NORMAL);
text(ttt, 75, 58);
  
    

  }

  
 
  // FIRST EYES
  if (310 <= mouseX && mouseX <= 365 && 85 <= mouseY && mouseY <= 140) {
   noStroke();
    fill('#f2d857'); ///yellow small
    circle(150, 175, 155);
    fill('#ffffff') // 1 EYES
  ellipse(120, 160, 40, 40);
  ellipse(182, 160, 40, 40);
  fill('#000000')
  ellipse(120, 160, 25, 25);
  ellipse(182, 160, 25, 25);
    

  fill('#ffffff') // 1 EYES
  ellipse(120, 160, 40, 40);
  ellipse(182, 160, 40, 40);
  fill('#000000')
  ellipse(120, 160, 25, 25);
  ellipse(182, 160, 25, 25);
  }
  // First eyes end
  
  //Second eyes heart //
  if (375 <= mouseX && mouseX <=430 && 85 <= mouseY && mouseY <= 140) {
  eatSound5.play();
  noStroke();
    fill('#f2d857'); ///yellow small
    circle(150, 175, 155);
  push();
  translate(118,160);
  scale(1.4);
  fill('#f22e2e');
  noStroke();
  beginShape();
  for (var a = 0; a < TWO_PI; a += 0.01) {
  var r = 1;
  var x = 16 * pow(sin(a),3);
  var y = -1*(13 * cos(a) - 5*cos(2*a) - 2*cos(3 * a) - cos(4 * a));            vertex(x, y);
    }
  endShape();
  pop();  
  push();
  translate(180,160);
  scale(1.4);
  fill('#f22e2e');
  noStroke();
  beginShape();
  for (var a2 = 0; a2 < TWO_PI; a2 += 0.01) {
  var r2 = 1;
  var x2 = 16 * pow(sin(a2),3);
  var y2 = -1*(13 * cos(a2) - 5*cos(2*a2) - 2*cos(3 * a2) - cos(4 * a2));            vertex(x2, y2);
    }
  endShape();
  pop();  
  //End Second eyes//
    
}    
//sad  thied eyes//
if (440 <= mouseX && mouseX <=495 && 85 <= mouseY && mouseY <= 140) {
 // eatSound.play();
eatSound3.play();
    noStroke();
    fill('#f2d857'); ///yellow small
    circle(150, 175, 155);
//bk//
push();
noStroke();
fill('#35bcf2');
  scale(0.6);

translate(330, 275);
rotate(PI / 12);
square(0,0, 30, 2, 15, 15, 13);
pop();

  
  
push();
noStroke();
fill('#35bcf2');
scale(0.6);
translate(175, 275);
rotate(PI / 2);
square(0,0, 30, 2, 15, 15, 13);
pop();
strokeWeight(3);
stroke('#333333');
noFill();
scale(2.8);
arc(42, 57, 13, 13, 0, PI);
arc(66, 57, 13, 13, 0, PI);

}

if (505 <= mouseX && mouseX <=560 && 85 <= mouseY && mouseY <= 140) {
//2-4 dead//
eatSound6.play();
  noStroke();
    fill('#f2d857'); ///yellow small
    circle(150, 175, 155);
scale(2)
stroke('#333333');
strokeWeight(3.5);
noFill();
translate(-52.5,-30)
line(105, 107, 115, 117);
line(115, 107, 105, 117);
line(140, 107, 150, 117);
line(150, 107, 140, 117);
//2-4 dead end//
}
if (310 <= mouseX && mouseX <= 365 && 185 <= mouseY && mouseY <= 240) {
//smail Mouth1//
eatSound.play();
fill('#f2d857'); ///yellow 
rect(85, 184,130,40,50,150,150); //back yellow 
  ellipse(151, 214, 75,75);
  
strokeWeight(5);
stroke('#333333');
line(115,191,187,190);
fill('#ffffff');
arc(151, 193, 72, 72, 0, PI);
fill('#333333');
arc(151, 202, 70, 70, 0, PI);
//smail Mouth1 END//
}
if (375<= mouseX && mouseX <= 430 && 185 <= mouseY && mouseY <= 240) {
eatSound2.play();
  fill('#f2d857'); ///yellow 
rect(85, 184,130,40,50,150,150); //back yellow 
  ellipse(151, 214, 75,75);
stroke('#333333');
scale(1.2);
translate(-276.5,-40);
fill('#ffffff')
strokeWeight(5);
ellipse(402.5, 213, 42, 42);
fill('#333333')
arc(402.5, 207, 40, 50,0,PI); 
}
  
if (410<= mouseX && mouseX <= 465 && 185 <= mouseY && mouseY <= 240) {
//hu Mouth3//
eatSound4.play();
  fill('#f2d857'); ///yellow 
rect(85, 184,130,40,50,150,150); //back yellow 
  ellipse(151, 214, 75,75);
strokeWeight(5);
fill('#333333' ); 
stroke('#333333');
scale(1.2);
translate(-340,-40);
line(450, 221.5, 487, 221)
arc(467, 221, 40, 40, PI, 0);  
}

if (505<= mouseX && mouseX <= 560 && 185 <= mouseY && mouseY <= 240) {
//merong mouth4//
  fill('#f2d857'); ///yellow 
rect(85, 184,130,40,50,150,150); //back yellow 
  ellipse(151, 214, 75,75);
stroke(51);
scale(1.55);
translate(-435,-75);
strokeWeight(5);
stroke('#333333');
fill('#e35c34');
line(514,205,551,205);
arc(532.5,207.5, 25, 35, 0,-PI);
fill('#cf4824');
line(532,205,532,215);
}
if (310 <= mouseX && mouseX <= 365 && 285 <= mouseY && mouseY <= 340) {
// Glasses//
scale(2.75);
translate(-283,-250);
  strokeWeight(2);
stroke('#333333');
  strokeWeight(2.5);
  line(311, 310, 314, 310);
  line(361, 310, 364, 310);
  fill('rgba(255,255,255,0.5)' ); 
  strokeWeight(1.5);
stroke('#333333');
  ellipse(326, 310, 23,23);
  ellipse(349, 310, 23,23);
}
//end Glasses//

if (375 <= mouseX && mouseX <= 430 && 285 <= mouseY && mouseY <= 340) {

  // shy//
  scale(2.5);
  translate(-343,-245);
  noStroke();
  fill('rgba(240,179,161,0.8)' ); 
  ellipse(385, 320, 15,15);
  ellipse(422, 320, 15,15);
  // shy end//
}
if (440 <= mouseX && mouseX <= 495 && 285 <= mouseY && mouseY <= 340) {

  // SUNGlasses//
  scale(2.65);
  translate(-411,-250);
  strokeWeight(2);
  stroke('#333333');
  strokeWeight(2.5);
  line(442, 307, 494, 307);
  fill('#333333' ); 
  arc(456, 307.5, 23,23, 0, PI);
  arc(480, 307.5, 23,23, 0, PI);
//end SUNGlasses//
}
if (505<= mouseX && mouseX <= 560 && 285 <= mouseY && mouseY <= 340) {
  //cat
eatSound7.play();

stroke('#333333');
scale(1.2);
fill('#ffffff')
strokeWeight(5); 
 noStroke();
 fill('#804337')
  translate(-276.5,-40);
  ellipse(402, 187, 12, 10);
  strokeWeight(2.5);
  stroke('#804337');
  line(360, 190,345, 190);
  line(360, 185,345, 182);
  line(360, 195,345, 200);
  strokeWeight(2.5);
  stroke('#804337');
  line(442, 190,457, 190);
  line(442, 185,457, 182);
  line(442, 195,457, 200);

  //cat
} 
  //defult
  if (120 <= mouseX && mouseX <= 175 && 14<= mouseY && mouseY <= 39) {
   noStroke();
    fill('#f2f2f2');
    rect(0, 0, 300, 350);
    square(44, 280,230,30);
    noStroke();
    fill('#f2d857');
    circle(150, 175, 155); 
} 
}
