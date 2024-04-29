// store.js
import { combineReducers, createStore } from 'redux'; 
import {counterReducer, todoReducer} from './reducer';

const rootreducer = combineReducers({
    counter: counterReducer,
    todoReducers: todoReducer
})

const storeTraditional = createStore(rootreducer);

export default storeTraditional;
