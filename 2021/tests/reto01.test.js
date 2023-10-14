import assert from 'node:assert'
import { it, describe } from 'node:test'
import contarOvejas from '../reto01.js'

describe('Contar ovejas', () => {
    it('Debe devolver ovejas rojas y que en el nombre contenga n y a', () => {
        const ovejas = [
            { name: 'Noa', color: 'azul' },
            { name: 'Euge', color: 'rojo' },
            { name: 'Navidad', color: 'rojo' },
            { name: 'Ki Na Ma', color: 'rojo'},
            { name: 'AAAAAaaaaa', color: 'rojo' },
            { name: 'Nnnnnnnn', color: 'rojo'}
          ]

        const result = [
            { name: 'Navidad', color: 'rojo' },
            { name: 'Ki Na Ma', color: 'rojo' }
        ]
        assert.deepEqual(contarOvejas(ovejas), result)
    })
})


