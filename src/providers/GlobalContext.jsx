import { createContext, useReducer } from "react";
import { reducer } from "./ClobalContextReducer";

export const GlobalContext = createContext();


const initState = {
    token: ''
}

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initState)

    value.c = () => {
        dispatch({ type: 'CLOSE_ALERT' })
    }
}