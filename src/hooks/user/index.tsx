import React, { useContext, createContext, useState, useEffect } from 'react'

import {
    getUsers,
    getUsersQuery,
    IUserResponse,
} from '../../providers/eadapi'

interface IUserContext {
    userList: IUserResponse;
    setQuery: (q:string)=>void;
    
}






const UserContext = createContext({} as IUserContext)


const UserContextProvider:React.FC = ({children})=> {
    const [defaultUserList,setDefaultUserList] = useState<IUserResponse>({
        total: 0,
        limit: 0,
        offset: 0,
        row: 0,
        search: [{
            id: '',
            key: '',
            name: '',
            email: '',
            phone: '',
            amount: 0,
            photo_url: '',
            status: 0,
        },]
    })
    const [userList, setUserList] = useState<IUserResponse>({
        total: 0,
        limit: 0,
        offset: 0,
        row: 0,
        search: [{
            id: '',
            key: '',
            name: '',
            email: '',
            phone: '',
            amount: 0,
            photo_url: '',
            status: 0,
        },]
    })

    const [searchQuery, setSearchQuery] = useState<string>('')

    useEffect(()=>{
        getUsers().then((data)=>{
            setUserList(data)
            setDefaultUserList(data)
        })
    },[])

    useEffect(()=>{
        if(searchQuery??searchQuery!= ''){
            getUsersQuery(searchQuery).then((data)=>{
                setUserList(data)
            })
        }else{
            setUserList(defaultUserList)
        }
    },[
        searchQuery,
    ])

    const setQuery = (q:string):void => setSearchQuery(q)

    return (
        <UserContext.Provider
            value={{
                userList,
                setQuery,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

export const useUser = ()=> useContext(UserContext)

