import React, { createContext, useState } from 'react'
export const deleteShareContext = createContext();
export const createShareContext = createContext();
export const editShareContext = createContext();
export const isAuthShareContext = createContext();
const Contextshared = ({ children }) => {

    const [deleteContext, setDeleteContext] = useState({})
    const [createContext, setCreateContext] = useState({})
    const [editContext, setEditContext] = useState({})
    const [isAuthContext, setisAuthContext] = useState(true)
    return (

        <deleteShareContext.Provider value={{ deleteContext, setDeleteContext }}>
            <createShareContext.Provider value={{ createContext, setCreateContext }}>
                <editShareContext.Provider value={{ editContext, setEditContext }}>
                    <isAuthShareContext.Provider value={{ isAuthContext, setisAuthContext }}>
                        {children}
                    </isAuthShareContext.Provider>
                </editShareContext.Provider>
            </createShareContext.Provider>
        </deleteShareContext.Provider>



    )

}

export default Contextshared