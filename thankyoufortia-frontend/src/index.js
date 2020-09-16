document.addEventListener("DOMContentLoaded", () => {
    getMenuItems();
})


const main = document.getElementById("main-content");


const renderMenu = (menuItem) => {
    let parentDiv = document.createElement("div")
    parentDiv.className = "frame"
    let childDiv = document.createElement("div")
    childDiv.className = "content"
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
    // btn.addEventListener("click", addToOrder)

    childDiv.appendChild(picDiv)
    childDiv.appendChild(h2Div)
    childDiv.appendChild(ingDiv)
    childDiv.appendChild(priceDiv)
    childDiv.appendChild(btn)
    
    parentDiv.appendChild(childDiv)
    main.appendChild(parentDiv)
}