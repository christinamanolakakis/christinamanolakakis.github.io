
class Swatch{
    // class Button x,y,w,h,fill
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
        //when pressed inside the swatch declared as false




        canvas.addEventListener('mousedown', this.mDown.bind(this));
        canvas.addEventListener('mousemove', this.mMove.bind(this));
        canvas.addEventListener('mouseup', this.mUp.bind(this));
    }

    mDown(e){

        this.xMouseStart=e.offsetX;
        this.yMouseStart=e.offsetY;
        if(this.insideSwatch){
            
            Swatch.colour=this.colour; 
            //
            
        }
        
    

    }
 

    mMove(e){
        this.xMouse=e.offsetX;
        this.yMouse=e.offsetY;
        this.insideSwatch=this.checkBoundary(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }


    mUp(e){


    }
update(){

    this.draw();

}

draw(){
    ctx.beginPath();
    ctx.rect(this.x,this.y,this.w,this.h);
    ctx.fillStyle=this.colour;
    ctx.strokeStyle = "rgb(255,255,255)";
    //colour around the swatches for a tidy look
    if(this.insideSwatch){
        ctx.strokeStyle="rgb(128,128,128)";
        //colour when hovered over the swatch
    }

    ctx.fill();
    ctx.stroke();
 
}

checkBoundary(xM, yM,x,y,w,h){
if(xM>x && xM < x+w && yM > y && yM < y+h){
    return true;
    //swatch boundary

}else{
    return false;
}

}

}
Swatch.colour="rgb(0,0,0)";
