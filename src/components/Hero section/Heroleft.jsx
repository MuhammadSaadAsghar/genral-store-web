import React from 'react'

const Heroleft = ({data,toggle}) => {
  return (
    <div className='h-full flex flex-col  justify-center text-left pl-16 w-[40%] ' >
        <div className='flex flex-col mb-3 leading-tight'>
      <h1 className='text-6xl font-extrabold'>
  <span className='text-[#259625]'>{data.title}</span>
 
</h1>
      <h2 className={`font-extrabold ${toggle==="dark"?"text-white":"text-black"}  text-5xl`}>{data.highlight}</h2>
      </div>
      <div className='mb-2'>
        <h3 className='text-xl font-semibold capitalize'>{data.subtitle}</h3>
      </div>
      <div className='mb-4 w-2/3'>
        <p className={`${toggle==="dark"?"text-gray-200":"text-gray-600"}`}>{data.description}</p>
      </div>
      <div className=''>
        <button className='uppercase cursor-pointer bg-[#1e971e] rounded-sm py-2 px-5 text-white text-sm'>shop now <i className="ri-arrow-right-s-line text-lg"></i> </button>
      </div>
    </div>
  )
}

export default Heroleft