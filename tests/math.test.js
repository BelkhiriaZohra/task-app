const {calculateTip, fahrenheitToCelsius, celciusToFahrenheit} = require('../src/math')


test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
})

test('Should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

test('Should convert 32 F to 0 C', () => {
    const convert = fahrenheitToCelsius(32)
    expect(convert).toBe(0)
})

test('Should convert 0 C to 32 F', () => {
    const convert = celciusToFahrenheit(0)
    expect(convert).toBe(32)
})

test('Async test demo', (done) => {
    setTimeout(() => {
        expect(2).toBe(2)
        done()
    }, 2000)
})


