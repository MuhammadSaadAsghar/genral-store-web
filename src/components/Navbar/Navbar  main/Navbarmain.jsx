import React from 'react'
import Navbarcontent from './Navbarcontent'
import Searchbar from './Searchbar'
import Navbaraction from './Navbaraction'
import Darkandlight from './Darkandlight'

const Navbarmain = ({toggle,togglemode}) => {
  return (
    <div className={`${toggle==="dark"?"navbar-dark border-b border-gray-400":"bg-white text-black border-b border-gray-200"}`}>
    <div className="h-20 w-full px-20 text-sm   flex justify-between items-center gap-4">
  <Navbarcontent toggle={toggle}/>
  <Searchbar toggle={toggle}/>
  <Darkandlight togglemode={togglemode} toggle={toggle}/>
  <Navbaraction toggle={toggle}/>
    </div>
    </div>
  )
}

export default Navbarmain