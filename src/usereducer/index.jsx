import { createContext, useContext, useReducer } from "react"



const initialState = { count: 0 }
export const UseReducerDemo = () => {


    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            <ChildComp />
        </CounterContext.Provider>
    )
}

const CounterContext = createContext({});


export function ChildComp() {
    const context = useContext(CounterContext);

    return <>
       
        <button onClick={() => {

            context.dispatch({
                type: INCREMENT
            })
        }}>Update State  {context.state.count}</button>
    </>
}

export const INCREMENT = 'increment';

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state?.count + 1
            }

        default:
            return { ...state }
    }
}