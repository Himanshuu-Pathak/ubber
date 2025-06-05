import React, { useContext }  from 'react'
import { FaQrcode } from 'react-icons/fa'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../../Context/UserContext';

const Formls = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
   
  const {user,setUser} = useContext(UserDataContext);
  console.log({ user, setUser });
   const navigate = useNavigate()
  
    const captainHandler = (e)=>{
      navigate("/Captain-Login")
    }


 const submitHandler = async (e) =>{
  e.preventDefault();
  
  try {
    const userData = {
        email,
        password,
    };
    const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        userData
    );
    if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
    }
    setEmail('');
    setPassword('');
} catch (error) {
    console.error('Login failed:', error.response?.data?.message || error.message);
    alert('Login failed. Please check your credentials.');
}
 }
  return (
    <div>
      <form onSubmit={submitHandler} className='flex flex-col relative w-1/4 mx-auto my-30'>
        <div className='flex flex-col gap-3'>

          <h2 className=' text-2xl'>What's your phone number or email?</h2>
          <input required value={email} type='text' onChange={(e) =>{setEmail(e.target.value)}} placeholder='Enter Phone number or Email' className='border-2 rounded-md py-3 px-2'/>

          <h2 className=' text-2xl'>Password</h2>
          <input required value={password} onChange={(e) =>{setPassword(e.target.value)}} placeholder='Password' className='border-2 rounded-md py-3 px-2'/>

          <button className='text-white py-3 w-full bg-black rounded-md'>Continue</button>
        </div>

        <div className='flex flex-row w-full my-5 justify-between'>
           <div className='bg-black w-1/2 h-0.5 my-3 '></div>
           <p>OR</p>
           <div className='bg-black w-1/2 h-0.5 my-3'></div>
        </div>

        <div className='flex flex-col gap-5'>
          <button className='bg-pink-50 w-full rounded-md py-3'>Continue with google</button>
          <button className='bg-pink-50 w-full rounded-md py-3'>Continue with apple</button>
        </div>

        <div className='flex flex-row w-full my-5 justify-between'>
           <div className='bg-black w-1/2 h-0.5 my-3 '></div>
           <p>OR</p>
           <div className='bg-black w-1/2 h-0.5 my-3'></div>
        </div>

        <div className='flex flex-col gap-5 w-full'>
          <button className='flex mx-auto bg-yellow-700 rounded-md w-full'>
           
            <p onClick={captainHandler}  className='mx-auto py-2 text-white'> Login as Captain</p>
          </button>
          <p className='text-sm mx-auto'>By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
        </div>
      </form>
    </div>
  )
}

export default Formls
