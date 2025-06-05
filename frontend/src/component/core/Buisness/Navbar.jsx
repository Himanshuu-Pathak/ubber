import React from 'react'

const Navbar = () => {
    const mid = ["overview","solutions", "GiPiercingSword", "Customer Support", "Resources"]
    const last = ["EN", "Contactus", "UserLogin", "GetStarted"]
  return (
    
    <div className='w-full bg-black'>
            <div className='flex w-10/12 mx-auto h-10 bg-black justify-between'>
              <div className='flex gap-5 text-white bg-black'>
                 <div>
                    <h2>Uber for Buisness</h2>
                 </div>

                  <div className='flex gap-5 '>
                      {mid.map((link,index) =>(
                       <div key={index}>{link}</div>
                       ))}
                   </div>
               </div>

               <div className='text-white flex gap-5'>
                 {last.map((link,index) =>(
                    <div key={index}>{link}</div>
                 ))}
               </div>
             </div>
    </div>
  )
}

export default Navbar
