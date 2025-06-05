import React from 'react'
import Navbar from '../component/core/Buisness/Navbar'
import Front from '../component/core/Buisness/Front'
import GlobalPlatform from '../component/core/Buisness/GlobalPlatform'
import Leverage from '../component/core/Buisness/Leverage'
import CollaboratingCompanies from '../component/core/Buisness/CollaboratingCompanies'
import GetStarted from '../component/core/Buisness/GetStarted'
import Interested from '../component/core/Buisness/Interested'

const Buisness = () => {
    
  return (
    <div>
      <Navbar/>
      <Front />
      <GlobalPlatform/>
      <Leverage/>
      <CollaboratingCompanies/>
      <GetStarted/>
      <Interested/>
    </div>
  )
}

export default Buisness
