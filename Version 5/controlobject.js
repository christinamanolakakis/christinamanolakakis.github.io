
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
        this.insideBoundary = false; 
        this.dragging = false;
//These store the width and the height of the box made by xmousestart and xmouse coordinates
//And same for ys
        this.w = 0;
        this.h = 0;

    // background
        this.x = 350;
        this.y = 40;
        this.backWidth = 400;
        this.backHeight = 500;

//every time and event happens it directs to the functions mdown mmove or mup
// the events are attached to the canvas
        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));
// if mouse is down and inside drawing boundary, dragging will be true
        this.objectset = [] //holder for the objects


        this.selectedcolour = "rgba(255,218,185,0.2)";
     //colour when hovering over the colour swatches  


    }

    mDown(e){
        this.xMouseStart=e.offsetX;
        this.yMouseStart=e.offsetY;
        this.mouseDown=true;
        if(this.insideBoundary){
            this.dragging = true;

        }
    }
    // this down function is when the object is held down and keeping it inside the boundary without being able to drag it

    mMove(e){
        this.xMouse=e.offsetX;
        this.yMouse=e.offsetY;
        this.insideBoundary=this.checkBoundary(this.xMouse,this.yMouse,this.x,this.y,this.backWidth,this.backHeight);
        // checking the boundary of how far the user can draw the object
    

    }
    mUp(e){
        if(Button.shape=="Rectangle"  && this.dragging && this.insideBoundary){ //calling the button rectangle
            var myROne = new Rectangle(this.xMouseStart,this.yMouseStart,this.w,this.h,Swatch.colour)// when the rectangle is selected and what swatch is chosen
            this.objectset.push(myROne)
        }
        if(Button.shape=="Ellipse" && this.dragging && this.insideBoundary){ // calling the button ellipse
            var ellipse=new Ellipse(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, Swatch.colour);//when the ellipse is selected and what swatch is chosen
            this.objectset.push(ellipse);
        }
        if(Button.shape=="Circle"  && this.dragging && this.insideBoundary){ //calling the button circle
            var circle=new Circle(this.xMouseStart, this.yMouseStart,this.xMouse, this.yMouse, Swatch.colour);//when the circle is selected and the commonds and swatch selected
            this.objectset.push(circle);

            
        }
        this.mouseDown = false;
        this.dragging = false;
        //declaring when mouse down and dragging its false so its just dragging and not making a shape yet

    }
    update(){
    ctx.beginPath();
    //boundary of where the user can draw shapes
    ctx.rect(this.x,this.y,this.backWidth,this.backHeight);
    ctx.fillStyle="rgb(245,245,245)";
    //white colour for the rectangle boundary
    ctx.fill();
        
        
        //loop
        for(var i=0 ; i< this.objectset.length ; i++){
            this.objectset[i].update();

        }

        this.w=this.xMouse - this.xMouseStart;
        this.h=this.yMouse - this.yMouseStart;
        if(this.dragging && this.insideBoundary){
            this.draw();
        }
//to make sure when dragging the object outside of the rectangle the user is not able to

    }

    draw(){
        this.drawRect(this.xMouseStart, this.yMouseStart, this.w, this.h);

    }

    drawRect(x,y,w,h){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        //dragging shape
        ctx.lineWidth =1;
        ctx.strokeStyle = "rgb(250,128,114)";
        //tangerine colour used to draw the shape
        ctx.stroke();
    }



    checkBoundary(xM, yM,x,y,w,h){
        if(xM>x && xM < x+w && yM > y && yM < y+h){
            return true;
        //boundary for the chosen rectangle shape
        }else{
            return false;
            //if outside the boundary won't allow 
        }
        
        }

    }



