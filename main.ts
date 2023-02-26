let b = 0
let loop = 0
let pixels = 0
let strip = neopixel.create(DigitalPin.P0, 11, NeoPixelMode.RGB)
strip.setBrightness(255)
basic.forever(function () {
    for (let index = 0; index < 10; index++) {
        strip.setPixelColor(pixels, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(50)
        pixels += 1
    }
    pixels = 0
    for (let index = 0; index < 10; index++) {
        strip.setPixelColor(pixels, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.pause(50)
        pixels += 1
    }
    pixels = 0
    for (let index = 0; index < 10; index++) {
        strip.setPixelColor(pixels, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(50)
        pixels += 1
    }
    pixels = 0
    loop = 8
    for (let index = 0; index < loop; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.White))
        strip.show()
        basic.pause(50)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.White))
        strip.show()
        basic.pause(50)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.White))
        strip.show()
        basic.pause(50)
    }
    for (let index = 0; index < loop; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(50)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(50)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(50)
    }
    for (let index = 0; index < loop; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(50)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(50)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(50)
    }
    b = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 360; index++) {
            basic.pause(10)
            b += 1
            strip.showRainbow(b, b + -100)
        }
    }
    b = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 360; index++) {
            basic.pause(10)
            b += 1
            strip.showRainbow(b, b + -100)
        }
    }
})
