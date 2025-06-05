import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { CaptainDataContext } from '../Context/CaptainContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainSignup = () => {
  const [firstname,setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [color ,setColor] = useState('');
  const [plate,setPlate] = useState('');
  const [capacity, setCapacity] = useState('');
  const [vehicleType,setVehicleType] = useState('');
  //const [userData ,setUserData] = useState({});

  const navigate = useNavigate()

  const {captain, setCaptain} = useContext(CaptainDataContext)
  console.log(CaptainDataContext)
  console.log(useContext(CaptainDataContext))

  const continueHandler = async (e) =>{
    e.preventDefault();
    //console.log(firstname,lastname,email,password, color, plate,capacity,vehicleType);

    const captainData = {
      fullname:{
        firstname:firstname,
        lastname:lastname
      },
      email:email,
      password:password,
      vehicle:{
        color:color,
        plate:plate,
        capacity:capacity,
        vehicleType:vehicleType
      }
    }
  try{
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if (response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/Captain_Home')
    }
    }catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert('Signup failed. Please check your input and try again.');
  }

    setEmail('')
    setFirstname('')
    setLastname('')
    setPassword('')
    setPlate('')
    setColor('')
    setCapacity('')
    setVehicleType('')

  }
  return (
   // <CaptainDataContext.Provider value={[captain, setCaptain]}>
    <div>
       <form className='flex flex-col w-1/4 mx-auto my-20'>
           <div className='flex flex-col'>
             <p className='text-3xl my-3'>Enter your full name :</p>

             <div className='flex gap-3 my-2 '>
                 <div className='flex flex-col w-1/2'>
                    <p className='text-2xl'>Firstname :</p>
                    <input required onChange={(e)=>{setFirstname(e.target.value)}} placeholder='firstname' className='py-2 bg-pink-50 my-1' value={firstname} type='text'/>
                 </div>
                 <div className='flex flex-col w-1/2'>
                    <p className='text-2xl'>Lastname :</p>
                    <input onChange={(e)=>{setLastname(e.target.value)}} placeholder='lastname' value={lastname} className='bg-pink-50 py-2 my-1' type='text'/>
                 </div>
             </div>
           </div>

            <div className='flex flex-col'>
                <p className='text-2xl my-2'>Whats your email ?</p>
                <input className='py-2 my-1 bg-pink-50' onChange={(e)=>{setEmail(e.target.value)}} required value={email} placeholder='HP@gmail.com'/>
            </div>

            <div>
                <p className='text-2xl my-2'>Enter your password</p>
                <input className='py-2 my-1 bg-pink-50 w-full' onChange={(e)=>{setPassword(e.target.value)}} required value={password} placeholder='Enter your Password'/>
            </div>

            <div className='flex flex-col'>
                 <p className='text-3xl'>Vehicle</p>
                 <div className='flex flex-col'>
                    <div className='flex gap-2 justify-between'>
                      <p className='text-2xl my-1'>Color:</p>
                      <input onChange={(e)=>{setColor(e.target.value)}} type='text' value={color} placeholder='type color' className='bg-pink-50 py-1 my-1'/>
                    </div>
                    <div className='flex gap-2 justify-between'>
                      <p className='text-2xl my-1'>Plate :</p>
                      <input onChange={(e)=>{setPlate(e.target.value)}} type='text' value={plate} placeholder='type plate number' className='bg-pink-50 py-1 my-1'/>
                    </div>
                    <div className='flex gap-2 justify-between'>
                      <p className='text-2xl my-1'>Capacity :</p>
                      <input onChange={(e)=>{setCapacity(e.target.value)}} type='number' value={capacity} placeholder='type capacity' className='bg-pink-50 py-1 my-1'/>
                    </div>
                    <div className='flex gap-2 justify-between'>
                      <p className='text-2xl my-1'>Vehicle Type :</p>
                      <input onChange={(e)=>{setVehicleType(e.target.value)}} type='text' value={vehicleType} placeholder='type vehicle' className='bg-pink-50 py-1 my-1 w-1/2 '/>
                    </div>
                 </div>
            </div>

            <button onClick={continueHandler}  className='py-2 mx-auto text-white bg-yellow-600 my-10 w-full rounded-md'>Continue</button>
       </form>
    </div>

 //   </CaptainDataContext.Provider>
  )
}

export default CaptainSignup
