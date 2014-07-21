/*----
  Name of your program!
  Programmed by You!
  Documentation!
  ----*/

//Globals
var keysDown = []; //Map of which keys are being pressed

//Constants
var CANVAS_WIDTH = 400;
var CANVAS_HEIGHT = 400
var FRAMERATE = 30;
var W = 87;
var A = 65;
var S = 83;
var D = 68;

//Classes

//Functions
var clearCanvas = function()
{
   stroke(255, 255, 255);
   fill(255, 255, 255);
   rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
};

void keyPressed()
{
   keysDown[keyCode] = true;
};

void keyReleased()
{
   keysDown[keyCode] = false;
};


void mousePressed()
{
   
}

void mouseReleased(){
   
   
}

void setup()
{	
   size(CANVAS_WIDTH, CANVAS_HEIGHT);
   frameRate(FRAMERATE);
};

void draw()
{
   clearCanvas();
};
