import React, { createContext, useReducer } from 'react'
import { datas } from '../data/Users.js'

const initialState = { datas }
const UsersContext = createContext({})

const actions = {
    createUser(state, action){
        const user = action.payload
        user.id = Math.random()
        return {
            ...state,
            datas: [...state.datas, user]
        }
    },
    updateUser(state, action){
        const userUpdated = action.payload
        return {
            ...state,
            datas: state.datas.map(user => user.id === userUpdated.id ? userUpdated : user)
        }
    },
    deleteUser(state, action){
        const data = action.payload
        return {
            ...state,
            datas: state.datas.filter(user => user.id !== data.id)
        }
    }
}

export const UsersProvider = props => {

    function reducer(state, action){
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UsersContext.Provider value={{ state, dispatch}}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext
