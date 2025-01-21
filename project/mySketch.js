

 let xValue = 350;

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background("pink");
  eye()
  egg()
}
   
  
   
   function eye() {
      fill ("white")  
    ellipse(90, 50, 80, 40);
    circle(90, 50, 25); 
    fill(77, 51, 18)
    circle(90, 51, 10);
    
    fill ("white") 
    ellipse(200, 50, 80, 40);
    circle(200, 50, 25);
    fill(77, 51, 18)
    circle(200, 51, 10);
   }
   
   function egg () {
    fill(200,10,0);
    ellipse(xValue,200,50,70);
    xValue = xValue - 50;
   }


