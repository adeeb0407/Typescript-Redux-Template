import { Dispatch } from "redux"
import { ActionType, UserType } from "../action-types"
import { Action } from "../actions/index"
import { UserAction } from "../actions/user"
import * as api from '../api'

export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
}

export const withdrawMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount
        })
    }
}

export const bankrupt = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.BANKRUPT
        })
    }
}

export const fetchUsers = () => async(dispatch: Dispatch<UserAction>) => {
    try {
        const {data} = await api.getUsers()

        dispatch({
            type : UserType.FETCH_USERS,
            payload : data
        }) // dispatch is coming form redux-thunk also the aysn (dispatch)
    } catch (error) {
        console.log(error)
    }
  }