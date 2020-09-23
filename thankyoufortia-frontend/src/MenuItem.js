class MenuItem {
	static menuItems = []
	constructor(id, title, ingredients, category, price, image) {
		this.id = id;
		this.title = title;
		this.ingredients = ingredients;
		this.category = category;
		this.price = price;
		this.image = image;
		MenuItem.menuItems.push(this)
	}
	static renderMenu() {
		this.menuItems.forEach(menuItem => {
			let cardDiv = document.createElement("div")
			cardDiv.className = "card"
			let contentDiv = document.createElement("div")
			contentDiv.className = "card__content"
			let picDiv = document.createElement("div")
			picDiv.className = "card__img_container"
			let img = document.createElement("img")
			img.src = `${menuItem.image}`
			img.alt = `${menuItem.title}`
			img.className = "card__img"
			let h2Div = document.createElement("h2")
			h2Div.innerText = `${menuItem.title}`
			h2Div.className = "card__header"
			let text = document.createElement("p")
			text.innerText = `${menuItem.ingredients}`
			text.className = "card__text"
			let priceDiv = document.createElement("div")
			priceDiv.innerText = `$${menuItem.price}`
			priceDiv.className = "card__price"
			let btn = document.createElement("button")
			btn.className = "card__btn"
			btn.innerText = "Add to Order"
			btn.setAttribute("data-menu-item-id", menuItem.id)
			btn.addEventListener("click", addToSelections)
			
			picDiv.appendChild(img)
			cardDiv.appendChild(picDiv)
			contentDiv.appendChild(h2Div)
			contentDiv.appendChild(text)
			contentDiv.appendChild(priceDiv)
			contentDiv.appendChild(btn)
			cardDiv.appendChild(contentDiv)


			
			if (menuItem.category === "Dinner") {
				dinner.appendChild(cardDiv)
			}
			if (menuItem.category === "Dessert") {
				dessert.appendChild(cardDiv)
			}
			if (menuItem.category === "Drink") {
				drink.appendChild(cardDiv)
			}
			
			
		})
	}
}