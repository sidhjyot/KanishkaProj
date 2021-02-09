var homescreen,contactScreen, galleryScreen;

function setup() {
  createCanvas(displayWidth,displayWidth);
 
  homescreen=new MainScreen();
  
}

function draw() {
  background(25,125,25);  
  homescreen.display();
}