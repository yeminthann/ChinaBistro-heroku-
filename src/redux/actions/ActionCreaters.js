
import * as ActionTypes from './ActionTypes';

export const fetchMenu = () => (dispatch) => {
    dispatch (menuLoading(true));

    return fetch('http://davids-restaurant.herokuapp.com/categories.json')

        .then(res => {
            if(res.ok) {
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


export const menuLoading = () => ({
    type: ActionTypes.MENU_LOADING
});


export const menuFailed = (errMsg) => ({
    type: ActionTypes.MENU_FAILED,
    payload: errMsg
});

// add Menus
export const addMenu = (menu) => ({
    type: ActionTypes.ADD_MENU,
    payload: menu
});
