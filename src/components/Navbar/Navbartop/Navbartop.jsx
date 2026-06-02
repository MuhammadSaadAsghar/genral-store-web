import React from 'react'

const Navbartop = () => {
  return (
    <div className='py-2 capitalize  text-sm w-full bg-[#1F7A3D]  flex justify-between px-20 items-center text-white '>
        <div className='flex gap-2'>
           <i className="ri-store-2-line"></i>
      <p>ali asghar karyana store</p>
      </div>
      <div className='flex gap-8'>

        <p className='flex gap-1'><i className="ri-truck-line"></i>Fast delivery</p>
        <p className='flex gap-1'><i className="ri-award-fill"></i>best quality</p>
        <p className='flex gap-1'><i className="ri-customer-service-line"></i>customer support</p>
      </div>
    </div>
  )
}

export default Navbartop