
class ControlObject{
    constructor(canvas){
//Always the most recent postiton of the mouse
//kept up to date using the mouse move function
        this.xMouse = 0;
        this.yMouse = 0;
//These store the mouse coordinates at the time the mouse is pushed down
        this.xMouseStart = 0;
        this.yMouseStart = 0;
//This will be set to true when the user holds the mouse down
//When the mouse is up it will be set to false
        this.mouseDown = false;
//These store the width and the height of the box made by xmousestart and xmouse coordinates
//And same for ys
        this.w = 0;
        this.h = 0;

//every time and event happens it directs to the functions mdown mmove or mup
// the events are attached to the canvas
        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));
//This is a holder for the objects that will be created
        this.objectset = []


        this.selectedcolour = "rgba(204,255,204,0.2)";
       
    }

    mDown(e){
        this.xMouseStart=e.offsetX;
        this.yMouseStart=e.offsetY;
        this.mouseDown=true;
    }
    //When the user drags the mouse down this uses the functions to

    mMove(e){
        this.xMouse=e.offsetX;
        this.yMouse=e.offsetY;
    }
    mUp(e){
        this.mouseDown = false;
        // create the rectangle
       // var myROne = new Rectangle(this.xMouseStart,this.yMouseStart,this.w,this.h,this.selectedcolour)
        //this.objectset.push(myROne)
       // console.log(Button.shape)
        if(Button.shape=="Rectangle"){
            var myROne = new Rectangle(this.xMouseStart,this.yMouseStart,this.w,this.h,Swatch.colour)
            this.objectset.push(myROne)
        }
        if(Button.shape=="Ellipse"){
            var xtina=new Ellipse(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, Swatch.colour);
            this.objectset.push(xtina);
        }
        if(Button.shape=="Circle"){
            var circle=new Circle(this.xMouseStart, this.yMouseStart,this.xMouse, this.yMouse, Swatch.colour);
            this.objectset.push(circle);

            
        }

    }
    update(){
        // in here write code to draw a background rectangle



        //loop needed
        for(var i=0 ; i< this.objectset.length ; i++){
            this.objectset[i].update();

        }

        this.w=this.xMouse - this.xMouseStart;
        this.h=this.yMouse - this.yMouseStart;
        if(this.mouseDown){
           // console.log("mouse is down");
            this.draw();
        }


    }

    draw(){
        this.drawRect(this.xMouseStart, this.yMouseStart, this.w, this.h);

    }

    drawRect(x,y,w,h){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth =1;
        ctx.strokeStyle = "rgb(0,153,153)";
        ctx.stroke();
    }


    


}