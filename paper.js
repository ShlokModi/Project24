class Paper{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.2,
        }
        this.body = Bodies.circle(50,330,40,options);
        this.diameter = 40;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        //push();
        //translate(pos.x,pos.y);
        //rotate(angle);
        //ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,40,40);
        pop();
    }
};