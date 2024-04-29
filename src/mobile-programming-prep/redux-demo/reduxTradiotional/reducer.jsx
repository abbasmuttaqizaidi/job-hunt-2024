// reducers.js
import { INCREMENT, DECREMENT, ADD_TODO } from "./actions";

const initialState = {
    count: 0,
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
};


const initialTodoState = {
    todos:[]
}

export const todoReducer = (state = initialTodoState, action) =>{

    switch (action.type){
        case ADD_TODO:
            console.log(state, action,'safsafsaf');

            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            return state
    }
}
