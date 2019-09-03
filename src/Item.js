export class Item {
	constructor({ id, price, name, availableStock }) {
		this.id = id;
		this.price = price;
		this.name = name;
		this.availableStock = availableStock;
	}

	get availableStockColor() {
		if (this.availableStock === 0) {
			return '#f00';
		}
		if (this.availableStock > 3) {
			return '#0f0';
		}
		if (this.availableStock <= 3) {
			return '#ff0';
		}
	}

	get disabledAddToCart() {
		if (this.availableStock === 0) {
			return true;
		}
		return false;
	}

	addToCart() {
		if (this.disabledAddToCart)
			throw new Error('cannot add out of stock item to cart');
		else return true;
	}
}
