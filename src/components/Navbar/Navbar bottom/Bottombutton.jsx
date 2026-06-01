import React from 'react'
import Bottomicons from './Bottomicons'


const Bottombutton = () => {
  return (
    <div className='flex items-center h-full gap-14 '>
        <button className='bg-lime-700 px-5 h-full text-[16px] font-semibold rounded-md text-white'>&#9776;  ALL CATEGORIES</button>
        <Bottomicons/>
    </div>
  )
}

export default Bottombutton