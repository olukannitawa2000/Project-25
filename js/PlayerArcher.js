class PlayerArcher {
    constructor(x, y, width, height) {
        var options = {
          isStatic: true
        }
    
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("./assets/playerArcher.png");
         World.add(world, this.body);
      }
    
       display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        Matter.Body.setAngle(this.body,-PI/2);

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
     }
    
  
       }