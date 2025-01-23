

 let xValue = 350;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0,177,177);
  eye()
  nose()
}
   
  
   
   function eye() {
      fill ("white")  
    ellipse(90, 50, 80, 40);
    fill (105,50,30)
    circle(90, 50, 25); 
    fill("black")
    circle(90, 51, 10);
    
    fill ("white") 
    ellipse(200, 50, 80, 40);
    fill (105,50,30)
    circle(200, 50, 25);
    fill("black")
    circle(200, 51, 10);
   }
   
   function nose () {
    fill(222,121,27);
    triangle(xValue,100,150,100,100,70);
    xValue = xValue - 20;
   }


