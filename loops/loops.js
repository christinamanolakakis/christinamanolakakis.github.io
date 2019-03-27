console.log("loops js called" )
// drawCircle x, y, r, fillC(rgb string), strokeC(rgb string),
// lineWidth, fill(boolean), strke(boolean)
function drawCircle(x,y,r, fillC, strokeC,lineW,fill,stroke){

    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    if(fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();
    }
    if(stroke == true){
        ctx.lineWidth = lineW;
        ctx.strokeStyle = strokeC;
        ctx.stroke();
    }
}
var i = 0;
drawCircle(100 +70*1, 200, 30, colArray[0][4], colArray[0][6], 8, true, true);
i=1;
drawCircle(100 +70*1,200,30, colArray[0][4], colArray[0][6], 8, true, true);
i=2;
drawCircle(100 +70*1, 200, 30, colArray[0][4], colArray[0][6], 8, true, true);
i=3;
drawCircle(100 +70*1, 200, 30, colArray[0][4], colArray[0][6], 8, true, true);                       