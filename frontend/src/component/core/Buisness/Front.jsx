import React from 'react'

const Front = () => {
  return (
    <div className='w-full bg-black text-white'>
      <div className='flex relative w-9/12 mx-auto justify-between gap-30 py-20 bg-black '>
        <div className='flex flex-col relative w-1/2 my-auto gap-10'>
            <h2 className='text-5xl font-bold'>The best of Uber for your business</h2>
            <p>Uber for Business gives your organization more control, deeper insights, and features built for enterprise users. Manage and track business travel, meal programs, and more on one dashboard.</p>
            <div className='flex gap-5 '>
                <button className='px-4 py-3 rounded-md font-bold  bg-white text-black'>How to get started</button>
                <button className='flex flex-col gap-2'>
                    <p>Checkout Our Solutions</p>
                    <div className='relative w-full h-0.5 bg-white'></div>
                </button>
            </div>
        </div>
        <div className='w-1/2'>
            <img src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1152,w_1152/v1685006943/assets/07/61a159-ae6b-4821-bcb4-83aaf8c4bdf6/original/220428_UBER_CDMX_M-DT1-A_001035_VS_R2.jpg'/>
        </div>
      </div>
    </div>
  )
}

export default Front
