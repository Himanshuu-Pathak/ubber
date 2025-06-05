import React from 'react'
import Image from './Image.png'

const CollaboratingCompanies = () => {
  return (
    <div className='bg-pink-50 w-full flex flex-col my-20 '>
      <div className='flex flex-col relative w-10/12 mx-auto '>
        <div className='relative w-9/12 mx-auto translate-x-20'>
            <h1 className='font-bold text-4xl mx-auto  my-20 '>Join over 200,000 companies working with us, including more than half of the Fortune 500</h1>
        </div>
        <div className='flex gap-10 justify-between relative w-10/12 mx-auto'>
            <img className='w-1/3' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_432,w_768/v1679423868/assets/10/662a2b-e822-41f3-82ea-bfe096f10038/original/logo-zoom-360x202_2x.png'/>
            <img className='w-1/3' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_432,w_768/v1679423930/assets/46/7467fc-e44a-4e62-a333-decae8656e9f/original/logo-cocacola-360x202_2x.png'/>
            <img className='w-1/3' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_432,w_768/v1679423970/assets/d9/76db1c-0f43-425e-bda8-a39d19abec32/original/logo-samsung-360x202_2x.png'/>
        </div>
        <div className='relative w-10/12 flex flex-row mx-auto gap-20 my-20 justify-between'>
            <div className='w-1/3 text-2xl '>
                <p>“Pay and basic benefits aren’t the endgame. You need to be actively listening to what employees need and want. One of our first added benefits was providing Uber credit for rides, so people could safely get a ride for work or for fun. We encourage employees to spend the credits however they want.”</p>
                <p>Ryan Carter, Founder and CEO, Parachute Media</p>
            </div>
            <div>
                <img src={Image}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CollaboratingCompanies
