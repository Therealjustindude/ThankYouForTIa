const BASE_URL = 'http://localhost:3000';
const MENU_URL = `${BASE_URL}/menu_items`;
const MENUSEL_URL = `${BASE_URL}/menu_selections`;
const ORDER_URL = `${BASE_URL}/orders`;

const getMenuItems = () => {
	fetch(MENU_URL).then(response => {
        return response.json()
    }).then(jsonObj => {
        jsonObj.forEach(menuItem => {
            new MenuItem(menuItem.id, menuItem.title, menuItem.ingredients, menuItem.category, menuItem.price, menuItem.image);
        });
        MenuItem.renderMenu();
    })
}

const sendToBackEnd = (e) => {	
    let currentSel = MenuSelection.selections
    let data = { order: {"menu_selections": currentSel }}
    fetch(ORDER_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify( data )
    }).then(resp => {
        return resp.json()
    }).then(orderObj => {
        if (orderObj.message) {
            alert(orderObj.message)
        } else {
            checkOutModal(orderObj)
        }
    })
}

const deleteOrder = (e) => {
    let orderId = e.target.dataset.orderId
    let data = { order: {"id": orderId }}
    fetch(`${ORDER_URL}/${orderId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify( data )
    })
    orderCanceled()
}

const orderPayed = (e) => {
    let orderId = e.target.dataset.orderId
    let data = { order: {"id": orderId }}
    fetch(`${ORDER_URL}/${orderId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify( data )
    }).then(resp => {
        return resp.json()
    }).then(orderObj => {
        if (orderObj.message) {
            alert(orderObj.message)
        } else {
            orderCompleted()
        }
    })
}


