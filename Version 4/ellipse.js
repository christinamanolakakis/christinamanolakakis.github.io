//console.log("ellipse is called");

class Ellipse{
    constructor(xS, yS, xM, yM, c1){
        this.xC = (xS + xM)/2;
        this.yC = (yS + yM)/2;

        this.radiusX = Math.abs( (xM - xS)/2 );
        this.radiusY = Math.abs( (yM - yS)/2 );

        this.rotation = 0; 
        this.startAngle = 0;
        this.endAngle = 2*Math.PI;
        this.fill = c1;

    }

    update(){
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.ellipse(this.xC, this.yC, this.radiusX, this.radiusY, this.rotation, this.startAngle, this.endAngle);
            ctx.fillStyle = this.fill;
            ctx.fill();
    }

}