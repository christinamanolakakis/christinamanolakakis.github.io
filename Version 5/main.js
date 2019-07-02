

var dra = new ControlObject(canvas);
var buttonOne = new Button( "Rectangle", 100,40,220,50,colArray[0][4]); //colour of the button and size and declaring rectangle
var buttonTwo = new Button( "Ellipse", 100,100,220,50,colArray[0][4]);//colour of the button and size and declaring ellipse
var buttonThree = new Button( "Circle", 100,160,220,50,colArray[0][4]);//colour of the button and size amd declaring cicle
var swatchone = new Swatch(colArray[0][0],100,350,60,50); //the different positions of the swatches 
var swatchtwo = new Swatch(colArray[0][1], 180,350,60,50);//baby orange
var swatchthree = new Swatch(colArray[0][2],100,420,60,50);// baby yellow
var swatchfour = new Swatch(colArray[0][3], 180,420,60,50); //light green
var swatchfive = new Swatch(colArray[0][5], 100,490,60,50);//green
var swatchsix = new Swatch(colArray[0][6], 180,490,60,50);//mint
var swatchseven = new Swatch(colArray[0][7], 260,490,60,50);//turqouise
var swatcheight = new Swatch(colArray[1][0], 260,420,60,50);//baby blue
var swatchnine = new Swatch(colArray[1][1], 260,350,60,50); //purple
var swatchten = new Swatch(colArray[1][2], 100,280,60,50);
var swatcheleven = new Swatch(colArray[1][3], 180,280,60,50);
var swatchtwelve = new Swatch(colArray[1][4], 260,280,60,50);






function animate(){
    ctx.clearRect(0, 0, width, height);

    buttonOne.update();
    buttonTwo.update();
    buttonThree.update();
    swatchone.update();
    swatchtwo.update();
    swatchthree.update();
    swatchfour.update();
    swatchfive.update();
    swatchsix.update();
    swatchseven.update();
    swatcheight.update();
    swatchnine.update();
    swatchten.update();
    swatcheleven.update();
    swatchtwelve.update();
  
    
//updating all the swatches and buttons
    dra.update();




    window.requestAnimationFrame(animate);
}

animate();