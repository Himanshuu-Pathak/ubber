import React from 'react'
import CaptainDetails from '../component/core/Captain/CaptainDetails'
import RidePopUp from '../component/core/Captain/RidePopUp'

const CaptainHome = () => {
  return (
    <div>
         <div>
             <img/>
             {/* <Link></Link> */}
         </div>

         <div>
             <img/>
         </div>

         <div>
          {/* captain details */}
          <CaptainDetails/>
         </div>

         <div>
          {/* //Ride popup */}
          <RidePopUp/>
         </div>

         <div>
          {/* Confirm ride popup */}
         </div>
    </div>
  )
}

export default CaptainHome
