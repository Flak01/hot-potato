let marcus = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("3")
    basic.showString("2")
    basic.showString("1")
    marcus = randint(5, 15)
    while (marcus > 0) {
        basic.clearScreen()
        basic.pause(100)
        marcus += -1
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            # . # . #
            # . . . #
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            # . # . #
            # . . . #
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # . # . #
            # . . . #
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            # . # . #
            # . . . #
            . # . # .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . # . # .
            . . . . .
            . # . # .
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . # . # .
            . . . . .
            . # . # .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (marcus == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.Silly)
    }
})
basic.forever(function () {
	
})
