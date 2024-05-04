import { Provider } from "react-redux"
import { ThunkIndex } from "."
import { thunkStoreRegularRedux } from "./store"

export const ThunkWrapper = () => {

    return (
        <Provider store={thunkStoreRegularRedux}>
            <ThunkIndex />
        </Provider>
    )
}

//Using traditional / regular Redux