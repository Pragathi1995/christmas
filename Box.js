class Box{
    constructor(x,y,width,height,angle){
        var options={
        'restitution': 0.5,
        'friction': 1.0,
        'density': 0.01
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("images/gift1.png");
        this.visibility=255;
        World.add(world, this.body);
    }
    display(){
        if(this.body.speed<9.9){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0,0,110,90);
        pop();

        console.log(this.body.speed);
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visibility=this.Visibility-5;
            tint(255,this.Visibility);
            imageMode(CENTER);
            image(this.image,0,0,110,80);
            pop();
        }

    }
}