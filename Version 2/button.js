console.log("rectangle is called");

 class Button{
    constructor(name,x,y,w,h,c1){
        this.name=name;
        this.x=x
       this.y=y
       this.w=w
      this.h=h
       this.fill=c1
    }
    
update(){

    this.draw();

}

 draw(){
    ctx.beginPath();
    ctx.rect(this.x,this.y,this.w,this.h);
    ctx.fillStyle=this.fill;
    ctx.fill();
    ctx.fillStyle="rgb(0,100,100)";
    var myFont= "bold 30px sans-serif";
    ctx.font=myFont;
    ctx.fillText(this.name,this.x,this.y+this.h);
}

}
