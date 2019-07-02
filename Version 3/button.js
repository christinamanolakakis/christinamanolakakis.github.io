console.log("rectangle is called");

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
//These store the mouse coordinates at the time the mouse is pushed down
        this.xMouseStart = 0;
        this.yMouseStart = 0;

        this.insideButton = false;




        canvas.addEventListener('mousedown', this.mDown.bind(this));
        canvas.addEventListener('mousemove', this.mMove.bind(this));
        canvas.addEventListener('mouseup', this.mUp.bind(this));
    }

    mDown(e){
        console.log("button down");
        this.xMouseStart=e.offsetX;
        this.yMouseStart=e.offsetY;
        if(this.insideButton){
            Button.shape=this.name;
        }
        
    

    }
 

    mMove(e){
        console.log("yes its moving");
        this.insideButton=this.checkBoundary(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
        console.log(this.insideButton);
        this.xMouse=e.offsetX;
        this.yMouse=e.offsetY;

    }
    mUp(e){
        console.log("button up");


    }
update(){

    this.draw();

}

draw(){
    ctx.beginPath();
    ctx.rect(this.x,this.y,this.w,this.h);
    ctx.fillStyle=this.fill;
    if(this.insideButton == true){
        ctx.fillStyle="rgb(0,50,87)"
    }
    ctx.fill();
    ctx.fillStyle="rgb(0,100,100)";
    var myFont= "bold 30px sans-serif";
    ctx.font=myFont;
    ctx.fillText(this.name,this.x,this.y+this.h);
}

checkBoundary(xM, yM,x,y,w,h){
if(xM>x && xM < x+w && yM > y && yM < y+h){
    return true;

}else{
    return false;
}

}

}
Button.shape=""
