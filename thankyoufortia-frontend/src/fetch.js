const BASE_URL = 'http://localhost:3000';
const MENU_URL = `${BASE_URL}/menu_items`;

const getMenuItems = () => {
	fetch(MENU_URL).then(response => {
        return response.json()
    }).then(jsonObj => {
        jsonObj.forEach(menuItem => {
            new Menu(menuItem.id, menuItem.title, menuItem.ingredients, menuItem.category, menuItem.price, menuItem.image);
        });
        Menu.renderMenu();
    })

}
