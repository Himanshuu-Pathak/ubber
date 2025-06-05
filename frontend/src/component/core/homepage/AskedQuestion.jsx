import React from 'react'
import { FaArrowDown } from 'react-icons/fa';


const AskedQuestion = () => {
  return (
    <div className='flex flex-col w-9/12 justify-between mx-auto'>
      <h1 className='font-bold text-4xl my-10'>Frequently asked questions</h1>
      <ul>
        <div className='my-5 flex justify-between'>
            <p>Can I have a lost item delivered to me?</p>
            <FaArrowDown/>
        </div>
        <div className='my-5 flex justify-between'>
            <p>Can I rent a car using Uber?</p>
            <FaArrowDown/>
        </div>
        <div className='my-5 flex justify-between'>
            <p>Can I request a ride that picks up friends in different locations?</p>
            <FaArrowDown/>
        </div>
        <div className='my-5 flex justify-between'>
            <p>Can I request a taxi on Uber?</p>
            <FaArrowDown/>
        </div>
        <div className='my-5 flex justify-between'>
            <p>Is there an Uber ride option for 5 people?</p>
            <FaArrowDown/>
        </div>
      </ul>
    </div>
  )
}

export default AskedQuestion
