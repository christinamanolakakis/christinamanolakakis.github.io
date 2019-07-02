console.log("main js called");

var dra = new ControlObject(canvas);
var buttonOne = new Button( "Rectangle", 100,20,200,50,colArray[0][4]);
var buttonTwo = new Button( "Ellipse", 100,100,200,50,colArray[0][5]);
var buttonThree = new Button( "Circle", 100,180,200,50,colArray[1][2]);

function animate(){
    ctx.clearRect(0, 0, width, height);

    buttonOne.update();
    buttonTwo.update();
    buttonThree.update();

    dra.update();




    window.requestAnimationFrame(animate);
}

animate();