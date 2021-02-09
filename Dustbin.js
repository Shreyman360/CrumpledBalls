class Dustbin {
    constructor(x,y,width,height){

        this.image = loadImage("Dustbin.png");

        var options={
            isStatic:true
        }
        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x,pos.y)
        rect(0,0,this.width,this.height);
        imageMode(CENTER)
        image(this.image, 0, 0, 180, 150);
        pop();
    }
}