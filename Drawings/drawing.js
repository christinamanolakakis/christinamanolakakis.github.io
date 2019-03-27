console.log("drawing js is called");
canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height; 

// complete drawing of a rectangle
ctx.strokeStyle = "rgba(255,100,90)";
ctx.fillStyle = "rgb(50,255,90)";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.rect(100,100,300,50);
ctx.stroke();
ctx.fill();

// complete drawing of a rectangle
ctx.strokeStyle = "rgba(255,100,90)";
ctx.fillStyle = "rgb(50,255,90)";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.rect(500,100,300,50);
ctx.stroke();
ctx.fill();

// draw circle
ctx.fillStyle='rgb(255,204,51)';
ctx.strokeStyle='rgb(51,51,255)';
ctx.lineWidth=10;
ctx.beginPath();
ctx.arc(200,60,50,0 , 2*Math.PI);
ctx.stroke();
ctx.fill();

// add text
ctx.fillStyle="rgb(0,0,255)";
var myFont= "bold 30px monspace";
ctx.font=myFont;
ctx.fillText("Hello World",300,50);
