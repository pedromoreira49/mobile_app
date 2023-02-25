import React, { createContext, useReducer } from 'react'
import { datas } from '../data/Users.js'

const initialState = { datas }
const UsersContext = createContext({})

const actions = {
    deleteUser(state, action){
        const data = action.payload
        return {
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
