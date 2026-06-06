import React from 'react'
import Herocontent from './Herocontent'
import HeroButton from './HeroButton'

const Hero = ({toggle}) => {
 


  return (
    <div className={`h-110 w-full ${toggle==="dark"?"navbar-dark border-b border-gray-600":"bg-[#F4F9F1] text-black border-b border-gray-300"}  relative`}>
      <Herocontent toggle={toggle}/>
      
    </div>
  )
}

export default Hero