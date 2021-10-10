class Superhero {
    constructor(x,y,r){
        var options = {
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(x,y,r/2,options);
        this.x =x;
        this.y =y
        this.r= r;
        this.image = loadImage("Superhero-01.png");
        World.add(world, this.body);
    }
    display(){
     var angle = this.body.angle;
     var pos = this.body.position;
     push()
     translate(pos.x, pos.y);
     imageMode(CENTER);
     image(this.image,0,0,this.r+150,this.r);
     pop();
    }
}