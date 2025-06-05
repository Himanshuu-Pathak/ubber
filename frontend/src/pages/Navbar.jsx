import React from 'react'
import { Navbarlinks1 } from '../component/common/Navbar'
import { Navbarlinks2 } from '../component/common/Navbar'
import { Link } from 'react-router-dom'


const Navbar = () => {
//  const Navbarlinks1 = ["Ride", "drive","Buisness", "Uber eats", "About"]
 // const Navbarlinks2 = ['EN', "Help", "Login", "Signup"]
  return (
    <div className='flex mx-auto justify-between w-full  bg-black h-15  text-white'>
      <div className=' flex mx-auto justify-between w-11/12'>
    <div className='flex mx-5 w-11/12'> 
      <div className='text-3xl gap-8 my-auto px-4'>Uber</div>

      <div className='flex gap-8  hover:cursor-pointer my-auto '>      
        {Navbarlinks1.map((link, index) =>(
          <div className=" hover:bg-slate-600 rounded-full py-1 px-1" key={index}>
           <Link to={link.path}> {link.title}</Link>
          </div>
        ))}
      </div>

    </div>

      <div className='flex gap-8 my-auto hover:cursor-pointer '>
        {Navbarlinks2.map((link, index) =>(
          <div className=" hover:bg-slate-600 rounded-full py-1 px-0.5" key={index}>
            <Link to={link.path}> {link.title}</Link>
          </div>
        ))}
      </div>

      </div>
    </div>
  )
}

export default Navbar
