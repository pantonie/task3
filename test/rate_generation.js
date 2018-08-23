'use strict';

const expect = require('chai').expect;
const rates = require('../rates').genRates;
const input = require('./data/input').data;
const hard_input = require('./data/hard_input').data;

describe('RatesGenerator', () => {
    it('should return array', () => {
        expect(rates(input.rates)).to.be.an('array');
    });
    it('should not have empty elements', () => {
        expect(rates(input.rates)).to.satisfy(
            items => items.every(
                item => item > 0
            )
        )
    });
    it('should returl all 1', () => {
        expect(rates(hard_input.rates)).to.satisfy(
            items => items.every(
                item => item === 1
            )
        )
    });
});