import * as assert from 'assert';

import * as pkg from './index';

describe('Package', () => {
	describe('.sum', () => {
		it('should return the sum of two numbers', () => {
			const expected = 2;

			const actual = pkg.sum(1, 1);

			assert.strictEqual(actual, expected);
		});
	});
});
