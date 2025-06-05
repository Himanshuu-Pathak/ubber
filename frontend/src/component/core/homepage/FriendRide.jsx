import React from 'react'

const FriendRide = () => {
  return (
    <div className='flex relative w-10/12 my-20 justify-between mx-auto'>
       <img className='relative  h-[300px] rounded-2xl object-cover' src='  https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_648,w_1152/v1683576635/assets/f7/7aa380-a378-47bf-8b88-aaba1587efdd/original/landing-stops-group-rides.png'/>
       <div className='flex flex-col w-2/5 '>
        <h1 className=' font-bold text-4xl my-3'>Ride with friends seamlessly</h1>
        <p className='my-3 '>Riding with friends just got easier: set up a group ride in the Uber app, invite your friends, and arrive at your destination. Friends who ride together save together.</p>
        <button className='my-3 border-black z-20 w-fit'>Learn more</button>
       </div>
    </div>
  )
}

export default FriendRide
