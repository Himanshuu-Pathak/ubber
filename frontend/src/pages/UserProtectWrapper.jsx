import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {UserDataContext} from '../Context/UserContext'


const UserProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserDataContext)
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() =>{
        if(!token){
            navigate('/login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then(response =>{
            if(response.status === 200){
                setUser(response.data)
                setIsLoading(false);
            }
        })
    })
  return (
    <>
      {children}
    </>
  )
}

export default UserProtectWrapper
