// actions.js
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
 


//Todo Actions

export const ADD_TODO = 'add_todo';
export const REMOVE_TODO = 'remove_todo';

export const addTodo = (payload) =>({
    type: ADD_TODO,
    payload: payload
})