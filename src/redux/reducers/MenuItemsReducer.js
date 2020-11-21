

import * as ActionTypes from '../actions/ActionTypes';

export const MenuItems = (state = {
    isLoading: true,
    errMsg: null,
    menuItems: []
}, action) => {

    // actions (from actionCreaters <===)
    switch (action.type) {
        case ActionTypes.ADD_MENUITMES:
            return {
                ...state, 
                isLoading: false, 
                errMsg: null, 
                menuItems: action.payload
            }

        case ActionTypes.MENUITEMS_LOADING:
            return {
                ...state, 
                isLoading: true, 
                errMsg: null, 
                menuItems: []
            };

        case ActionTypes.MENUITEMS_FAILED:
            return {
                ...state, 
                isLoading: false, 
                errMsg: action.payload, 
                menuItems: []
            }

        default:
            return state;
    }
};
