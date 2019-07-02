// console.log("main js called");

var dra = new ControlObject(canvas);
var buttonOne = new Button( "Rectangle", 100,20,200,50,colArray[1][4]);
var buttonTwo = new Button( "Ellipse", 100,100,200,50,colArray[0][5]);
var buttonThree = new Button( "Circle", 100,180,200,50,colArray[2][2]);
var swatchone = new Swatch("rgb(255, 0, 0)", 100,380,60,50);
var swatchtwo = new Swatch("rgb(40, 255, 255)", 180,380,60,50);
var swatchthree = new Swatch("rgb(127, 0, 255)",100,320,60,50);
var swatchfour = new Swatch("rgb(102,255,102)", 180,320,60,50);
var swatchfive = new Swatch("rgb(255,255,0)", 100,440,60,50);
var swatchsix = new Swatch("rgb(204,0,102)", 180,440,60,50);
var swatchseven = new Swatch("rgb(102,0,102)", 260,440,60,50);//dark purple
var swatcheight = new Swatch("rgb(255,102,255)", 260,380,60,50);//baby pink
var swatchnine = new Swatch("rgb(255,255,255)", 260,320,60,50); //white




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
    

    dra.update();




    window.requestAnimationFrame(animate);
}

animate();