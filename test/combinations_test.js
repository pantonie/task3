'use strict';

const expect = require('chai').expect;
const combinations = require('../combinations').combinations;
const testArr = [[0,1],[2,3]];
const goalArr = [[0,2],[0,3],[1,2],[1,3]];
describe('RatesGenerator', () => {
    it('should return array', () => {
        expect(combinations(testArr)).to.be.an('array');
    });
    it('should return right array', () => {
        expect(JSON.stringify(combinations(testArr))).to.equal(JSON.stringify(goalArr));
    });

});