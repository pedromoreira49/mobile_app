import React, { createContext } from 'react'
import { datas } from '../data/Users.js'

const UsersContext = createContext({})

export const UsersProvider = props => {
    return (
        <UsersContext.Provider value={{
            state: {
                datas
            }
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext
