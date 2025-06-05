import React from 'react'

const Safety = () => {
  return (
    <div className='flex flex-col w-9/12 mx-auto gap-10 my-20'>
       <h1 className='text-4xl font-bold'>Safety on the road</h1>
       <p className=''>Your safety drives us to continuously raise the bar.</p>
       <button className='z-10 shadow w-1/12'>Learn more</button>
       <div className='relative flex gap-10 mx-auto justify-between'>
         <div className='flex flex-col gap-3 w-1/3 '>
            <img className='w-20 h-20' src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_60,w_60/v1535523054/assets/6f/7f63bb-10f4-488b-9000-593bcfe40dca/original/Safety-Center.svg'/>
            <h2 className='font-bold'>Protection on every trip</h2>
            <p>Each trip you take with the Uber app is insured to protect you and your rider.</p>
         </div>
         <div className='flex flex-col gap-3 w-1/3 '>
            <img className='w-20 h-20'  src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_60,w_60/v1535523101/assets/22/bdf7a1-f49f-47c0-a59e-3e6bc274b6f2/original/24_7-Support.svg'/>
            <h2 className='font-bold'>Help if you need it</h2>
            <p>The Emergency Button calls 911. The app displays your trip details so you can quickly share them with authorities.</p>
            <button className='z-10 shadow w-1/4'>Learn more</button>
         </div>
         <div className='flex flex-col gap-3 w-1/3 '>
            <img className='h-20 w-20'  src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_60,w_60/v1535523101/assets/22/bdf7a1-f49f-47c0-a59e-3e6bc274b6f2/original/24_7-Support.svg'/>
            <h2 className='font-bold'>Community Guidelines</h2>
            <p>Our standards help to create safe connections and positive interactions with everyone. Learn how our guidelines apply to you.</p>
            <button className='z-10 shadow w-1/4'>Learn more</button>
         </div>
       </div>
    </div>
  )
}

export default Safety
