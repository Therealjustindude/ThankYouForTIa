class Menu {
	static menuItems = []
	constructor(title, ingredients, category, price, image) {
		this.title = title;
		this.ingredients = ingredients;
		this.category = category;
		this.price = price;
		this.image = image;
		Menu.menuItems.push(this)
	}

}