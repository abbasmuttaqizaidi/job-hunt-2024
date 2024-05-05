import { Provider } from "react-redux"
import { store } from "./store"
import { ThunkWithCreateAsyncIndex } from "."

export const ThunkWithCreateAsyncWrapper = () => {
    return (
        <Provider store={store}>
            <ThunkWithCreateAsyncIndex />
        </Provider>
    )
}