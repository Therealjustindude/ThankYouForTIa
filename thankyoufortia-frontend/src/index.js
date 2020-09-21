const main = document.getElementById("main-content");
const dinner = document.getElementById("dinner");
const dessert = document.getElementById("dessert");
const drink = document.getElementById("drink");

document.addEventListener("DOMContentLoaded", () => {
    getMenuItems();
})

const addToSelections = (e)=>{
    e.preventDefault();
    let itemId = parseInt(e.target.dataset.menuItemId)
    let currentSelection = Menu.menuItems.find(e => e.id === itemId)
    new MenuSelection(currentSelection.id, currentSelection.title, currentSelection.price)
    alert("Added to cart.");
}

const removeFromCart = (e) => {
    let itemId = parseInt(e.target.dataset.menuItemId);
    let item = MenuSelection.selections.find(e => e.id == itemId);
    var index = MenuSelection.selections.findIndex(e => e.id == itemId);
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
        const cartDiv = document.getElementById("item-cart");
        cartDiv.remove();
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
    cancelBtn.innerText = "Cancel Order"
    cancelBtn.addEventListener("click", deleteOrder)
    const payBtn = document.createElement('button')
    payBtn.innerText = "Pay for Order"
    payBtn.addEventListener("click", orderPayed)
    //ADD FUNCTION FOR BUTTONS
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
    document.getElementById("main-content").appendChild(bgModal)
}



