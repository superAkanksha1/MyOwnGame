class RBubble{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, this.r, options);
		this.image = loadImage("Red.png");
		World.add(world, this.body);
	}

	display()
	{
		var Pos=this.body.position;	
		push()
		translate(Pos.x, Pos.y);
		rotate(this.body.angle)
		fill("red");
		strokeWeight(0);
		imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);	
		pop()
 }
}