import React from 'react'

const SuggestionCard = () => {
  return (
    <div className='flex flex-col w-10/12 mx-auto '>
      <h1 className='text-4xl font-black my-10'>Suggestion</h1>
      <div className='flex relative mx-auto justify-evenly'>
        <div className='flex relative bg-pink-50 h-40 w-auto gap-3 mx-3 rounded-md'>
            <div className='relative w-2/3'>
               <h2 className='font-bold text-black my-2'>Courier</h2>
               <p>Uber make same day delivery faster than ever</p>
               <button className='font-bold text-black my-2 bg-white py-1 px-1'>Details</button>
            </div>
            <img className='relative w-1/3' src='https://cn-geo1.uber.com/static/mobile-content/Courier.png'/>
        </div>
        <div className='flex relative bg-pink-50 h-40 w-auto gap-2 mx-3 rounded-md'>
            <div className='relative w-2/3'>
                <h2 className='font-bold text-black my-2'>Reserve</h2>
                <p>Reserve your order in advance so that you can relax on the day of trip</p>
                <button className='font-bold text-black my-2 bg-white py-1 px-1'>Details</button>
            </div>
            <img className='relative w-1/3' src='https://cn-geo1.uber.com/static/mobile-content/uber_reserve/reserve_clock.png'/>
        </div>
        <div className='flex relative bg-pink-50 h-40 w-auto mx-3 rounded-md'>
            <div className='relative w-2/3'>
                <h2 className='font-bold text-black my-2'>Ride</h2>
                <p >Go anywhere with Uber . Req a ride hop in and go</p>
                <button className='font-bold text-black bg-white rounded-3xl py-1 px-1 my-2'>Details</button>
            </div>
            <img className='relative w-1/3' src='https://cn-geo1.uber.com/static/mobile-content/launch-experience/ride.png'/>
        </div>
      </div>
    </div>
  )
}

export default SuggestionCard
