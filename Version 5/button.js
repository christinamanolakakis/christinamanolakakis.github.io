

class Button{
    constructor(name,x,y,w,h,c1){
        this.name=name;
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.fill=c1

//kept up to date using the mouse move function
        this.xMouse = 0;
        this.yMouse = 0;
//these store the mouse coordinates at the time the mouse is pushed down
        this.xMouseStart = 0;
        this.yMouseStart = 0;

        this.insideButton = false;
// this means that when the mouse is hovering over a button it makes it click



        canvas.addEventListener('mousedown', this.mDown.bind(this));
        canvas.addEventListener('mousemove', this.mMove.bind(this));
        canvas.addEventListener('mouseup', this.mUp.bind(this));
    }
// these are when pressing on the button it commands what it does with mouse down, move and up
    mDown(e){
        this.xMouseStart=e.offsetX;
        this.yMouseStart=e.offsetY;
        if(this.insideButton){
            Button.shape=this.name;
        }
     }
// this is declaring when the mouse is down inside the button it will connect to the certain shape it says(rectangle,circle,ellipse)
 
    mMove(e){
        this.insideButton=this.checkBoundary(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
        this.xMouse=e.offsetX;
        this.yMouse=e.offsetY;
//The boundary in when pressing the button in where it can be dragged from in the boundary which is a canvas
    }
    mUp(e){
// mouse up

    }
update(){

    this.draw();
//the overall update for the coding above which commands the site to work
}

draw(){
    ctx.beginPath();
    //where to start 
    ctx.rect(this.x,this.y,this.w,this.h);
    //rectangle
    ctx.fillStyle=this.fill;
    if(this.insideButton == true){
        //true to declare to continue steps from pressing the button
      ctx.fillStyle="rgb(255,255,224)";
      //colour for inside the button
    }
    ctx.fill();
    ctx.fillStyle="rgb(255,228,225)";
    //colour of the text in button
    var myFont= "bold 30px sans-serif";
    //font in the text in button
    ctx.font=myFont;
    ctx.textAlign = "center";
    const baseLine = ['middle'];
    //putting the text in the middle of the button
    ctx.fillText(this.name,200,this.y+35);
    //making the text and the right height and centre of the button
}

checkBoundary(xM, yM,x,y,w,h){
if(xM>x && xM < x+w && yM > y && yM < y+h){
    return true;
//inside the rectangle boundary where I have chosen to be the limit of where the user can draw their shapes

}else{
    return false;
// if the user drags outside the boundary it will not make a shape and not allow it
}

}

}
Button.shape=""
//the button shape is out of 3 options of rectangle, circle and ellipse
