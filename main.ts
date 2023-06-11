namespace SpriteKind {
    export const TextUI = SpriteKind.create()
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
function UpdateDifficulty () {
    if (info.score() % 10 == 0) {
        currentDifficultyLevel += 1
        console.logValue("Difficulty", currentDifficultyLevel)
        console.logValue("Asteroid Speed", asteroidSpeed * currentDifficultyLevel)
    }
}
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
    UpdateDifficulty()
})
function PlayerInit () {
    playerSprite = sprites.create(img`
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
        `, SpriteKind.Player)
    controller.moveSprite(playerSprite)
    playerSprite.setStayInScreen(true)
    info.setScore(0)
    info.setLife(3)
    currentPlayerLevel = 1
    currentDifficultyLevel = 1
}
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
let bulletSprite: Sprite = null
let levelStatusText: Sprite = null
let currentPlayerLevel = 0
let playerSprite: Sprite = null
let asteroidSprite: Sprite = null
let currentDifficultyLevel = 0
let asteroidSpeed = 0
effects.starField.startScreenEffect()
let fireRateUpgradeList = [500, 300, 100]
asteroidSpeed = 10
PlayerInit()
LevelStatusInit()
game.onUpdateInterval(randint(1000, 1500), function () {
    SpawnAsteroids()
})
game.onUpdateInterval(fireRateUpgradeList[currentPlayerLevel - 1], function () {
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
})
