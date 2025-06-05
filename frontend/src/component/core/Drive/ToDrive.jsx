import React from 'react'
import { FaStar } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';

const ToDrive = () => {
  return (
    <div className='flex justify-between  gap-4'>
      <div className='flex flex-col w-1/3  '>
      <FaStar className='text-2xl'/>
        <h2 className=' text-2xl '>Requirements</h2>
        <ul className='my-3'>
            <li>Be at least 18 years old</li>
            <li>Clear a background screening</li>
        </ul>
      </div>
      <div className='flex flex-col w-1/3'>
      <FaFileAlt className='text-2xl'/>
        <h2 className=' text-2xl '>Documents</h2>
          <ul className='my-3'>
            <li>Valid driver's license (private or commercial), if you plan to drive</li>
            <li>Proof of residency in your city, state or province</li>
            <li>Car documents such as commercial insurance, vehicle registration certificate, permit</li>
           </ul>
      </div>
      <div className='flex flex-col w-1/3  '>
      <FaFileAlt className='text-2xl'/>
        <h2 className=' text-2xl relative '>Signup Process</h2>
        <ul className='my-3'>
            <li>Visit the nearest Partner Seva Kendra in your city</li>
            <li>Submit documents and photo</li>
            <li>Provide information for a background check</li>
        </ul>
      </div>
    </div>
  )
}

export default ToDrive
