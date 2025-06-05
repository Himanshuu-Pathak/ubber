import React from 'react'

const FinishRide = () => {
  return (
    <div>
      <h5>
      <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3>Finish this Ride</h3>
      <div>

          <div>
              <img/>
              <h2>{props.ride?.user.fullname.firstname}</h2>
          </div>
          <h5 className='text-lg font-semibold'>2.2 KM</h5>

      </div>

      <div>

        <div>

             <div>
                <i className="ri-map-pin-user-fill"></i>
                <div>
                    <h3>562/11-A</h3>
                    <p>{props.ride?.pickup}</p>
                </div>
             </div>

             <div>
               <i className="text-lg ri-map-pin-2-fill"></i>
                <div>
                    <h3>562/11-A</h3>
                    <p>{props.ride?.destination}</p>
                </div>
             </div>

             <div>
                <i className="ri-currency-line"></i>
                <div>
                    <h3>₹{props.ride?.fare}</h3>
                    <p>Cash Cash</p>
                </div>
             </div>

        </div>

        <div>
            <button>Finish Ride</button>
        </div>

      </div>


    </div>
  )
}

export default FinishRide
