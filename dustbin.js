class Dustbin{
    constructor(){
        boxb = new Ground(1000,580,200,20,"grey");
        boxl = new Ground(910,530,20,100,"grey");
        boxr = new Ground(1090,530,20,100,"grey");
        this.image = loadImage("dustbingreen.png");
        
    }
    display(){
        boxb.display();
        boxl.display();
        boxr.display();
        imageMode(CENTER);
        image(this.image,1000,530,210,110);
    }
}