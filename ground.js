class ground{show(){push;rectMode(CENTER);fill(255);rect(this.body.position.x,this.body.position.y,this.w,this.h);pop();}
contr(x,y,w,h){
    var options={ isStatic:true } 
    this.x=x; this.y=y; this.w=w this.h=h this.body=Bodies.rectangle
    (x, y, w, h , options); World.add(world, this.body)
}}