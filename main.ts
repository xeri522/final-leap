scene.onOverlapTile(SpriteKind.Player, assets.tile`spikeWallU`, function (sprite, location) {
    controller.moveSprite(mySprite, 50, 50)
    mySprite.ay = 0
})
scene.onOverlapTile(SpriteKind.Player, img`wallIce`, function (sprite, location) {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump == true) {
        mySprite.vy = -100
        mySprite.sayText(";(")
        jump = false
    }
    if (mySprite.isHittingTile(CollisionDirection.Left) && walljump == true) {
        controller.moveSprite(mySprite, 0, 0)
        mySprite.vx = 100
        mySprite.vy = -100
        walljump = false
        timer.after(200, function () {
            controller.moveSprite(mySprite, 70, 0)
        })
    } else if (mySprite.isHittingTile(CollisionDirection.Right) && walljump == true) {
        controller.moveSprite(mySprite, 0, 0)
        mySprite.vx = -100
        mySprite.vy = -100
        walljump = false
        timer.after(200, function () {
            controller.moveSprite(mySprite, 70, 0)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, img`wallFire`, function (sprite, location) {
	
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        jump = true
        mySprite.sayText(":)")
    }
    if (mySprite.isHittingTile(CollisionDirection.Left)) {
        walljump = true
        timer.debounce("action", 500, function () {
            walljump = false
        })
    } else if (mySprite.isHittingTile(CollisionDirection.Right)) {
        walljump = true
        timer.debounce("action", 500, function () {
            walljump = false
        })
    } else {
        walljump = false
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`wallNormal`, function (sprite, location) {
    controller.moveSprite(mySprite, 70, 0)
    mySprite.ay = 50
})
function startlevel () {
    tiles.setCurrentTilemap(levels[setCurentLevel])
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    setCurentLevel += 1
    startlevel()
})
let levels: tiles.TileMapData[] = []
let jump = false
let walljump = false
let setCurentLevel = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundImage(assets.image`back`)
scene.cameraFollowSprite(mySprite)
setCurentLevel = 0
controller.moveSprite(mySprite, 70, 0)
mySprite.fx = 100
mySprite.ay = 50
walljump = false
jump = true
levels = [
tilemap`level1`,
tilemap`level0`,
tilemap`level5`,
tilemap`level7`,
tilemap`level9`,
tilemap`level13`,
tilemap`level15`,
tilemap`level21`
]
tiles.createSpritesOnTiles(img`spikeWallU`, SpriteKind.Enemy)
tiles.createSpritesOnTiles(img`spikeWallL`, SpriteKind.Enemy)
tiles.createSpritesOnTiles(img`spikeWallR`, SpriteKind.Enemy)
startlevel()
forever(function () {
	
})
