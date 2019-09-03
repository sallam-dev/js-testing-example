import { Item } from '../src/Item';
import { assert } from 'chai';

describe('Item Class', function() {
	describe('availableStockColor getter', function() {
		it('should be red when availableStock is zero', function() {
			const item = new Item({ availableStock: 0 });

			assert.equal(item.availableStockColor, '#f00', 'red color');
		});
		it('should be yellow when availableStock is less than or equal 3 and greater than 0', function() {
			const item = new Item({ availableStock: 3 });

			assert.equal(item.availableStockColor, '#ff0', 'yellow color');
		});
		it('should be green when available stock is greater than 3', function() {
			const item = new Item({ availableStock: 7 });

			assert.equal(item.availableStockColor, '#0f0', 'yellow color');
		});
	});

	describe('shouldDisableAddToCart getter', function() {
		it('should be disabled when the available stock is empty', function() {
			const item = new Item({ availableStock: 0 });

			assert.isTrue(
				item.shouldDisableAddToCart,
				'add to card is disabled'
			);
		});
		it('should not be disabled when there is available stock', function() {
			const item = new Item({ availableStock: 4 });

			assert.isFalse(
				item.shouldDisableAddToCart,
				'add to card is enabled'
			);
		});
	});

	describe('addToCart method', function() {
		it('should throw and error with message = "cannot add item without available stock to cart"', function() {
			const item = new Item({ availableStock: 0 });

			assert.throws(
				item.addToCart.bind(item),
				'cannot add item without available stock to cart'
			);
		});

		it('add to cart successfully when there is available stock', function() {
			const item = new Item({ availableStock: 1 });

			const addedToCart = item.addToCart();

			assert.isTrue(addedToCart, 'added to cart');
		});
	});
});
