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

const removeFromCart = () => {
 //just removing item from front end cart
}



