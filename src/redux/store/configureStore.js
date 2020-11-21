import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Menu} from '../reducers/MenuReducer';
import { MenuItems } from '../reducers/MenuItemsReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            Menu,
            MenuItems
        }),
        applyMiddleware (thunk, logger)
    );
    return store;

};
