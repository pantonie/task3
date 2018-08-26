'use strict';

const expect = require('chai').expect;
const optimal = require('../src/searchOptimal').optimal;
const input = require('./data/searchOpt').data;
const prices = require('./data/prices');

describe('search Optimal test', () => {
    it('should return array', () => {
        expect(optimal(input, 0, prices, 2000)).to.be.an('array');
    });

});