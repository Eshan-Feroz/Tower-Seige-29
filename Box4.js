class Box4 extends BaseClass {
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
        fill(200, 0, 50);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        //pop();
      }
  };
  