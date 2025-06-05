import React from 'react'
import SuggestionCard from '../component/core/homepage/suggestionCard';
import FriendRide from '../component/core/homepage/FriendRide';
import WayCard from '../component/core/homepage/wayCard';
import BuisnessSolution from '../component/core/homepage/BuisnessSolution';
import AskedQuestion from '../component/core/homepage/askedQuestion';
import Domore from '../component/core/homepage/Domore';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {

  const ride = ["Request a ride","Reserve a ride " , "See prices", "Explore ride Options", "Airport Rides"];
  return (
    <div className='w-full justify-between'>
      {/* ride wala div */}
      <div className='h-20 w-10/12 mx-auto flex flex-row justify-between my-5'>
        <div>
          <h1 className='text-2xl font-bold'>Ride</h1>
        </div>
        <div className='flex flex-row gap-5 text-slate-600 hover:cursor-pointer'>
          {ride.map((link,index) =>(
            <div  key = {index} className=' hover:text-slate-950'>{link}</div>
          ))}
        </div>
      </div>

        <div className="flex flex-col lg:flex-row gap-20 w-9/12 mx-auto mb-20 ">
          <div className='relative w-2/5'>
            <h1 className='text-5xl font-bold'>Request a ride for now or later</h1>
            <p className='my-5 text-2xl'>Add your trip details, hop in, and go.</p>
            <input placeholder='Enter Location ' className='bg-pink-50 relative w-full h-16 rounded-md my-1'/>
            <div></div>
            <input placeholder='Enter Destination' className='bg-pink-50 relative w-full h-16 rounded-md my-1'/>

            <div className='flex flex-row gap-14 my-14'>
              <button className='text-white bg-black py-3 px-8 rounded-md'>See Price</button>
              <button className='bg-pink-50 py-3 px-8 rounded-md'>Schedule for later</button>
            </div>
          </div>

          <div className=' object-cover '>
            <img className='relative  h-[600px] rounded-2xl object-cover' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1152,w_1152/v1683919251/assets/42/a29147-e043-42f9-8544-ecfffe0532e9/original/travel-ilustra.png'/></div>
        </div>

        <div className='relative mx-auto'> <SuggestionCard /></div>

       <FriendRide/>

       <WayCard/>

       <BuisnessSolution/>

       <AskedQuestion/>

       <Domore/>

       <div className='flex w-full'>
        <div className='relative w-1/2 mx-48' >
          <div className='flex my-10 '>
           <p className='font-bold text-4xl'>Signup to ride</p>
           <FaArrowRight className='mx-30 my-auto'/>
          </div>
           <div className='bg-black relative w-2/3 h-1'>.</div>
            <p className='my-30'>
            Certain requirements and features vary by country, region, and city.</p>
        </div>
       </div>
       
    </div>
  )
}

export default Home
