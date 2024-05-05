import { Provider } from "react-redux"
import { ThunkWithToolkitIndex } from "."
import { store } from "./store"

export const ThunkWithToolkitWrapper = () => {
    return <Provider store={store}>
        <ThunkWithToolkitIndex />
    </Provider>
}