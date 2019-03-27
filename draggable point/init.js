console.log("init.js is called")


canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;

var colArray=[
    [
    "rgb(255,255,255)","rgb(153,153,153)","rgb(0,0,0)",
    "rgb(204,0,0)","rgb(255,204,51)","rgb(51,51,255)",
    "rgb(255,102,102)","rgb(255,255,153)"
],
[
    "rgb(154,154,0)","rgb(150,150,150)","rgb(1,1,1)",
    "rgb(204,0,0)","rgb(255,204,51)","rgb(51,51,255)",
    "rgb(255,102,102)","rgb(255,255,153)"
],
[

    "rgb(255,255,255)","rgb(153,153,153)","rgb(0,0,0)",
    "rgb(204,0,0)","rgb(255,204,51)","rgb(51,51,255)",
    "rgb(255,102,102)","rgb(255,255,153)"


]
]
console.log(colArray[0]);