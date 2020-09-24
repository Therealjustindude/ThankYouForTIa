class MenuSelection{
	static selections = []
	constructor(id, title, price) {
		this.id = id;
		this.title = title;
		this.price = price;
		MenuSelection.addToCart(this)
	}
	static newTotal = 0
	static addToCart(item) {
		if (document.getElementById("cart__content") === null) {
			this.createCartDiv()
			this.createNavLink()
		}
		const itemCart = document.getElementById("cart__content")
		const cartHead = document.createElement("div");
		cartHead.id = "cart-head";
		const subBtn = document.createElement("button")
		subBtn.innerText = "Check Out"
		subBtn.id = "check-out-btn"
		let ul = document.createElement("ul")
		ul.id = "cart-ul"
		let div = document.createElement("div")
		div.id = "cart-price-div"
		let btn = document.createElement("button")
		btn.setAttribute("data-menu-item-id", item.id)
		btn.innerText = "Remove Item"
		btn.id= "remove-cart-btn"
		if (itemCart.innerText == "") {
			cartHead.innerText = "Cart"
			itemCart.appendChild(cartHead)
			itemCart.appendChild(div)
			itemCart.appendChild(subBtn)
			itemCart.appendChild(ul)
		}
		const cartUl = document.getElementById("cart-ul");
		const priceDiv = document.getElementById("cart-price-div");
		let li = document.createElement("li")
		li.id = `cart-item-${item.id}`
		li.innerText = `$${item.displayInCart()}`
		li.appendChild(btn)
		cartUl.appendChild(li)
		this.selections.push(item)
		this.priceTotal()
		priceDiv.innerText = `Total: $${this.newTotal}`
	}

	displayInCart() {
		return this.price + " | " + this.title
	}	

	static priceTotal() {
		let obj = MenuSelection.selections
		MenuSelection.newTotal= 0
		for (let i = 0; i < obj.length; i++){
			MenuSelection.newTotal = MenuSelection.newTotal + obj[i].price
		}
		return MenuSelection.newTotal
	}

	static resetCart() {
		MenuSelection.newTotal = 0
		MenuSelection.selections.length = 0
		document.getElementById("cart_div").remove()
	}

	static createCartDiv() {
		const cardDiv = document.createElement("div")
		cardDiv.className = "cart_div"
		cardDiv.id = "cart_div"
		const divCart = document.createElement("div");
		divCart.id = "cart__content";
		cardDiv.appendChild(divCart)
		main.appendChild(cardDiv)
	}

	static createNavLink(){
		const navLi = document.createElement("li");
		navLi.id="nav-cart-li"
		const navLink = document.createElement("a");
		navLink.href= "#cart__content"
		navLink.id = "nav-cart"
		navLink.innerText= "Cart"
		navLi.appendChild(navLink)
		const parentEl= document.getElementById("nav_links")
		const childEl = parentEl.firstElementChild
		parentEl.insertBefore(navLi, childEl)
	}

	

}