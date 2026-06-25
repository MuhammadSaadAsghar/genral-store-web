import React, { useContext } from 'react'
import Bottombutton from './Bottombutton'
import Bottomicons from './Bottomicons'
import Bottominfo from './Bottominfo'
import { ThemeContext } from '../../../context/Lightdarkmode'

const Navbarbottom = () => {
  const {toggle}=useContext(ThemeContext)
  return (
    <div className={`${toggle==="dark"?"navbar-dark":"bg-white text-black"} h-14 w-full flex items-center justify-between border-b  border-gray-600 px-20`}>
        <Bottombutton toggle={toggle}/>
        
        <Bottominfo toggle={toggle}/>
    </div>
  )
}

export default Navbarbottom