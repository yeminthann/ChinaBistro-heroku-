

import * as ActionTypes from '../actions/ActionTypes';

export const Menu = (state = {
    isLoading: true,
    errMsg: null,
    menu: []
}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_MENU:
            return {
                ...state, 
                isLoading: false, 
                errMsg: null, 
                menu: action.payload
            }

        case ActionTypes.MENU_LOADING:
            return {
                ...state, 
                isLoading: true, 
                errMsg: null, 
                menu: []
            };

        case ActionTypes.MENU_FAILED:
            return {
                ...state, 
                isLoading: false, 
                errMsg: action.payload, 
                menu: []
            }

        default:
            return state;
    }
};
