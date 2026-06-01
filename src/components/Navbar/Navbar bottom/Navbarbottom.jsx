import React from 'react'
import Bottombutton from './Bottombutton'
import Bottomicons from './Bottomicons'
import Bottominfo from './Bottominfo'

const Navbarbottom = () => {
  return (
    <div className='h-14 w-full flex items-center justify-between border-b border-gray-200 px-20'>
        <Bottombutton/>
        
        <Bottominfo/>
    </div>
  )
}

export default Navbarbottom