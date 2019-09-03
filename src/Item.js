export class Item {
	constructor({ id, name, price, availableStock }) {
		this._id = id;
		this._name = name;
		this._price = price;
		this._availableStock = availableStock;
	}

	get availableStockColor() {
		if (this._availableStock === 0) {
			return '#f00';
		}
		if (this._availableStock > 3) {
			return '#0f0';
		}
		if (this._availableStock <= 3) {
			return '#ff0';
		}
	}

	get shouldDisableAddToCart() {
		if (this.availableStock === 0) {
			return true;
		}
		return false;
	}

	addToCart() {
		if (this.shouldDisableAddToCart) {
			throw new Error('cannot add item without available stock to cart');
		} else {
			return true;
		}
	}
}
