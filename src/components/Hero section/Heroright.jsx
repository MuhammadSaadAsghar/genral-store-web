import React from 'react'
import items from "../../assets/store item.jpg"

const Heroright = ({data}) => {
  return (
    <div className='h-full w-[60%] '>
        <div className='w-full h-full object-cover border border-gray-300'>
        <img  src={data.image}  alt="items" className='w-full h-full object-cover' />
</div>
    </div>
  )
}

export default Heroright