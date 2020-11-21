
import * as ActionTypes from './ActionTypes';

//fetch menu
export const fetchMenu = () => (dispatch) => {
    dispatch (menuLoading(true));

    return fetch('http://davids-restaurant.herokuapp.com/categories.json')

        .then(res => {
            if(res.ok) {
                // console.log(res);
                return res;
            } 

            else {
                var error = new Error('Error ' + res.status + ': ' +res.statusText);
                error.res = res;
                throw error;
            }
        }, error => {
            var errMsg = new Error (error.message);
            throw errMsg;
        })
        .then(res => res.json())
        .then(menu => dispatch(addMenu(menu)))
        .catch(error => dispatch(menuFailed(error.message)))
};

// Menus Loading
export const menuLoading = () => ({
    type: ActionTypes.MENU_LOADING
});

// Menus failed
export const menuFailed = (errMsg) => ({
    type: ActionTypes.MENU_FAILED,
    payload: errMsg
});

// add Menus
export const addMenu = (menu) => ({
    type: ActionTypes.ADD_MENU,
    payload: menu
});

//fetch menu_items
export const fetchMenuItems = (category) => (dispatch) => {
    dispatch (menuItemsLoading(true));

    return fetch('http://davids-restaurant.herokuapp.com/menu_items.json?category='+category)

        .then(res => {
            if(res.ok) {
                console.log(res);
                return res;
            } 

            else {
                var error = new Error('Error ' + res.status + ': ' +res.statusText);
                error.res = res;
                throw error;
            }
        }, error => {
            var errMsg = new Error (error.message);
            throw errMsg;
        })
        .then(res => res.json())
        .then(menuItems => dispatch(addMenuItems(menuItems)))
        .catch(error => dispatch(menuItemsFailed(error.message)))
};

// MenuItems Loading
export const menuItemsLoading = () => ({
    type: ActionTypes.MENUITEMS_LOADING
});

// MenusItems failed
export const menuItemsFailed = (errMsg) => ({
    type: ActionTypes.MENUITEMS_FAILED,
    payload: errMsg
});

// add MenuItems
export const addMenuItems = (menuItems) => ({
    type: ActionTypes.ADD_MENUITMES,
    payload: menuItems
});