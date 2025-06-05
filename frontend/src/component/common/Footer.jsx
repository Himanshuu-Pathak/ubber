import React from 'react'
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube , FaInstagram} from "react-icons/fa";
import { FaFirefox } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import { FaCopyright } from 'react-icons/fa';


const Footer = () => {

    const company = ["Company", "Our offerings", " Newsroom"," Investors",  "Blog", "Careers"];
    const product = ["Products", "Ride", "Drive"," Deliver","Eat"," Uber for Business","Uber Freight"," Gift cards"];
    const global = ["Global citizenship","Safety","Diversity and Inclusion","Sustainability"]
    const travel = ["Travel","Reserve","Airports","Cities"]
    const icon = [<FaFacebook/>,<FaGoogle/>,<FaTwitter/>,<FaYoutube/>,<FaInstagram/>];
  return (
    <div className='bg-black text-white w-full h-full '>
    <div className=' flex flex-col relative w-9/12 mx-auto gap-5 h-11/12 my-auto justify-between '>
      <div className='my-20  '>
           <div className='text-4xl font-bold flex flex-col'>Uber</div>
          <div className='my-5'>Visit Help Center</div>
      </div>
      
      {/* six div */}
      <div className='flex  relative  w-10/12 justify-between'>
        <div className='flex flex-col '>
           {company.map((link,index) =>(
            <div className='my-2' key={index}>{link}</div>
           ))}
        </div>

        <div className='flex flex-col '>
           {product.map((link,index) =>(
            <div className='my-2' key={index}>{link}</div>
           ))}
        </div>

        <div className='flex flex-col '>
           {global.map((link,index) =>(
            <div className='my-2' key={index}>{link}</div>
           ))}
        </div>

        <div className='flex flex-col '>
           {travel.map((link,index) =>(
            <div className='my-2' key={index}>{link}</div>
           ))}
        </div>

      </div>
      <div className='flex w-11/12 justify-between my-5'>
        <div className='flex relative w-1/2 justify-between'>
          {
            icon.map((link,index) =>(
              <div key={index}>{link}</div>
            ))
          }
        </div>

        <div className='flex '>
          <div className='flex gap-1'>
            <FaFirefox/>
            <p>English</p>
          </div>
          <div className='flex gap-1'>
            <FaLocationArrow/>
            <p>Mirzapur</p>
          </div>
        </div>

      </div>


      {/* playstore wala button */}

      <div className='flex relative w-1/12 gap-4'>
        <img src='https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg'/>
        <img src='https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg'/>
      </div>

      {/* privacy part */}
      <div className='flex w-11/12 justify-between  my-20'>
        <div className='flex gap-1 text-sm'>
          <FaCopyright/>
          <p>2025 Uber Technologies inc</p>
        </div>
        <div className='flex gap-3'>
          <p>Privacy</p>
          <p>Accessibility</p>
          <p>Terms</p>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Footer
