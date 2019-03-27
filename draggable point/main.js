console.log("main js called");





function animate(){
    ctx.clearRect(0, 0, width, height);

   
    


    window.requestAnimationFrame(animate);
}

animate();