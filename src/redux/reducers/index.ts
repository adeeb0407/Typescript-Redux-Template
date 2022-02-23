import { combineReducers } from "redux";
import bankReducer from "./bankReducer"
import fetchUser from "./fetchUsers"


const reducers = combineReducers({
    bank: bankReducer,
    fetchUser
})

export default reducers

export type RootState = ReturnType<typeof reducers>