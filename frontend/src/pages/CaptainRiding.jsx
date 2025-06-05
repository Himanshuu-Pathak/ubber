import React from 'react'
import { Link } from 'react-router-dom'

const CaptainRiding = () => {
  return (
    <div>
        <div>
            <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <Link>
                <i className="text-lg font-medium ri-logout-box-r-line"></i>
            </Link>
        </div>

        <div>
             <h5>
                <i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i>
             </h5>
             <h4>{'4 KM away'}</h4>
             <button>Complete Ride</button>
        </div>

        <div>
            {/* Finish Ride Component */}
        </div>

        <div>
            {/* Livetracking */}
        </div>
    </div>
  )
}

export default CaptainRiding
