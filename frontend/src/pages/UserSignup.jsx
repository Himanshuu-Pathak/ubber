import React from 'react'
import SignupForm from '../component/common/signupForm'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const UserSignup = () => {
  const navigate = useNavigate()

  const captainHandler = (e)=>{
    navigate("/Captain-Signup")
  }
  return (
    <div className='flex flex-col w-full h-screen' >
      <SignupForm/>
      <button onClick={captainHandler} className='bg-red-950 text-white w-1/4 mx-auto py-2 my-5 rounded-md'>Signup as Captain</button>
    </div>
  )
}

export default UserSignup
