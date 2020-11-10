// Up and down using buttons
input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.Y, 1)
})
let Player: game.LedSprite = null
game.startCountdown(10000)
game.setScore(0)
// Max lives- when 3 lives are over, OUT.
game.setLife(3)
// Player starting point (Middle)
Player = game.createSprite(2, 2)
// Random starting point
let Coin = game.createSprite(randint(0, 4), randint(0, 4))
// Random starting point
let Fake = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (Player.isTouching(Coin)) {
        game.addScore(1)
        // Randomizes the next x and y points
        Coin.set(LedSpriteProperty.X, randint(0, 4))
        Coin.set(LedSpriteProperty.Y, randint(0, 4))
        // Same for 'fake'
        Fake.set(LedSpriteProperty.X, randint(0, 4))
        Fake.set(LedSpriteProperty.Y, randint(0, 4))
    } else if (Player.isTouching(Fake)) {
        game.removeLife(1)
        Coin.set(LedSpriteProperty.X, randint(0, 4))
        Coin.set(LedSpriteProperty.Y, randint(0, 4))
        Fake.set(LedSpriteProperty.X, randint(0, 4))
        Fake.set(LedSpriteProperty.Y, randint(0, 4))
    }
    // Tilting left and right
    if (input.rotation(Rotation.Roll) < -10) {
        Player.change(LedSpriteProperty.X, -1)
    } else if (input.rotation(Rotation.Roll) > 10) {
        Player.change(LedSpriteProperty.X, 1)
    }
    // Slows the movement down
    basic.pause(100)
})
