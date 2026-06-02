import React from 'react'

const HeroButton = ({Nextslide,Prevslide}) => {
  return (
    <div className='z-10 flex justify-between'>
        <button onClick={Prevslide}  className=' absolute left-2 top-1/2 w-12 h-12  text-2xl rounded-full  bg-gray-400'><i class="ri-arrow-left-s-line"></i></button>
        <button onClick={Nextslide} className=' absolute right-2 top-1/2 w-12 h-12 text-2xl  rounded-full bg-gray-400'><i class="ri-arrow-right-s-line"></i></button>
    </div>
  )
}

export default HeroButton