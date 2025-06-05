import React from 'react'
import { FaCar  } from 'react-icons/fa'
import { GiSpoon } from 'react-icons/gi';
import { GiGlassCelebration } from 'react-icons/gi'
import { FaBicycle } from 'react-icons/fa';
import { FaSuitcase } from 'react-icons/fa'
import { FaTruck } from 'react-icons/fa';

const Help = () => {
  return (
    <div className='w-full flex flex-col'>
       <div className='relative my-5 text-2xl mx-30 w-10/12'>Help</div>

       <div className="bg-[url('https://th.bing.com/th?id=OIP.1OYxH8VmxFIMRdnbkpEmWQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2')] bg-cover bg-center min-h-screen">
       
            <div className='flex flex-col relative w-10/12 mx-auto'>
                <h1 className='text-5xl mx-auto font-bold w-1/2 my-10'>Welcome to Uber Support</h1>
                <p className='mx-auto my-10 '>We’re here to help. Looking for customer service contact information? Explore support <br/> resources for the relevant products below to find the best way to reach out about your <br/> issue.</p>
                <div className='flex gap-8 mx-auto justify-between'>
                    <div className='flex flex-col relative bg-white w-1/6 py-10 gap-5'>
                        <FaCar className='mx-auto text-4xl'/>
                        <p className='mx-auto text-2xl'>Riders</p>
                    </div>
                    <div className='flex flex-col relative bg-white w-1/6 py-10 gap-5'>
                        <FaCar className='mx-auto text-4xl'/>
                        <p className='mx-auto text-2xl'>Driving and delivering</p>
                    </div>
                    <div className='flex flex-col relative bg-white w-1/6 py-10 gap-5'>
                        <GiSpoon className='mx-auto text-4xl'/>
                        <p className='mx-auto text-2xl'>Uber eats</p>
                    </div>
                    <div className='flex flex-col relative bg-white w-1/6 py-10 gap-5'>
                        <GiGlassCelebration className='mx-auto text-4xl'/>
                        <p className='mx-auto text-2xl'>Merchants & Restaurants</p>
                    </div>
                    <div className='flex flex-col relative bg-white w-1/6 py-5 gap-5'>
                        <FaBicycle className='mx-auto text-4xl'/>
                        <p className='relative mx-auto text-2xl '>Bikes & Scooters</p>
                    </div>
                    <div className='flex flex-col relative bg-white w-1/6 py-10 gap-5'>
                        <FaSuitcase className='mx-auto text-4xl'/>
                        <p className='mx-auto text-2xl '>Uber for Buisness</p>
                    </div>
                    <div className='flex flex-col relative bg-white w-1/6 py-10 gap-5'>
                        <FaTruck className='mx-auto text-4xl'/>
                        <p className='mx-auto text-2xl'>Freight</p>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Help
