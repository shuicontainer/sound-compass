let direction = 0
basic.forever(function () {
    direction = input.compassHeading()
    if (direction < 5 || direction > 355) {
        basic.showString("N")
        music.ringTone(262)
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(direction)
    } else {
        basic.clearScreen()
        music.ringTone(0)
    }
})
