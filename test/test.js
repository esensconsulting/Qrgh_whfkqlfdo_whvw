/*eslint-env mocha */
const assert = require('assert');
const chimical = require('../app.js');

describe('Starting Test...', function () {
	//water
	describe('H-O-H', function () {
		it('should return H2O', function () {
			assert.equal(chimical('H-O-H'), 'H2O');
		});
	});
	//Propane
	describe('CH3-CH2-CH3', function () {
		it('should return C3H8', function () {
			assert.equal(chimical('CH3-CH2-CH3'), 'C3H8');
		});
	});
	//Octane
	describe('CH3-CH2-CH2-CH2-CH2-CH2-CH2-CH3', function () {
		it('should return C8H18', function () {
			assert.equal(chimical('CH3-CH2-CH2-CH2-CH2-CH2-CH2-CH3'), 'C8H18');
		});
	});
	//Aniline
	describe('C6H5-NH2', function () {
		it('should return C6H7N', function () {
			assert.equal(chimical('C6H5-NH2'), 'C6H7N');
		});
	});
	describe('null', function () {
		it('should return null', function () {
			assert.equal(chimical(null), null);
		});
	});
});