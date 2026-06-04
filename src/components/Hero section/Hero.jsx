import React from 'react'
import Herocontent from './Herocontent'
import HeroButton from './HeroButton'

const Hero = ({toggle}) => {
 


  return (
    <div className={`h-110 w-full ${toggle==="dark"?"navbar-dark":"bg-white text-black"} bg-[#F4F9F1] relative`}>
      <Herocontent toggle={toggle}/>
      
    </div>
  )
}

export default Hero