console.log("main js called");

var BB = new Ball(300,300,20, colArray[0][5]);
BB.update();

var count = 0;
function animate(){
    count +=1
    console.log(count)
    count=count%100;



    window.requestAnimationFrame(animate);
}
