class Box1 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      //this.image = loadImage("sprites/wood1.png");
    }
    display(){
        //var angle = this.body.angle;
        //push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        rectMode(CENTER);
        fill(45, 140, 255);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        //pop();
      }
  };
  