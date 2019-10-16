export default class Player {
    constructor (x, y, scene)
    {
        this.x = x;
        this.y = y;
        this.scene = scene;
        
        this.sprite = scene.physics.add.sprite(x, y, "player");
        this.sprite.setMaxVelocity(250, 600).setDrag(100, 20);

        this.keys = scene.input.keyboard.createCursorKeys();
    }

    update ()
    {
        let keys = this.keys;
        let sprite = this.sprite;
        let speed = 500;
        let jumpHeight = 400;

        if(keys.left.isDown) 
        {
            sprite.body.setAccelerationX(-speed).setDrag(230, 20);
        }
        else if(keys.right.isDown) 
        {
            sprite.body.setAccelerationX(speed).setDrag(230, 20);
        }else{
            sprite.setAccelerationX(0).setDrag(600, 20);
        }

        if(keys.space.isDown && sprite.body.touching.down)
        {
            sprite.body.setVelocityY(-jumpHeight);
        }
    }
}