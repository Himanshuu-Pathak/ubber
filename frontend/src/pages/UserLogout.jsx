import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const UserLogout =  (e) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

  try{

        const response =  axios.get(`${import.meta.env.VITE_API_URL}/users/logout` , {
            headers :{
                Authorization : `Bearer ${token}`
            }
        })

        if(response.status === 200){
            localStorage.removeItem('token')
            navigate('/login')
        }

    }catch(error){
        console.error('Error in logging out :',error);
       
        
   }
  return (
    <div>
      UserLogout
    </div>
  )
}

export default UserLogout
