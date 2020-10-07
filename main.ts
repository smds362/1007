for (let a = 0; a <= 4; a++) {
    led.plot(0, a)
    led.plot(4, a)
    led.plot(a, 0)
    led.plot(a, 4)
    basic.pause(500)
}
