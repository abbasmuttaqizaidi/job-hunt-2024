import { useReducer } from "react"


const initialState = { count: 0 };
export const SimpleUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <button onClick={() => {
                dispatch({
                    type: INCREMENT
                })
            }}>Increment {state?.count}</button>

        </>
    )
}

const INCREMENT = 'incrase'
export const reducer = (state, action) => {

    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state?.count + 1
            }

        default:
            return state;
    }

}