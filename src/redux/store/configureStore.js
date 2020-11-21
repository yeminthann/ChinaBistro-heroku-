import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Menu} from '../reducers/MenuReducer';
import { MenuItems } from '../reducers/MenuItemsReducer';
import thunk from 'redux-thunk';
// to log the states && actions at console
import logger from 'redux-logger';

// create store (now states r available in store)
export const configureStore = () => {
    const store = createStore(
        combineReducers({
            Menu,
            MenuItems
        }),
        // to perform before returning the store data
        applyMiddleware (thunk, logger)
    );
    return store;

};


/* to App.js ===> */