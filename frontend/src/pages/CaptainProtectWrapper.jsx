import React  from 'react'
import { CaptainDataContext } from '../Context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const CaptainProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token')
    const [isLoading, setIsLoading] = useState(false);
    const {captain, setCaptain} = useContext(CaptainDataContext);
    const navigate = useNavigate()

    useEffect(() =>{

    const fetchCaptainProfile = async () =>{

 
        if(!token){
            navigate('/captain-login');
        }

        try{
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
                headers:{
                    Authorization : `Bearer ${token}`,
                },
            });

            if(response.status === 200){
                setCaptain(response.data.captain);
                setIsLoading(false);
            }
        }catch(error){
            console.error('Error in fetching captain profile :',error);
            localStorage.removeItem('token');
            navigate('/captain-login')
        }
    }
    fetchCaptainProfile();
}, [token]);

if(isLoading){
    return <div>Loading...</div>
}
    
  return (
    <>
       {children}
    </>
  )
}

export default CaptainProtectWrapper
