import React from 'react'

const GlobalPlatform = () => {
  return (
    <div className='w-full bg-black text-white'>
      <div className='relative w-10/12 mx-auto gap-20'>
        <div className='py-20'>
            <h1 className='text-4xl '>A global platform built on the world’s largest <br/> mobility network</h1>
        </div>
        <div className='flex gap-10'>

            <div className='relative w-1/2 gap-16 flex flex-col'>
                <div className='flex flex-col gap-5'>
                    <img className='w-10 h-10' src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_1152,w_1152/v1679420518/assets/f9/be74fb-fb61-4e4f-8757-91131e000869/original/badge-money-64x64.svg'/>
                    <h2 className='text-2xl font-bold'>Achieve up to 10% cost savings through strengthened compliance.</h2>
                    <p>Customers have praised the reduction in travel and meal expenses.¹ It is possible to manage expenditures and usage, and operate under the established usage rules. For corporate use, there are no fees or monthly fixed costs.</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <img className='w-10 h-10' src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_1152,w_1152/v1679421147/assets/d3/44b065-e97f-433d-95f7-6923c8bb3626/original/badge-star-64x64.svg'/>
                    <h2>Provide benefits to employees as well.</h2>
                    <p>Offer simplified expense reimbursement and support from a dedicated corporate customer team to both administrators and employees. In addition to easy expense processing and support, in select cities, employees can enjoy a more comfortable and premium ride experience with options like Uber Premium and Business Comfort.</p>
                </div>
            </div>

            <div className='w-1/2 gap-24 flex flex-col'>
                <div className='flex flex-col gap-5'>
                    <img className='w-10 h-10' src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_1152,w_1152/v1679420624/assets/39/987ba2-fc85-4c9c-b901-75c3e9fc1852/original/badge-plant-64x64.svg'/>
                    <h2>Meet sustainability goals with actionable insights</h2>
                    <p>Track CO₂ emissions for every ride on a dashboard exclusive to Uber for Business. These insights can help you take action and leverage sustainable travel options like Uber Green.²</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <img className='w-10 h-10' src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_1152,w_1152/v1679421252/assets/ea/736be5-8d4a-4f13-a108-614304d68153/original/badge-safety_report-64x64.svg'/>
                    <h2>Prioritize safety and security for your business</h2>
                    <p>We offer additional crash-alert notifications for business users. Our latest US Safety Report shows that 99.9% of Uber trips are completed without any reported safety incidents.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default GlobalPlatform
