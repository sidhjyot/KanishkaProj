var homescreen,contactScreen, galleryScreen;

function setup() {
  createCanvas(windowWidth,windowHeight);
 
  homescreen=new MainScreen();
  
}

function draw() {
  background(25,125,25);
  homescreen.display();
}