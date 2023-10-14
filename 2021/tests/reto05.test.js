import assert from 'node:assert'
import { describe, it } from 'node:test'
import daysToXmas from '../reto05.js'

describe('Dias faltantes 25 de Diciembre 2021', () => {
    it('Valores positivos', () => {
        const date1 = new Date('Dec 1, 2021')
        assert.equal(daysToXmas(date1) , 24)
            
        const date2 = new Date('Dec 24, 2021 00:00:01')
        assert.equal(daysToXmas(date2) , 1)
            
        const date3 = new Date('Dec 24, 2021 23:59:59')
        assert.equal(daysToXmas(date3) , 1)
            
        const date4 = new Date('December 20, 2021 03:24:00')
        assert.equal(daysToXmas(date4) , 5)
    })

    it('Valores 0 o Negativos', () => {
        const date1 = new Date('Dec 25, 2021')
        assert.equal(daysToXmas(date1) , 0)
            
        const date2 = new Date('Dec 26, 2021')
        assert.equal(daysToXmas(date2) , -1)
            
        const date3 = new Date('Dec 31, 2021')
        assert.equal(daysToXmas(date3) , -6)
            
        const date4 = new Date('Jan 1, 2022 00:00:01')
        assert.equal(daysToXmas(date4), -7)
        
        const date5 = new Date('Jan 1, 2022 23:59:59')
        assert.equal(daysToXmas(date5) , -7)
    })
})
