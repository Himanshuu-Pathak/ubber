import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
         <h5 className='p-1 text-center w-[93%] absolute top-0'>
             <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
         </h5>
         <h3>Choose a Vehicle</h3>

         <div>
              <img className='h-10' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
              <div>
                   <h4>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
                   <h5>2 mins away </h5>
                   <p>Affordable, compact rides</p>
              </div>
              <h2 className='text-lg font-semibold'>₹{props.fare.car}</h2>
         </div>

         <div>
            <img className='h-10' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt=""/>
            <div>
                <h4>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
                <h5>2 min away</h5>
                <p>Affortable ,Compact Ride</p>
            </div>
            <h2>₹{props.fare.car}</h2>
         </div>

         <div>
            <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
            <div>
                <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
                <h5 className='font-medium text-sm'>3 min away</h5>
                <p className='font-normal text-xs text-gray-600'>Affordable motorcycle ride</p>
               
            </div>
            <h2>Rs{props.fare.moto}</h2>
         </div>

         <div>
            <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
            <div>
                <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
                <h5 className='font-medium text-sm'>3 min away</h5>
                <p className='font-normal text-xs text-gray-600'>Affodable Auto ride</p>
            </div>
            <h2 className='text-lg font-semibold'>Rs{props.fare.auto}</h2>
         </div>
      
    </div>
  )
}

export default VehiclePanel
