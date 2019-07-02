//console.log("swatch is called");

class Swatch{
    constructor(colour,x,y,w,h){
        this.colour=colour;
        this.x=x
        this.y=y
        this.w=w
        this.h=h
       

        //kept up to date using the mouse move function
        this.xMouse = 0;
        this.yMouse = 0;
//These store the mouse coordinates at the time the mouse is pushed down
        this.xMouseStart = 0;
        this.yMouseStart = 0;

        this.insideSwatch = false;




        canvas.addEventListener('mousedown', this.mDown.bind(this));
        canvas.addEventListener('mousemove', this.mMove.bind(this));
        canvas.addEventListener('mouseup', this.mUp.bind(this));
    }

    mDown(e){
       // console.log("button down");

        this.xMouseStart=e.offsetX;
        this.yMouseStart=e.offsetY;
        if(this.insideSwatch){
            console.log(this.insideSwatch);
            Swatch.colour=this.colour;
            
        }
        
    

    }
 

    mMove(e){
        this.xMouse=e.offsetX;
        this.yMouse=e.offsetY;
        // console.log("yes its moving");
        this.insideSwatch=this.checkBoundary(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }


    mUp(e){
       // console.log("swatchup");


    }
update(){

    this.draw();

}

draw(){
    ctx.beginPath();
    ctx.rect(this.x,this.y,this.w,this.h);
    ctx.fillStyle=this.colour;
    if(this.insideSwatch){
        ctx.fillStyle="rgb(0,0,0)";
    }
    ctx.fill();
 
}

checkBoundary(xM, yM,x,y,w,h){
    console.log(this.xMouse);
    console.log(this.w);
if(xM>x && xM < x+w && yM > y && yM < y+h){
    return true;

}else{
    return false;
}

}

}
Swatch.colour="rgb(0,0,0)";
