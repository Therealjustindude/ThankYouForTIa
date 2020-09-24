const main = document.getElementById("main-content");
const dinner = document.getElementById("dinner");
const dessert = document.getElementById("dessert");
const drink = document.getElementById("drink");

document.addEventListener("DOMContentLoaded", () => {
    getMenuItems();
})

const removeFromCart = (e) => {
    let itemId = parseInt(e.target.dataset.menuItemId);
    let item = MenuSelection.selections.find(e => e.id == itemId);
    let index = MenuSelection.selections.findIndex(e => e.id == itemId);
    if (index > -1) {
        MenuSelection.selections.splice(index, 1);
    }

    let unwantedItem = document.getElementById("cart-item-" + `${itemId}`);
    unwantedItem.remove();

    MenuSelection.newTotal = MenuSelection.newTotal - item.price;

    const priceDiv = document.getElementById("cart-price-div");

    priceDiv.innerText = `Total: $${MenuSelection.newTotal}`
    
    checkCartLength()
    
}

const checkCartLength = () => {
    if (MenuSelection.selections.length == 0) {
        const cartDiv = document.getElementById("cart_div");
        cartDiv.remove();
        const cartNav = document.getElementById("nav-cart-li");
        cartNav.remove();
    }
}

const checkOutModal = (orderObj) => {
    const bgModal = document.createElement('div')
    bgModal.className = "modal-bg"
    bgModal.id = "modal-bg"
    const modalContent = document.createElement('div')
    modalContent.className = "modal"
    modalContent.id = "modal"
    const modalH2 = document.createElement('h2')
    modalH2.innerText = "Check Out"
    const priceDiv = document.createElement("div")
    priceDiv.id = "check-out-price-div"
    priceDiv.innerText= `Total: $${MenuSelection.newTotal}` 
    const cancelBtn = document.createElement('button')
    cancelBtn.id= "cancel-order-btn"
    cancelBtn.innerText = "Cancel Order"
    cancelBtn.setAttribute("data-order-id", orderObj.id)
    const payBtn = document.createElement('button')
    payBtn.id= "pay-order-btn"
    payBtn.innerText = "Pay for Order"
    payBtn.setAttribute("data-order-id", orderObj.id)
    
    const ul = document.createElement('ul')
    ul.id = "modal-ul"
    orderObj.menu_items.forEach(item => {
        const li = document.createElement('li')
        li.id = `cart-item-${item.id}`
		li.innerText = `$${item.price} | ${item.title}`
        ul.appendChild(li)
    })
    
    modalContent.appendChild(modalH2)
    modalContent.appendChild(priceDiv)
    modalContent.appendChild(ul)
    modalContent.appendChild(payBtn)
    modalContent.appendChild(cancelBtn)
    bgModal.appendChild(modalContent)
    main.appendChild(bgModal)
}

const orderCompleted = () => {
    MenuSelection.resetCart()
    let modalBg = document.getElementById('modal-bg')
    modalBg.remove()
    const cartNav = document.getElementById("nav-cart-li");
    cartNav.remove();
    alert('Order Completed')
}

const orderCanceled = () => {
    MenuSelection.resetCart()
    let modalBg = document.getElementById('modal-bg')
    modalBg.remove()
    const cartNav = document.getElementById("nav-cart-li");
    cartNav.remove();
    alert('Order Canceled')
}


