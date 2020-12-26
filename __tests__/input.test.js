'use strict';

jest.mock('minimist');
const minimist = require('minimist');



minimist.mockImplementation(() => {
    return {
        t: '1234567890123456789012345678901234567890',
        u: 'sup',
        f: 'mills.txt'
    }
})

const Input = require('../lib/input.js');

describe('Input', () => {

    it('valid token length', () => {
        let options = new Input();
        expect(options.token.length).toEqual(40);
    })
})