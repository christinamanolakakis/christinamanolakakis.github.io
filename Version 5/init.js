
canvas = document.querySelector('#myCanvas');
//compulsary for col array
var ctx = canvas.getContext('2d');
var width = 800; //width of canvas
var height = 600; //height of canvas
canvas.width = width;
canvas.height = height;

var colArray=[
//col array is when I declare the colours and when I want to use them for my colours and swatches it leads back to this rgb col array
[
    "rgb(255, 204, 204)","rgb(255, 229, 204)","rgb(255, 255, 204)",
    "rgb(229,255,204)","rgb(176,196,222)","rgb(204,255,204)",
    "rgb(204,255,229)","rgb(204,255,255)"
] ,
[
    "rgb(204,229,255)","rgb(229,204,255)","rgb(255,255,255)",
    "rgb(255,204,255)","rgb(255,204,229)","rgb(51,51,255)",
    "rgb(255,102,102)","rgb(255,0,153)"
], 
[
    "rgb(255,255,255)","rgb(153,153,153)","rgb(255,255,153)",
    "rgb(204,0,0)","rgb(255,71,51)","rgb(51,51,255)",
    "rgb(255,102,102)","rgb(255,255,153)"
]
]

