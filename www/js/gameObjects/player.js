export default class Player {
    constructor (x, y, scene)
    {
        this.x = x;
        this.y = y;
        this.scene = scene;
        
        this.sprite = scene.impact.add.sprite(x, y, "player");
        this.sprite.body.name = "player";

        this.sprite.setActiveCollision();
        this.sprite.setMaxVelocity(125, 600).setFriction(100, 20);

        this.keys = scene.input.keyboard.createCursorKeys();

        var keys = ("wasdzxkl").split("");

        var self = this;
        keys.forEach(function(key)
        {
            self.keys[key] = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes[key.toUpperCase()]);
        });
    }

    update ()
    {
        let keys = this.keys;
        let sprite = this.sprite;
        let speed = 250;
        let jumpHeight = 200;

        if(keys.left.isDown || keys.a.isDown) 
        {
            sprite.setAccelerationX(-speed).setFriction(230, 20);
        }
        else if(keys.right.isDown || keys.d.isDown) 
        {
            sprite.setAccelerationX(speed).setFriction(230, 20);
        }else{
            sprite.setAccelerationX(0).setFriction(600, 20);
        }

        if((keys.z.isDown || keys.k.isDown) && sprite.body.standing)
        {
            sprite.setVelocityY(-jumpHeight);
        }
    }
}