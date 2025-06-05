import React from 'react'

const Leverage = () => {
  return (
    <div className='w-10/12 mx-auto my-20 flex flex-col'>
      <div className='flex flex-col'>
        <h1 className='text-4xl'>How companies leverage Uber for Business</h1>
        <div className='flex flex-row  justify-between'>
            <div className='my-10 flex flex-col'>
                <img src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_254,w_450/v1679435963/assets/a6/c383fd-e0a2-4534-9651-40aa6f143f93/original/ilo-business_travel-360x204-expandable.svg'/>
                <h2 className='font-bold text-2xl  text-slate-800 my-10'>Buisness Travel</h2>
            </div>
            <div className='my-10 flex flex-col'>
                <img src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_254,w_450/v1679436006/assets/bd/b27aa4-3019-479f-9b41-c9bbc5187d33/original/ilo-courtesy_rides-360x204-expandable.svg'/>
                <h2 className='font-bold text-2xl  text-slate-800 my-10'>Courtesy Ride</h2>
            </div>
            <div className='my-10 flex flex-col'>
                <img src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_254,w_450/v1679436116/assets/d9/ca79d1-d191-442b-8a19-df7cc125a59c/original/ilo-meal_programs-360x204-expandable.svg'/>
                <h2 className='font-bold text-2xl text-slate-800 my-10'>Meal Program</h2>
            </div>
        </div>
      </div>

      <div className='flex flex-col relative  mx-auto'>
        <h1 className='text-4xl font-bold my-10'>Get started with no upfront costs</h1>
        <div className='flex   gap-20'>
            <div className='flex flex-col relative w-1/2 gap-5'>
                <img src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_254,w_450/v1679422653/assets/e1/ed6649-3011-4181-9dad-a241960c7c61/original/ilo-content_connected-01-360x202_2x.png'/>
                <img src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_254,w_450/v1679422708/assets/60/1f07db-0751-4b92-9399-ae4f0417219d/original/ilo-content_connected-02-360x202_2x.png'/>
                <img src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_254,w_450/v1679422783/assets/ed/5ab4b4-8d7b-41e7-92b2-1957bd1a79f4/original/ilo-content_connected-03-360x202_2x.png'/>
            </div>
            <div></div>
            <div className='flex flex-col gap-28'>
                <div>
                    <h2 className='text-2xl '>Customize your travel and meal programs</h2>
                    <p>Set your own policies, help ensure T&E compliance, and get full visibility into every ride and meal. You can easily integrate with the top expensing partners for seamless expensing without paying a service fee.</p>
                </div>
                <div>
                    <h2>Onboard people at your own pace</h2>
                    <p>Add individuals, specific teams, or your entire organization at once. After your employees are invited, they can add a business profile for work-related rides and meals to their existing Uber account that they know and trust for business rides and meals.</p>
                </div>
                <div>
                    <h2>Set up amenities for customers</h2>
                    <p>Send Uber credit in the form of gift cards and vouchers for rides, meals, and more in a snap. You can even request rides for others to make their travel experience practically effortless.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Leverage
