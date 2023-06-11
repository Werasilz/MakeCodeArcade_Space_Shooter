namespace SpriteKind {
    export const TextUI = SpriteKind.create()
    export const Item = SpriteKind.create()
    export const UpgradeItem = SpriteKind.create()
    export const HealthItem = SpriteKind.create()
    export const CoinItem = SpriteKind.create()
    export const Effect = SpriteKind.create()
    export const Icon = SpriteKind.create()
}
function SpawnHealthItem (spawnerSprite: Sprite) {
    healthItemSprite = sprites.createProjectileFromSide(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        .....222....222.....
        ....23322..22222....
        ....23322..22222....
        ....233222222222....
        ....222222222222....
        .....2222222b22.....
        .......2222b2.......
        .......2222b2.......
        ........2222........
        .........22.........
        ....................
        ....................
        ....................
        ....................
        ....................
        `, 0, 25)
    healthItemSprite.setPosition(spawnerSprite.x, spawnerSprite.y)
    healthItemSprite.setKind(SpriteKind.HealthItem)
}
function UpdateDifficulty () {
    if (info.score() % 10 == 0) {
        currentDifficultyLevel += 1
        console.logValue("Difficulty", currentDifficultyLevel)
        console.logValue("Asteroid Speed", asteroidSpeed * currentDifficultyLevel)
    }
}
function SpawnCoinItem (spawnerSprite: Sprite) {
    coinItemSprite = sprites.createProjectileFromSide(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, 0, 25)
    coinItemSprite.setScale(2, ScaleAnchor.Middle)
    coinItemSprite.setPosition(spawnerSprite.x, spawnerSprite.y)
    coinItemSprite.setKind(SpriteKind.CoinItem)
    animation.runImageAnimation(
    coinItemSprite,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    100,
    true
    )
}
function SpawnUpgradeItem (spawnerSprite: Sprite) {
    upgradeItemSprite = sprites.createProjectileFromSide(img`
        . . . . . . . b b . . . . . . . 
        . . . . . . b d d b . . . . . . 
        . . . . . b d 5 5 d b . . . . . 
        . . . . b b 5 5 5 5 b b . . . . 
        . . . . b 5 5 5 5 5 5 b . . . . 
        b b b b b 5 5 5 5 1 1 d b b b b 
        b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
        b d d 5 5 5 5 5 5 1 1 1 5 d d b 
        . b d d 5 5 5 5 5 5 5 5 d d b . 
        . . b b 5 5 5 5 5 5 5 5 b b . . 
        . . c b 5 5 5 5 5 5 5 5 b c . . 
        . . c 5 5 5 5 d d 5 5 5 5 c . . 
        . . c 5 5 d b b b b d 5 5 c . . 
        . . c 5 d b c c c c b d 5 c . . 
        . . c c c c . . . . c c c c . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 25)
    upgradeItemSprite.setPosition(spawnerSprite.x, spawnerSprite.y)
    upgradeItemSprite.setKind(SpriteKind.UpgradeItem)
}
function SpawnMuzzleFlash (spawnerSprite: Sprite) {
    muzzleFlashSrpite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Effect)
    animation.runImageAnimation(
    muzzleFlashSrpite,
    [img`
        . . . . . . 3 3 . . . . . . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . 3 3 . . 3 1 3 . . 3 3 . . . 
        . . 3 1 3 . 3 1 3 2 3 1 3 . . . 
        . . . 3 1 3 3 1 3 2 1 3 . . . . 
        3 3 3 3 2 1 3 1 1 1 3 . . . . . 
        3 1 1 1 1 1 1 1 1 2 3 3 3 3 3 3 
        . 3 3 3 2 3 1 1 1 1 1 1 1 1 1 3 
        . . . . . 2 1 1 1 3 3 2 3 3 3 . 
        . . . . 3 1 3 1 3 1 2 . . . . . 
        . . . 3 1 3 2 1 3 3 1 3 . . . . 
        . . 3 1 3 . 2 1 3 . 3 1 3 . . . 
        . . 3 3 . . 3 1 3 . . 3 3 . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . . . . . 3 3 . . . . . . . . 
        `,img`
        . . 3 3 . . . 3 3 . . . . . . . 
        . 3 1 1 2 . . 3 1 3 . . 3 3 3 . 
        . 3 1 1 2 . . 3 1 3 . 3 1 1 3 . 
        . . 3 2 2 . . 2 1 2 . 2 1 1 3 . 
        . 3 3 . . . . . 2 2 . 2 2 2 . . 
        3 1 1 2 2 . . . . . . . 3 3 . . 
        3 1 1 1 2 . . . . . . 2 1 1 3 3 
        3 1 1 2 . . . . . . 3 1 1 1 1 3 
        . 3 2 2 . . . . . . . 2 1 1 3 . 
        . . . . . . . 2 . . . . 3 3 . . 
        . . 2 2 2 . 2 1 2 . . 2 2 2 . . 
        . 3 1 1 2 2 3 1 1 2 . 2 1 1 3 3 
        3 1 1 1 2 2 1 1 1 2 . 2 1 1 1 3 
        3 1 1 3 . . 3 1 3 . . . 3 1 1 3 
        3 3 3 . . . . 3 3 . . . . 3 3 . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 3 . . . . . 
        . . . . . 3 . . . . 3 3 . . . . 
        . . . . 3 3 . . . . . 3 . . . . 
        . . . . 3 . . . 3 . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . 3 . . . . . . . . . . 3 . . . 
        3 3 . . . . . . . . . . 3 3 . . 
        3 . . . . . . . . . . . . 3 . . 
        . . . . . . . . . . . . . . . . 
        . . . 3 . . . 3 . . . . . 3 . . 
        . . 3 3 . . . 3 . . . . . 3 3 . 
        . . 3 . . . . 3 . . . . . . 3 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    muzzleFlashSrpite.setPosition(spawnerSprite.x, spawnerSprite.y)
    muzzleFlashSrpite.setKind(SpriteKind.Effect)
    pause(500)
    sprites.destroy(muzzleFlashSrpite)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.HealthItem, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.rings, 200)
    if (info.life() < 3) {
        info.changeLifeBy(1)
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
    }
})
function SpawnAsteroids () {
    asteroidSprite = sprites.createProjectileFromSide(img`
        . . . . . c c b b b . . . . . . 
        . . . . c b d d d d b . . . . . 
        . . . . c d d d d d d b b . . . 
        . . . . c d d d d d d d d b . . 
        . . . c b b d d d d d d d b . . 
        . . . c b b d d d d d d d b . . 
        . c c c c b b b b d d d b b b . 
        . c d d b c b b b b b b b b d b 
        c b b d d d b b b b b d d b d b 
        c c b b d d d d d d d b b b d c 
        c b c c c b b b b b b b d d c c 
        c c b b c c c c b d d d b c c b 
        . c c c c c c c c c c c b b b b 
        . . c c c c c b b b b b b b c . 
        . . . . . . c c b b b b c c . . 
        . . . . . . . . c c c c . . . . 
        `, 0, 25)
    asteroidSprite.setPosition(randint(5, 155), 0)
    asteroidSprite.follow(playerSprite, asteroidSpeed * currentDifficultyLevel)
    asteroidSprite.setKind(SpriteKind.Enemy)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 100)
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
    SpawnMuzzleFlash(sprite)
    UpdateDifficulty()
    if (Math.percentChance(5)) {
        if (currentPlayerLevel < 5) {
            SpawnUpgradeItem(sprite)
        }
    } else if (Math.percentChance(30)) {
        if (info.life() < 3) {
            SpawnHealthItem(sprite)
        }
    } else if (Math.percentChance(40)) {
        SpawnCoinItem(sprite)
    }
})
function PlayerInit () {
    playerSprite = sprites.create(assets.image`PlayerSpaceShip`, SpriteKind.Player)
    controller.moveSprite(playerSprite)
    playerSprite.setStayInScreen(true)
    info.setScore(0)
    info.setLife(3)
    currentPlayerLevel = 1
    currentDifficultyLevel = 1
    fireRate = 500
}
info.onCountdownEnd(function () {
    spaceShipObtacle = sprites.createProjectileFromSprite(img`
        ..............ffffff....
        ..fc.........fccc2ff....
        ..f4c.....fffccc2ff.....
        ..f44ccccc22222222cc....
        ..f244ccc222224442b9c...
        ..cf24222222222244999c..
        .ccf2222222222222199b2c.
        fc22cc22222222b1111b222c
        f22ccccccc2222991222222f
        ffffffc222c22222222222f.
        ....ff222244c2222222ff..
        ...cf222244fffffffff....
        ...c222244ffc2f.........
        ...c2222cfffccf.........
        ...ffffffff2cf..........
        ........fff2c...........
        `, warningIcon, 100, 0)
    spaceShipObtacle.setKind(SpriteKind.Enemy)
    sprites.destroy(warningIcon, effects.warmRadial, 100)
})
function TakeDamageAnimation () {
    animation.runImageAnimation(
    playerSprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        . . . . . . 6 9 9 6 . . . . . . 
        . . . . . 8 6 9 9 6 8 . . . . . 
        . . . . 8 6 8 6 6 8 6 8 . . . . 
        . . . . 8 6 8 8 8 8 6 8 . . . . 
        . . . 8 6 6 8 6 6 8 6 6 8 . . . 
        . . 6 8 8 8 8 c b 8 8 8 8 6 . . 
        . 6 8 8 d d b c c b d d 8 8 6 . 
        . 6 8 d b c f . . f c b d 8 6 . 
        . . . f c . . . . . . c f . . . 
        . . . . f . . . . . . f . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    pause(500)
    animation.stopAnimation(animation.AnimationTypes.All, playerSprite)
    playerSprite.setImage(assets.image`PlayerSpaceShip`)
}
/**
 * Fire Rate Upgrade
 * 
 * Level 1 = 500
 * 
 * Level 2 = 400
 * 
 * Level 3 = 300
 * 
 * Level 4 = 200
 * 
 * Level 5 = 100 (Max)
 */
sprites.onOverlap(SpriteKind.Player, SpriteKind.UpgradeItem, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.rings, 200)
    if (currentPlayerLevel < 5) {
        currentPlayerLevel += 1
        fireRate += -100
        levelStatusText.sayText("LEVEL:" + currentPlayerLevel)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    }
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    bulletSprite = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 3 1 1 3 2 . . . . . 
        . . . . . 3 1 1 1 1 3 . . . . . 
        . . . . . 3 1 1 1 1 3 . . . . . 
        . . . . . 3 1 1 1 1 3 . . . . . 
        . . . . . 2 1 1 1 1 3 . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . 2 3 1 1 3 2 . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . . 2 1 1 2 . . . . . . 
        . . . . . . 2 1 1 2 . . . . . . 
        . . . . . . 2 1 1 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, playerSprite, 0, -90)
    bulletSprite.startEffect(effects.trail)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
    pause(fireRate)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.CoinItem, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.rings, 200)
    info.changeScoreBy(10)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
function LevelStatusInit () {
    levelStatusText = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.TextUI)
    levelStatusText.sayText("LEVEL:" + currentPlayerLevel)
    levelStatusText.x = 25
    levelStatusText.y = 130
}
function SpawnObstacle () {
    warningIcon = sprites.create(assets.image`Warning Icon`, SpriteKind.Icon)
    warningIcon.setPosition(10, playerSprite.y)
    animation.runImageAnimation(
    warningIcon,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c c c c c c c . . . 
        . . . . . . c 4 4 4 4 4 c . . . 
        . . . . . . c 4 f f f 4 c . . . 
        . . . . . c c 4 f f f 4 c c . . 
        . . . . . c c 4 f f f 4 c c . . 
        . . . . c c 4 4 f f f 4 4 c c . 
        . . . c c c 4 4 f f f 4 4 c c c 
        . . . c c 4 4 4 f f f 4 4 c c c 
        . . c c 4 4 4 4 f f f 4 4 4 4 c 
        . . c c 4 4 4 4 4 4 4 4 4 4 4 c 
        . . c 4 4 4 4 4 f f f 4 4 4 4 4 
        . . c 4 4 4 4 4 f f f 4 4 4 4 4 
        . . c 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    info.startCountdown(3)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 100)
    scene.cameraShake(3, 100)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    TakeDamageAnimation()
})
let bulletSprite: Sprite = null
let levelStatusText: Sprite = null
let warningIcon: Sprite = null
let spaceShipObtacle: Sprite = null
let fireRate = 0
let currentPlayerLevel = 0
let playerSprite: Sprite = null
let asteroidSprite: Sprite = null
let muzzleFlashSrpite: Sprite = null
let upgradeItemSprite: Sprite = null
let coinItemSprite: Sprite = null
let currentDifficultyLevel = 0
let healthItemSprite: Sprite = null
let asteroidSpeed = 0
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff1fffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff99dbd616bcccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff1fffffffffffffffff96dbbb6881118ccccbc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdd9ddbb66881888888cccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffdbd9666db66888888ccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffbb99696d6868888cccccccccccc6fffffffff1fffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffbb99666666888888cbce8bbbcccbccb9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffdbb99696666668868bbb88888cc8b8bb8ccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffbb9d9dd6668688888bc888888bc8bc8b88c9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffdbbbbd66666686888888bbbbbb888888bc8869fffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff9bdbdd66666688688888dddddde888888bcbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffd99966666668888888bdddbbbdb1cccc8bbcc8bbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff99999669666686888bddbbbdbbbbbbbccccbbcc8b9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff99999966969668686bbdddbbdbbbbbbbcbcc8bcc886ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff999969666666d6866bdbbbbbbbbbbbbbccccc8bccc66fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffdd996966666666866bddbbbbbbbbbbbbccccc88bcc66fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff1fffffffff99999dd69666688886ddddbbbbbbbbbbbcccccc888886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
    ffffffffffffffffffffffffffffffffffff99996dddd696688888bbbbbbbbbbbbbbbcbcccccc88889ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff99bb966ddd6666688688bbbbbbbbbbbbbbcccccccc88889ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff99bdb6699666668886888bbbbbbbbbbbbbcbccccccc88869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff99bbbb6996666668868888bbbb88bbbbbbccccccccc88869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff1ffffffffffffff9bbbccc6966666688868888888d88bbbbbcccccccb888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff9bbbbbcc99966688888888dddbbd8cbbbbbcccccc8888869ffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff
    fffffffffffffff11ffffffffffffffffff9ebbcccccc96666888888888dbbb88bbbbbcccccc8888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffbbbbccccccc66688888888888d88888bbbcccccc888888b9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffff
    fffffffffffffffffffffffffffffffffff9dbbbbbcccbb6668888888888888888bbccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff9bbbbbccccb66668888888888888888bbccccccc88888869fffffffffffff1fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff99bbbbbccc666688888888888888888bbccccccc8888886ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff1ffffffff9dbbcbccc666688888888888888888bbbcccccc88c8889ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff99bbbcccb666668888888888888888bbccccc8888d888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff9bbbcccc96b688888688888888888bbccccc88bb8886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff99bbccc966bb88888888888888888cbccccc88bc8886fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff999bccc6666dbd888886888888888bbccc8888888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff1fffffffffffffffffff969dccc66666b6d88886888888888bbccc888888889ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff99bbcc66666db888886888888888bbcc888888b6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff1fffffffffffffffffffffffffffffffffff96ccc96966666b88866888888888888888888899ffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffff
    fff1ffffffffffffffffffffffffffffffffffff9ccc96666666bb886688888888888888888889ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff69cc69666666d88868888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff96cc666696d6d88888888888888888b88869ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff6c6699666d88866668888888888d8866fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff99666666668886888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9696966666868888888886888869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff969666688881188888818869fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff969966888118888881866fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff916116111116669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffff1ffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffff1ffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffff1ffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
    ffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2c222
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff2224cccc422
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222ccc333332
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2224ccc3333324
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22c43cc333332444
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ccc333333c322422
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22c333333222222422
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2c33c4342224224422
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3c3cc3422244224222
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3233343222444224222
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22224323244242222222
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222232222222222222
    `)
asteroidSpeed = 10
PlayerInit()
LevelStatusInit()
music.play(music.stringPlayable("C5 B A G F E D C ", 248), music.PlaybackMode.LoopingInBackground)
music.setVolume(50)
game.onUpdateInterval(randint(1000, 1500), function () {
    SpawnAsteroids()
})
game.onUpdateInterval(randint(3000, 5000), function () {
    if (Math.percentChance(50)) {
        SpawnObstacle()
    }
})
