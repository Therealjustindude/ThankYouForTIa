document.addEventListener('click', (e) => {
	
	if (e.target.matches('.card__btn')) {
		e.preventDefault();
		let itemId = parseInt(e.target.dataset.menuItemId)
		let currentSelection = MenuItem.menuItems.find(e => e.id === itemId)
		new MenuSelection(currentSelection.id, currentSelection.title, currentSelection.price)
		alert("Added to cart.");
	}

	if (e.target.matches('#check-out-btn')) {
		e.preventDefault();
		sendToBackEnd(e)
	}
	if (e.target.matches('#remove-cart-btn')) {
		e.preventDefault();
		removeFromCart(e)
	}
	if (e.target.matches('#cancel-order-btn')) {
		e.preventDefault();
		deleteOrder(e)
	}
	if (e.target.matches('#pay-order-btn')) {
		e.preventDefault();
		orderPayed(e)
	}
	
})