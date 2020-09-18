class MenuSelection{
	static selections = []
	constructor(id, title, price) {
		this.id = id;
		this.title = title;
		this.price = price;
		MenuSelection.addToCart(this)
	}

	static addToCart(item) {
		const itemCart = document.getElementById("item-cart");
		const cartHead = document.getElementById("cart-head");
		let ul = document.createElement("ul")
		ul.id = "cart-ul"
		let div = document.createElement("div")
		div.id = "cart-price-div"
		let btn = document.createElement("button")
		btn.setAttribute("data-menu-item-id", item.id)
		btn.innerText = "Remove Item"
		btn.addEventListener("click", removeFromCart)
		//work on remove function
		//add check out button that post fetchs selections to db
		//  OR
		// send all selections to db and remove function is patch fetch
		if (itemCart.innerText == "") {
			cartHead.innerText = "Cart"
			itemCart.appendChild(div)
			itemCart.appendChild(ul)
		}
		const cartUl = document.getElementById("cart-ul");
		
		const priceDiv = document.getElementById("cart-price-div");
		let li = document.createElement("li")
		li.innerText = `$${item.price} | ${item.title}`
		li.appendChild(btn)
		cartUl.appendChild(li)
		this.selections.push(item)	
		let newCartTotal = MenuSelection.priceTotal()
		priceDiv.innerText = `Total: $${newCartTotal}`
	}

	static priceTotal() {
		let newTotal = 0
		let obj = MenuSelection.selections
		
		for (let i = 0; i < MenuSelection.selections.length; i++){
			newTotal = newTotal + obj[i].price
		}
		return newTotal
	}

}