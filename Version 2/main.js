console.log("main js called");

var dra = new ControlObject(canvas);


function animate(){
    ctx.clearRect(0, 0, width, height);
    dra.update();



    window.requestAnimationFrame(animate);
}

animate();