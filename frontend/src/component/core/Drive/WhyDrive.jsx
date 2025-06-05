import React from 'react'


const WhyDrive = () => {
  return (
    <div className='flex flex-col w-full h-screen'>
        <div className='flex flex-col relative mx-auto w-9/12 my-auto'>
             <h2 className='text-4xl font-bold'>Why Drive with us</h2>
             <img src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_540,w_2304/v1536163470/assets/3a/a87102-5c54-478c-8a98-0df3a951a202/original/whyDriveWithUs_desktop.svg'/>
             <div className='flex justify-between'>
                <div>
                    <h2>Set your own hours</h2>
                    <p>You decide when and how often you drive.</p>
                </div>
                <div>
                    <h2>Get paid fast</h2>
                    <p>Weekly payments in your bank account</p>
                </div>
                <div>
                    <h2>Get support at every turn</h2>
                    <p>If there’s anything that you need, you can reach us anytime.</p>
                </div>
             </div>
             <button>How driving work</button>
        </div>
    </div>
  )
}

export default WhyDrive
