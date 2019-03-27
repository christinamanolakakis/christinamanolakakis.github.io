console.log("main 1 js called");

objectSet = [];

var BBOne = new BouncingBall(100,200,190,270, colArray[0][8], 10, 2, 1);
var BBTwo = new BouncingBall(300,200,190,30, colArray[0][8], 10, -3, 1);
var BBThree = new BouncingBall(200,200,190,100, colArray[0][8], 10, 1, 1);
objectSet.push(BBOne,BBTwo,BBThree);


function animate(){
    ctx.clearRect(0, 0, width, height);

    for(var i = 0; i<objectSet.length; i++){
        objectSet[i].update();
    }
    


    window.requestAnimationFrame(animate);
}

animate();