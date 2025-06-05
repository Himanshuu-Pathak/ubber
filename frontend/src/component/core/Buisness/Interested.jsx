import React from 'react'

const Interested = () => {
  return (
     <div className='w-full'>
        <div className='w-10/12 mx-auto my-10'>
             <div>
                <h2 className='font-bold text-4xl my-14'>Interested in learning more?</h2>
             </div>
          <div className='flex justify-between gap-5'>
            <div className='w-1/3'>
                <img src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_768/v1679425285/assets/a5/05e92b-1d22-45a0-b9d6-4242bb140ed2/original/img-resource-1-360x360_2x.png'/>  
                <p>How to reduce the carbon footprint of business travel</p> 
                <button className='z-20 shadow my-5'>See how</button>
            </div>
            <div className='w-1/3'>
               <img src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_768/v1679425358/assets/c3/c578f7-9210-46e6-bdc2-cb38493225ba/original/img-resource-2-360x360_2x.png'/>
               <p>The perks and benefits your employees want now</p>
               <button className='z-20 shadow my-5'>Findout</button>
            </div>
            <div className='w-1/3'>
                <img src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_768/v1679425447/assets/56/fa60d9-521d-4a8e-84b1-889587b4d8ca/original/img-resource-3-360x360_2x.png'/>
                <p>The road to sustainability: executives discuss their efforts toward net zero</p>
                <button className='z-20 shadow my-5'>Keep reading</button>
            </div>
      </div>
      <div className='flex flex-col gap-5'>
        <p>Product and feature availability may vary by market and location. To find out more, get started here.</p>
        <p>¹Based on over 275 Uber for Business customers surveyed globally in February 2023. Customers agreed that they were able to reduce costs on ground transportation and/or meals through better compliance.</p>
        <p>²Uber Green is available only in certain cities. In addition, availability may be limited outside of downtown areas to start.</p>
        <p>³Based on a November 2021 survey commissioned by Uber, in which 323 Uber for Business customers responded to the question “How likely are you to recommend Uber for Business to a colleague or someone in your professional network?”</p>
      </div>
    </div>
     </div>
  )
}

export default Interested
