import { Item } from '../src/Item';
import { assert } from 'chai';

describe('Item Class', function() {
	describe('availableStock Colors', function() {
		it('should be red when there is no available stock', function() {
			const item = new Item({ availableStock: 0 });

			assert.equal(item.availableStockColor, '#f00', 'red color');
		});

		it('should be yellow when the available stock is less or equal 3', function() {
			const item = new Item({ availableStock: 3 });

			assert.equal(item.availableStockColor, '#ff0', 'red color');
		});

		it('should be green the available stock is greater than 3', function() {
			const item = new Item({ availableStock: 4 });

			assert.equal(item.availableStockColor, '#0f0', 'red color');
		});
	});

	describe('ability to add to cart', function() {
		it('should be disabled if the item is out of stock', function() {
			const item = new Item({ availableStock: 0 });

			assert.isTrue(item.disabledAddToCart, 'cannot add to card');
		});
	});

	describe('addToCart', function() {
		it('should throw error = "cannot add out of stock item to cart"', function() {
			const item = new Item({ availableStock: 0 });

			assert.throws(
				item.addToCart.bind(item),
				'cannot add out of stock item to cart'
			);
		});

		it('should signal success by returning true on completion', function() {
			const item = new Item({ availableStock: 3 });

			assert.isTrue(item.addToCart(), 'added successfully');
		});
	});
});
