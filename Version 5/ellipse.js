
//coding for ellipse shape
class Ellipse{
    constructor(xS, yS, xM, yM, c1){
        this.xC = (xS + xM)/2;
        this.yC = (yS + yM)/2;
//how to draw the ellipse
        this.radiusX = Math.abs( (xM - xS)/2 );//math.abs is always positive
        this.radiusY = Math.abs( (yM - yS)/2 );

        this.rotation = 0; 
        this.startAngle = 0;
        this.endAngle = 2*Math.PI;
        this.fill = c1; //not a colour until the swatch is chosen 
        //the shape of the ellipse and how it is drawn

    }

    update(){
        this.draw();
        //when pressed the button the user is able to draw the ellipse
    }

    draw(){
        ctx.beginPath();
        ctx.ellipse(this.xC, this.yC, this.radiusX, this.radiusY, this.rotation, this.startAngle, this.endAngle);
        //making sure the ellipse shape is only to a certain radius and angle
            ctx.fillStyle = this.fill;
            //filled colour when swatch is selected
            ctx.fill();
    }

}