'use strict';

jest.mock('minimist');

const uuid = require('uuid');
const minimist = require('minimist');

const app = require('../lib/input.js');

describe('code', () => {
    it('can understand a command line input', () => {
        minimist.mockImplementation(() => {
            return {
                add: 'go'
            }
        })
        let input = app.getToken();
        expect(input.add).toEqual('go');
    })
})