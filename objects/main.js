console.log("main is called");


var myRectangleA = new Rectangle(100,100,20,30,colArray[1][4]);

myRectangleA.update();

var myRectangleB = new Rectangle(50,50,10,25,colArray[1][5]);

myRectangleB.update();

var objectSet = []

var myROne = new Rectangle(400,200,15,50,colArray[2][2])
var myRTwo = new Rectangle(500,90,15,60,colArray[1][2])
var myRThree = new Rectangle(600,150,15,70,colArray[0][4])
var myRFour = new Rectangle(700,90,15,40,colArray[2][5])




objectSet.push(myROne)
objectSet.push(myRTwo)
objectSet.push(myRThree)
objectSet.push(myRFour)

for(var i=0; i<objectSet.length;i++){
      objectSet[i].update()

}
