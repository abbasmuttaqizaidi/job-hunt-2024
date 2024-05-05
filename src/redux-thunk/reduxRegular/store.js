import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunkReducerRegular } from "./reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({ thunkReducerRegular });

export const thunkStoreRegularRedux = createStore(rootReducer, applyMiddleware(thunk));