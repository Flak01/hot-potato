input.onButtonPressed(Button.A, function () {
    strip.clear()
    var3.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(500)
    strip.clear()
    var2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(500)
    strip.clear()
    var1.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(500)
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
let marcus = 0
let var1: neopixel.Strip = null
let var2: neopixel.Strip = null
let var3: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
var3 = strip.range(11, 15)
var2 = strip.range(6, 10)
var1 = strip.range(0, 5)
strip.showColor(neopixel.rgb(randint(0, 64), randint(0, 64), randint(0, 64)))
basic.forever(function () {
	
})
