import React from 'react'
import { useState } from 'react'
import ToDrive from './ToDrive'
import Todeliver from './Todeliver'

const Need = () => {
    const [Active,setActive] = useState('drive')
  return (
    <div  className='mx-auto w-10/12'>
       <h1 className='text-4xl font-bold'>Here's what you need to sign up</h1>
       <div className='flex  my-10 gap-5'>
          <button onClick={() =>setActive('drive')} className='font-bold'>To drive</button>
          <button onClick={() =>setActive('deliver')} className='font-bold'>To Deliver</button>
       </div>
       <div>{Active === 'drive'&& <ToDrive/>}</div>
       <div>{Active === 'deliver'&& <Todeliver/> }</div>

       <button className='z-10 shadow my-14'>How to signup to deliver</button>

       <div className='flex w-9/12 mx-auto gap-10'>
        <div className='flex flex-col gap-3'>
            <img className='h-64' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_349,w_620/v1535744030/assets/7e/4c2f7e-da89-4c1e-a8cf-1b56172c6e5b/original/D_Fleet2x.png'/>
            <h2 className='font-bold'>Join a fleet</h2>
            <p>Find and join a fleet partner and start driving for them using the Uber app.</p>
        </div>
        <div className='flex flex-col'>
            <div className='flex flex-col gap-3'>
               <img className='h-64' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_349,w_620/v1535753709/assets/ec/8183dc-ffee-468a-9ee8-175bd1fb1f55/original/D_Fleet_22x.png'/>
               <h2 className='font-bold'>Become a fleet partner</h2>
               <p>Start making money. Connect your drivers and upload the required documents to your profile.</p>
            </div>
            <button className='my-10 z-10 shadow w-1/4'>Learn More</button>
        </div>
       </div>
    </div>
  )
}

export default Need
