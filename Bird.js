class Bird extends BaseClass {
  constructor(x,y){
    
    super(x,y,50,50);
    //this.body.isStatic=true;
    this.image = loadImage("sprites/bird.png");
  }

  display() {
   // this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    //image(this.image,mouseX,mouseY,50,50)
    super.display();

  }
}
