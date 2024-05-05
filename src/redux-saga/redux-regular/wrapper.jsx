import { Provider } from "react-redux"
import { SagaRegularReduxIndex } from "."
import { store } from "./store"

export const SagaRegularReduxWrapper = () => {
    return (
        <Provider store={store}>

            <SagaRegularReduxIndex />
        </Provider>
    )
}