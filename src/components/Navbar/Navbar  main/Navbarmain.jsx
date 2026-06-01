import React from 'react'
import Navbarcontent from './Navbarcontent'
import Searchbar from './Searchbar'
import Navbaraction from './Navbaraction'

const Navbarmain = () => {
  return (
    <div className="h-20 w-full px-20 text-sm border-b  border-gray-200 flex justify-between items-center gap-4">
  <Navbarcontent/>
  <Searchbar/>
  <Navbaraction/>
    </div>
  )
}

export default Navbarmain