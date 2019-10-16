// import Player from "../gameObjects/player.js";

// let player;

// export default class MainScene extends Phaser.Scene {

//     constructor ()
//     {
//         super('mainScene');
//     }

//     preload ()
//     {
//         this.load.image("block", "assets/images/block.png");
//         this.load.image("player", "assets/images/player.png");
//         this.load.image("waterBeaker", "assets/images/waterBeaker.png");
//     }

//     create ()
//     {
//         var block = this.impact.add.sprite(120, 380, "block");
    
//         block.setBodyScale(600 / block.width, 50 / block.height).setGravity(0).setFixedCollision();
        

//         var waterBeaker = this.impact.add.sprite(200, 330, "waterBeaker");
//         waterBeaker.setActiveCollision().setBounce(0);
//         waterBeaker.body.name = "waterBeaker";

//         player = new Player(400, 200, this);

//         window.player = player;

//         this.impact.world.on('collide', this.collide);

//     }

//     update ()
//     {
//         player.update();
//     }

//     render ()
//     {
        
//     }

//     collide (bodyA, bodyB, axis)
//     {
//         console.log.apply(null, arguments);
//     }
// }

import Player from "../gameObjects/player.js";

let player;

export default class MainScene extends Phaser.Scene {

    constructor ()
    {
        super('mainScene');
    }

    preload ()
    {
        this.load.image("block", "assets/images/block.png");
        this.load.image("player", "assets/images/player.png");
        this.load.image("waterBeaker", "assets/images/waterBeaker.png");
    }

    create ()
    {
        var block = this.physics.add.sprite(400, 380, "block");
    
        block.setScale(600 / block.width, 50 / block.height);
        block.setImmovable(true);
        block.body.allowGravity = false;

        var waterBeaker = this.physics.add.sprite(200, 330, "waterBeaker");

        player = new Player(400, 200, this);

        this.physics.add.collider(player.sprite, block);
        this.physics.add.collider(waterBeaker, block);

        this.physics.add.collider(waterBeaker, player.sprite);

        window.player = player;
    }

    update ()
    {
        player.update();
    }

    render ()
    {
        
    }
}