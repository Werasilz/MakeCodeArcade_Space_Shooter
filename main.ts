namespace SpriteKind {
    export const TextUI = SpriteKind.create()
    export const Item = SpriteKind.create()
    export const UpgradeItem = SpriteKind.create()
    export const HealthItem = SpriteKind.create()
    export const CoinItem = SpriteKind.create()
}
/**
 * Fire Rate Upgrade
 * 
 * Level 1 = 500
 * 
 * Level 2 = 300
 * 
 * Level 3 = 100 (Max)
 */
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.HealthItem, function (sprite, otherSprite) {
    if (info.life() < 3) {
        info.changeLifeBy(1)
    }
    sprites.destroy(otherSprite, effects.rings, 200)
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
    if (Math.percentChance(3)) {
        if (currentPlayerLevel < 3) {
            SpawnUpgradeItem(sprite)
        }
    } else if (Math.percentChance(30)) {
        if (info.life() < 3) {
            SpawnHealthItem(sprite)
        }
    } else if (Math.percentChance(40)) {
        SpawnCoinItem(sprite)
    }
    UpdateDifficulty()
    sprites.destroy(sprite, effects.fire, 100)
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
function PlayerInit () {
    playerSprite = sprites.create(assets.image`PlayerSpaceShip`, SpriteKind.Player)
    controller.moveSprite(playerSprite)
    playerSprite.setStayInScreen(true)
    info.setScore(0)
    info.setLife(3)
    currentPlayerLevel = 1
    currentDifficultyLevel = 1
}
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.UpgradeItem, function (sprite, otherSprite) {
    if (currentPlayerLevel < 3) {
        currentPlayerLevel += 1
        levelStatusText.sayText("LEVEL:" + currentPlayerLevel)
    }
    sprites.destroy(otherSprite, effects.rings, 200)
    console.logValue("Fire Rate", fireRateUpgradeList[currentPlayerLevel - 1])
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
    pause(fireRateUpgradeList[currentPlayerLevel - 1])
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.CoinItem, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    sprites.destroy(otherSprite, effects.rings, 200)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    TakeDamageAnimation()
    info.changeLifeBy(-1)
    scene.cameraShake(3, 100)
    sprites.destroy(otherSprite, effects.fire, 100)
})
let bulletSprite: Sprite = null
let levelStatusText: Sprite = null
let currentPlayerLevel = 0
let playerSprite: Sprite = null
let asteroidSprite: Sprite = null
let upgradeItemSprite: Sprite = null
let coinItemSprite: Sprite = null
let currentDifficultyLevel = 0
let healthItemSprite: Sprite = null
let asteroidSpeed = 0
let fireRateUpgradeList: number[] = []
effects.starField.startScreenEffect()
fireRateUpgradeList = [500, 300, 100]
asteroidSpeed = 10
PlayerInit()
LevelStatusInit()
game.onUpdateInterval(randint(1000, 1500), function () {
    SpawnAsteroids()
})
