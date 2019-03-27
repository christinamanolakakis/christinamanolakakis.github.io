console.log("main js called");


var FDOne = new FiveDot(400,100,60, colArray[0][4], colArray[0][8],  colArray[0][7]);
var FDTwo = new FiveDot(100,200,180, colArray[1][5], colArray[2][7],  colArray[2][1]);
var FDThree = new FiveDot(600,200,30, colArray[1][4], colArray[0][6],  colArray[0][7]);
FDOne.update();
FDTwo.update();
FDThree.update();
