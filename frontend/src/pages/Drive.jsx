import React from 'react'
import Drivefront from '../component/core/Drive/Drivefront';
import WhyDrive from '../component/core/Drive/WhyDrive';
import Need from '../component/core/Drive/Need';
import Safety from '../component/core/Drive/Safety';
import AskedQuestion from '../component/core/homepage/askedQuestion';

const Drive = () => {
    const nav = ["Overview"," Requirements"," Delivery driver","Driving basics"," Earnings","Deactivations"," Safety","Uber Pro"," Contact us"];
  return (
    <div className='flex flex-col w-full'>
       <div className='flex  w-10/12 mx-auto justify-between my-5'>
            <div className='text-2xl font-bold'>
               Drive
            </div>
            <div className='flex gap-4'>
              {nav.map((link,index) =>(
                <div key={index} className='text-slate-600 hover:text-black'>{link}</div>
               ))}
            </div>
       </div>

        <Drivefront/>

        <WhyDrive/>

        <Need/>
        <Safety className='my-20'/>

        <AskedQuestion/>
    </div>
  )
}

export default Drive
