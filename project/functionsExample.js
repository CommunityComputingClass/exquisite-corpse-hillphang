
ellipse(x-5,y,30,30)
function setup() {
    createCanvas(600, 600);
   background("pink")
    eyes(200,200);
    eyes(100,300)
   
 }
 
 function draw() {
 }
 
 function eyes(x,y) {
let color = "red";
let colors = ["red", "green", "blue"];
fill(color)
ellipse(x-5,y,30,30)
fill(colors[1])
 //left eye
  fill("white")
  ellipse(x, y, 80, 50);
  fill("black")
  ellipse(x-5,y,30,30)
  fill("white")
  rect(x-10, y-10, 10, 10);
   
 //right eye
  fill("white")
  ellipse(x+200, y, 80, 50);
  fill("black")
  ellipse(x+195,y,30,30)
  fill("white")
  rect(x+190, y-10, 10, 10);
 }