console.log("functions called");


function drawCircle(x,y,r,fillC, strokeC, lineW, fill, stroke){

  ctx.beginPath();
  ctx.arc(x,y,r,0,2*Math.PI);
  if(fill == true){
      ctx.fillStyle = fillC;
      ctx.fill();
   }
if(stroke == true ){
    ctx.lineWidth = lineW;
    ctx.strokeStyle = strokeC;
    ctx.stroke();
   }
}

drawCircle(100, 200, 50, colArray[5], colArray[6], 8, true, true);
drawCircle(400, 200, 10, colArray[5], colArray[6], 8, true, true);
drawCircle(200, 200, 40, colArray[2], colArray[0], 8, true, true);
drawCircle(100, 200, 50, colArray[5], colArray[6], 6, true, true);