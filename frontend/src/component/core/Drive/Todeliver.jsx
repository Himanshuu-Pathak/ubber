import React from 'react'
import { FaFileAlt, FaStar } from 'react-icons/fa'

const Todeliver = () => {
  return (
    <div className='flex justify-between w-10/12 gap-5 py-10'>
      <div className='relative flex flex-col w-1/3'>
       <FaStar className='text-2xl'/>
        <h2 className=' text-2xl relative '>Requirements</h2>
        <div className='my-5'>
            <li>Be at least 18 years old</li>
            <li>Clear a background screening</li>
        </div>
      </div>
      <div className='relative flex flex-col w-1/3'>
        <FaFileAlt className='text-2xl'/>
         <h2 className=' text-2xl relative '>Documents</h2>
         <div className='my-5'>
            <li>Valid driver's license</li>
            <li>Proof of residency in your city, state or province like Pan Card</li>
            <li>Vehicle documents such as insurance, vehicle registration certificate</li>
         </div>
      </div>
      <div className='relative flex flex-col w-1/3'>
       <FaFileAlt className='text-2xl'/>
        <h2 className=' text-2xl relative '>Signup process</h2>
         <div className='my-5'>
            <li>Visit the nearest Partner Seva Kendra in your city </li>
            <li>Submit documents and photo</li>
            <li>Provide information for a background check</li>
         </div>
      </div>
    </div>
  )
}

export default Todeliver
