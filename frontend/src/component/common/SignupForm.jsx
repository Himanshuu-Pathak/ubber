import React from 'react'
import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import UserContext from '../../Context/UserContext';
import { UserDataContext } from '../../Context/UserContext';

const SignupForm = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [userData, setUserData] = useState({});

    const navigate = useNavigate();

    const {user,setUser} = useContext(UserDataContext)

    const SubmitHandler = async (e)=>{
        e.preventDefault();
       // console.log(email,password)
        const newUser = {
            fullname:{
                firstname,
                lastname
            },
            email:email,
            password:password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

        if(response.status === 201){
            const data = response.data

            setUser(data.user)
            navigate('/home')
        }
        
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
    }
  return (
    <div className='w-full'>

        <form onSubmit={SubmitHandler} className='relative flex flex-col w-1/4 mx-auto  my-20 '>

            <div className='flex flex-col'>
                <div className='text-3xl my-2'>Whats your Name ?</div>
                <div className='flex gap-3'>
                    <div className='relative flex flex-col w-1/2 '>
                        <p className='text-2xl my-2'>Firstname :</p>
                        <input className='py-2 my-1 bg-pink-50' onChange={(e)=>{setFirstname(e.target.value)}} required value={firstname}  type='text' placeholder='First name'/>
                    </div>
                    <div className='flex flex-col w-1/2 relative'>
                        <p className='text-2xl my-2'>Lastname :</p>
                        <input className='py-2 my-1 bg-pink-50' onChange={(e)=>{setLastname(e.target.value)}} required type='text' value={lastname} placeholder='Lastname'/>
                    </div>
                </div>

               <div className='flex flex-col'>
                <p className='text-2xl my-2'>Whats your email ?</p>
                <input className='py-2 my-1 bg-pink-50' onChange={(e)=>{setEmail(e.target.value)}} required value={email} placeholder='HP@gmail.com'/>
               </div>

               {/* //password section */}

               <div>
                <p className='text-2xl my-2'>Enter your password</p>
                <input className='py-2 my-1 bg-pink-50 w-full' onChange={(e)=>{setPassword(e.target.value)}} required value={password} placeholder='Enter your Password'/>
               </div>

               <button onClick={SubmitHandler} className='py-2 mx-auto text-white bg-yellow-600 my-10 w-full rounded-md'>Create Account</button>
            </div>

        </form>

    </div>
  )
}

export default SignupForm
