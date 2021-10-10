class Monster {
    constructor(x,y,r){
        var options = {
            friction:0,
            density:5
        }
        this.body = Bodies.circle(x,y,r/2,options);
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("Monster-01.png");
        World.add(world, this.body);
    }
    display(){
     push()
     translate(this.body.position.x, this.body.position.y);
     imageMode(CENTER);
     image(this.image,0,0,this.r,this.r);
     pop();
    }
}