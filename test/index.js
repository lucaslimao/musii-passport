const chai = require('chai')
const { authentication, passport } = require('../src/index')

describe('Authentication', () => {

    before( () => {
        authentication()
    })

    it('Testing created table', async () => {
        // passport()
    })

})