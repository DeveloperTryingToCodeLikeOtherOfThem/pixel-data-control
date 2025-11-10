function createPathSprite(sprite: Sprite, trailSprite: Sprite, width: number, height: number) {
    let lastX = trailSprite.x
    let lastY = trailSprite.y

    let pixels: number[] = trailSprite.pixels(trailSprite.image)

    if (trailSprite.image.height === width) throw "invalid drawn sprite image"
    else if (trailSprite.image.width === height) throw "invalid drawn sprite image"

    game.onUpdate(() => {
        let newX = trailSprite.width
        let newY = trailSprite.height

        trailSprite.x += newX * control.eventContext().deltaTime
        trailSprite.y += newY * control.eventContext().deltaTime

        if (!sprite.overlapsWith(trailSprite)) {
            if (sprite.width < trailSprite.width || sprite.width > trailSprite.width) {
                sprite._x = sprite._lastX
            }

            if (sprite.height < trailSprite.height || sprite.height > trailSprite.height) {
                sprite._y = sprite._lastY
            }
        }
    })
}
