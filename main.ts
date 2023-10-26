namespace SpriteKind {
    export const Fake_Player = SpriteKind.create()
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.after(100, function () {
        mySprite.setImage(assets.image`red circle0`)
        pause(200)
        mySprite.setImage(assets.image`blue circle`)
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSong(hex`0078000408020109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000800000001000306080a`), music.PlaybackMode.InBackground)
    Fake_Player.setImage(assets.image`red circle0`)
    pause(50)
    Fake_Player.setImage(assets.image`blue circle`)
})
info.onCountdownEnd(function () {
    timer.after(2000, function () {
        music.play(music.createSong(assets.song`ZELDA2`), music.PlaybackMode.UntilDone)
    })
    projectile = sprites.createProjectileFromSide(assets.image`red circle0`, 0, 50)
    projectile.setVelocity(0, 40)
    projectile.setPosition(80, 0)
    timer.after(350, function () {
        projectile = sprites.createProjectileFromSide(assets.image`red circle0`, 0, 50)
        projectile.setVelocity(0, 40)
        projectile.setPosition(80, 0)
        timer.after(350, function () {
            projectile = sprites.createProjectileFromSide(assets.image`red circle0`, 0, 50)
            projectile.setVelocity(0, 40)
            projectile.setPosition(80, 0)
            timer.after(700, function () {
                projectile = sprites.createProjectileFromSide(assets.image`red circle0`, 0, 50)
                projectile.setVelocity(0, 40)
                projectile.setPosition(80, 0)
                timer.after(350, function () {
                    projectile = sprites.createProjectileFromSide(assets.image`red circle0`, 0, 50)
                    projectile.setVelocity(0, 40)
                    projectile.setPosition(80, 0)
                    timer.after(350, function () {
                        projectile = sprites.createProjectileFromSide(assets.image`red circle0`, 0, 50)
                        projectile.setVelocity(0, 40)
                        projectile.setPosition(80, 0)
                    })
                })
            })
        })
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (sprite.image.equals(otherSprite.image)) {
        info.changeScoreBy(10)
        sprites.destroy(otherSprite, effects.fire, 5)
    } else {
        otherSprite.setFlag(SpriteFlag.Ghost, true)
        info.changeLifeBy(-1)
    }
})
let projectile: Sprite = null
let Fake_Player: Sprite = null
let mySprite: Sprite = null
info.startCountdown(5)
info.setScore(0)
scene.setBackgroundColor(15)
mySprite = sprites.create(assets.image`blue circle`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.Invisible, true)
Fake_Player = sprites.create(assets.image`blue circle`, SpriteKind.Fake_Player)
Fake_Player.setPosition(80, 105)
mySprite.setPosition(80, 125)
let list = [assets.image`red circle0`]
info.setLife(5)