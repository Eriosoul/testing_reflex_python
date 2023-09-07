import { createContext } from "react"
import { E } from "/utils/state.js"

export const initialState = {"author": "", "is_hydrated": false, "quote": ""}
export const initialEvents = [E('my_state.hydrate', {})]
export const StateContext = createContext(null);
export const EventLoopContext = createContext(null);