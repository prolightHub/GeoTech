import Player from "../gameObjects/player.js";

let player;
var levelHandler = {};

const TILES = { 
    BLOCK: 1,
    SAVEBLOCK: 2,
    DOORUP: 3,
    DOORDOWN: 4,
    LAVA: 5,
    YELLOWSTRIPES: 6,
    HEART: 7
};

export default class MainScene extends Phaser.Scene {

    constructor ()
    {
        super('mainScene');
    }

    preload ()
    {
        this.load.tilemapTiledJSON("level1", "assets/tilemaps/level1.json");

        this.load.spritesheet("psTileset-extruded", "assets/tilesets/psTileset-extruded.png", 
		{ 
			frameWidth: 16,
			frameHeight: 16
		});

        this.load.image("block", "assets/images/block.png");
        this.load.image("player", "assets/images/player.png");
        this.load.image("waterBeaker", "assets/images/waterBeaker.png");
    }

    create ()
    {
        levelHandler.level = this.make.tilemap({ key: "level1" });
        levelHandler.otherTiles = levelHandler.level.addTilesetImage("psTileset-extruded", "psTileset-extruded");

        levelHandler.blockLayer = levelHandler.level.createStaticLayer("World", [levelHandler.otherTiles], 0, 0);
        levelHandler.blockLayer.setCollisionByExclusion([-1]);


        // var waterBeaker = this.impact.add.sprite(200, 330, "waterBeaker");
        // waterBeaker.setActiveCollision().setMaxVelocity(250, 600).setBounce(0);
        // waterBeaker.body.name = "waterBeaker";

        player = new Player(20, 100, this);
        // player.sprite.body.minBounceVelocity = 1;

        window.player = player;

        this.impact.world.setCollisionMapFromTilemapLayer(levelHandler.blockLayer);


        // player.sprite.setCollideCallback(this.collide, this);
        
        this.cameras.main.startFollow(player.sprite);
        this.cameras.main.setZoom(2, 2);

    }

    update ()
    {
        player.update();
    }

    render ()
    {
        
    }

    collide (bodyA, bodyB, axis)
    {
        if(axis === "y")
        {
            if(bodyA.pos.y < bodyB.pos.y)
            {
                console.log("top");
            }else{
                console.log("bottom");
            }
        }
        else if(axis === "x")
        {
            if(bodyA.pos.x < bodyB.pos.x)
            {
                console.log("left");
            }else{
                console.log("right");
            }
        }
    }
}