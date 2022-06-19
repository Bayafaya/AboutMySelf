import { combineReducers, createStore } from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {searchUserReducer} from './searchUser';

const rootReducer = combineReducers({
    searchUser:searchUserReducer,
})
export const store = createStore(rootReducer,composeWithDevTools());