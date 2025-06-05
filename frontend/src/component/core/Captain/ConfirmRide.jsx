import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
       <h5><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
       <h3>Confirm Your Ride</h3>

       <div>
          <img className='h-20' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
          <div>
              <div>
                 <i className="ri-map-pin-user-fill"></i>
                <div>
                    <h3>562/11-A</h3>
                    <p>{props.pickup}</p>
                </div>
              </div>

              <div>
                  <i className="text-lg ri-map-pin-2-fill"></i>
                  <div>
                      <h3>562/11-A</h3>
                      <p>{props.destination}</p>
                  </div>
              </div>

              <div>
                   <i className="ri-currency-line"></i>
                   <div>
                      <h3>₹{props.fare[ props.vehicleType ]}</h3>
                      <p>Cash Cash</p>
                   </div>
              </div>
          </div>

          <button onClick={() =>{
            props.setVehicleFound(true)
            props.setConfirmRidePanel(false)
            props.createRide();
          }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
       </div>
    </div>
  )
}

export default ConfirmRide
