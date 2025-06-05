import React from 'react'

const BuisnessSolution = () => {
  return (
    <div className='my-20 bg-black py-20 w-full  mx-auto justify-between'>
      <div className='flex bg-black w-10/12 relative justify-between mx-auto '>
        <div className='text-white relative  w-1/2'>
            <h2 className='text-4xl font-bold'>Looking for buisness<br/> solutions</h2>
            <p>Get information about how companies leverage Uber <br/> for Business:</p>
           
              <li className='translate-x-10'>Business travel </li>
              <li className='translate-x-10'>Get started</li>
              <li className='translate-x-10'>Courtesy rides</li>
              <li className='translate-x-10'>Meal programs</li>
              <li className='translate-x-10'>Item delivery</li>
           
            <button className='bg-white py-2 px-3 text-black rounded-md font-bold mx-5 my-10 hover:cursor-pointer'>Get started</button>
            <button className='underline py-2 hover:cursor-pointer '>checkout our solutions</button>
        </div>
        <img className='relative w-1/2' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_648,w_1152/v1691776332/assets/d6/48f5b6-bb5f-450e-8733-90aefecbd09e/original/U4B_Spot_U4BWebsite.jpg'/>
      </div>
    </div>
  )
}

export default BuisnessSolution
