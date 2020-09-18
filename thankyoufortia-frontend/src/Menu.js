class Menu {
	static menuItems = []
	constructor(id, title, ingredients, category, price, image) {
		this.id = id;
		this.title = title;
		this.ingredients = ingredients;
		this.category = category;
		this.price = price;
		this.image = image;
		Menu.menuItems.push(this)
	}
	static renderMenu() {
		this.menuItems.forEach(menuItem => {
			let cardDiv = document.createElement("div")
			cardDiv.className = "card"
			let contentDiv = document.createElement("div")
			contentDiv.className = "card_content"
			let frontDiv = document.createElement("div")
			frontDiv.className = "card_front"
			let backDiv = document.createElement("div")
			backDiv.className = "card_back"
			let picDiv = document.createElement("div")
			picDiv.className = "picture"
			let img = document.createElement("img")
			img.src = `${menuItem.image}`
			img.alt = `${menuItem.title}`
			picDiv.appendChild(img)
			let h2Div = document.createElement("h2")
			h2Div.innerText = `${menuItem.title}`
			h2Div.className = "title"
			let ingDiv = document.createElement("p")
			ingDiv.innerText = `${menuItem.ingredients}`
			ingDiv.className = "ingredients"
			let priceDiv = document.createElement("div")
			priceDiv.innerText = `$${menuItem.price}`
			priceDiv.className = "price"
			let btn = document.createElement("button")
			btn.className = "btn"
			btn.innerText = "Add to Order"
			btn.setAttribute("data-menu-item-id", menuItem.id)
			btn.addEventListener("click", addToSelections)
		
			backDiv.appendChild(picDiv)
			frontDiv.appendChild(h2Div)
			frontDiv.appendChild(ingDiv)
			frontDiv.appendChild(priceDiv)
			frontDiv.appendChild(btn)
			contentDiv.appendChild(frontDiv)
			contentDiv.appendChild(backDiv)
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