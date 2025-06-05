import React from 'react'

const Drivefront = () => {
  return (
    <div className='w-full bg-black h-screen'>

       <div className='relative w-9/12 flex mx-auto justify-between gap-20 my-auto'>
          <div className='text-white relative flex flex-col w-1/2 my-auto'>
           <h1 className='text-5xl font-bold'>Drive when you want, make what <br/> you need</h1>
           <p className='my-10'>Earn on your own schedule.</p>
           <div className='flex flex-row gap-3'>
            <button className='bg-white py-2 px-4 rounded-md text-black font-bold'>Get started</button>
            <button className='underline'>Already have an account? Sign in</button>
           </div>
          </div>
         <img className='w-1/2' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1152,w_1152/v1656511866/assets/67/3b671f-4ccd-484a-ad97-cded31823ed0/original/illustration-safety-01-1.png'/>
       </div>

    </div>
  )
}

export default Drivefront
