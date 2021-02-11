class BallPen {
    constructor(x,y){
        var option = {
            restitution: 0.5,
            friction: 0,
            frictionAir: 0.0,
            slop: 1,
            inertia: Infinity,
            density:0.2,
            isStatic :false
        };
        this.body = Bodies.rectangle(x,y,150,150,option);  
        this.x = x;
        this.y = y;
        Body.setVelocity(this.body, {x:250,y:50});
        World.add(world,this.body);
    }
    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill("#66340C");
        ellipse(0,0,150,150);
        pop();
    }

}