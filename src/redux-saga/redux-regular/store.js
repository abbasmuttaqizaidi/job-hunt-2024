import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./reducer";
import createSagaMiddleware from 'redux-saga';
import { rootSage } from "./sagas";


const sagaMiddleware = createSagaMiddleware()
const rootreducer = combineReducers({
    userReducer
})

export const store = createStore(rootreducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSage);