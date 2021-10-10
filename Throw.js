class Throw {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 10
        }
        this.pointB = pointB;
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }

    fly(){
        this.throw.bodyA = null;
    }

   // Launch(bodyA){
     //   this.throw.bodyA = bodyA;
    //}

    attach(body){
        this.throw.bodyA=body;

    }
    display(){
     if(this.throw.bodyA){
       var pointA  = this.throw.bodyA.position;
       var pointB = this.pointB;
       push ();
       stroke (48,22,8);
       strokeWeight(0);
      line(pointB.x,pointB.y,pointA.x,pointA.y);
      pop ();
     }
    }
}