class Tree{
    constructor(x,y){
        var option={
            isStatic : true
        }
        this.tree = Bodies.rectangle(x,y,20,100,option);
        this.image = image;
        this.image = loadImage("tree.png");
        World.add(world,this.tree);
    }
    display(){
        var pos = this.tree.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,250,350);
    }
};