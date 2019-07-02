
// code for the circle shape
    class Circle{
        constructor(xS, yS, xM, yM, c1){
            this.xC = (xS + xM)/2; // centre x
            this.yC = (yS + yM)/2; // centre y
            this.radiusX = Math.abs( (xM - xS)/2 ); //Math.abs is to make the values always positive
            this.radiusY = Math.abs( (yM - yS)/2 ); 
            this.r = 100; // radius to be size 100
            if(this.radiusX <this.radiusY){ // radiusY over radiusX
                this.r = this.radiusX;
            }
                else{
                    this.r = this.radiusY
                };
            //how big the circles radius will be
            this.fill = c1;
            // the fill is the colour chosen with the swatches 
        }
    
        update(){
            // updating the function to draw
            this.draw();

        }
    
        draw(){
            ctx.beginPath();
            //the start of the circle
            ctx.arc(this.xC, this.yC, this.r, 0, 2*Math.PI); 
            ctx.fillStyle = this.fill;
            ctx.fill();
          // fill is what the desired swatch colour is
        }
    }

            
        
    
    