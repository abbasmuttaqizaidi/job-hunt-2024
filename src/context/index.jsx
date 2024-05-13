import { createContext, useContext } from "react";


export const initialGlobalState = {
    medicines: [],
    search: ''
}
export const MedicineContext = createContext({ ...initialGlobalState })

export const useContextLayer = () => {
    const context = useContext(MedicineContext);
    if (!context)
        throw Error('Undefined Context');
    return {
        ...context
    }
}