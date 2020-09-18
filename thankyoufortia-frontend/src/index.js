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



