import React from 'react'

const WayCard = () => {
  return (
    <div className='w-full h-screen'>
    <div className='flex flex-col w-10/12 justify-between mx-auto relative h-2/3'>
      <h1 className='font-bold text-4xl'>Use the Uber app to help you travel your way</h1>
      <div className='flex flex-row relative mx-auto '>
        <div className='mx-5 my-10'>
            <img className='h-9/12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_768/v1692743834/assets/54/f60161-cf6b-4401-a309-8bb196c0014c/original/U_CoastalCalifornia_White_Final-%281%29.jpg'/>
            <div>
                <h2 className='font-bold my-5'>Ride Options</h2>
                <p>There’s more than one way to move with Uber, no matter where you are or where you’re headed next.</p>
            </div>
            <button className='text-white bg-black rounded-md px-4 py-2 my-5'>Search Ride Options</button>
        </div>
        <div className='mx-5 my-10'>
            <img className='h-9/12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_768/v1692743890/assets/f9/ba27c4-665c-4cca-8161-9e3f87f49994/original/Airport-rides.png'/>
            <div>
                <h2 className='font-bold my-5'>700+ Airports</h2>
                <p>You can request a ride to and from most major airports. Schedule a ride to the airport for one less thing to worry about.</p>
               
            </div>
            <button className='text-white bg-black rounded-md px-4 py-2 my-5'>Search Airports</button>
            
        </div>
        <div className='mx-5 my-10 '>
            <img className='h-9/12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_768/v1689609697/assets/b8/c39de0-6e13-485b-ba45-66511170c62a/original/SS_Commuter.jpg'/>
            <div>
                <h2 className='font-bold my-5'>10,000+ cities</h2>
                <p>The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.</p>
                <button className='text-white bg-black rounded-md px-4 py-2 my-5'>Search cities</button>
            </div>
            <button></button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WayCard
