import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
const Domore = () => {
  return (
    <div className='flex flex-col bg-pink-50 '>
    <div className='relative flex flex-col h-1/2  w-9/12 mx-auto my-auto'>
       <h1 className='text-4xl font-bold my-10'>Do more in the app</h1>

       <div className='flex flex-row gap-3 relative my-20'>


        <div className='flex bg-white w-1/2 my-auto justify-between h-48 '>
            <img className='relatve h-34 my-auto' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_188,w_188/v1690807720/assets/a5/9986ad-0d9f-4396-8539-389bce97f579/original/Final-Download-Uber-App.png'/>
            <div className='flex flex-col w-1/2 my-auto'>
                <h2 className='text-2xl font-bold mx-3 '>Download the Uber APP</h2>
                <p className='mx-3'>Scan to download</p>
            </div>
            <FaArrowRight className='my-auto'/>
        </div>


        <div className='flex bg-white w-1/2 justify-between  '>
      
            <button className='text-white font-bold text-5xl h-1/2 my-auto mx-5 px-2 py-6 rounded-md bg-black'>Uber</button>
            <h2 className='my-auto font-bold text-2xl'>Signup to ride</h2>
            <FaArrowRight className='my-auto'/>
        </div>


       </div>

    </div>
    </div>
  )
}

export default Domore
