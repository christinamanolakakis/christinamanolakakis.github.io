console.log("main js called");

var dra = new ControlObject(canvas);

var xtina=new Ellipse(100,50,300,300,colArray[0][5]);

function animate(){
    ctx.clearRect(0, 0, width, height);

   
    xtina.update();
    dra.update();




    window.requestAnimationFrame(animate);
}

animate();