const speedToSemitone = require ('../src/index')

describe ('testing parameters', () => {

    it ('should accept a number as speed parameter', () => {

        expect (
            speedToSemitone (1),
        )
            .toBeDefined ()

    })

    it ('should refuse a string as speed parameter', () => {

        expect (() => {

            speedToSemitone ('string')

        })
            .toThrowError ()

    })

    it ('should accept a number as digits parameter', () => {

        expect (
            speedToSemitone (1, 1),
        )
            .toBeDefined ()

    })

    it ('should refuse a string as digits parameter', () => {

        expect (() => {

            speedToSemitone (1, 'string')

        })
            .toThrowError ()

    })

})

describe ('testing return values', () => {

    it ('should return 0 semitone if speed is 1', () => {

        expect (
            speedToSemitone (1),
        )
            .toBe ('0')

    })

    it ('should return -12 semitones if speed is 0.5', () => {

        expect (
            speedToSemitone (0.5),
        )
            .toBe ('-12')

    })

    it ('should return 12 semitones if speed is 2', () => {

        expect (
            speedToSemitone (2),
        )
            .toBe ('12')

    })

    it ('should return 12.000 semitones if speed is 2 and digits is 1', () => {

        expect (
            speedToSemitone (2, 3),
        )
            .toBe ('12.000')

    })

})