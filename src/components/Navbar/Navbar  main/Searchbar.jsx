import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/Lightdarkmode'
const Searchbar = () => {
  const {toggle}=useContext(ThemeContext)
  return (
    <div className={`${toggle==="dark"?"text-white placeholder:text-gray-200 border border-gray-600":"text-black placeholder:text-gray-500"} flex   rounded-md border overflow-hidden   border-[#eee]  `}> 
        <input className={`min-w-64 px-3 py-2 outline-none `} placeholder='search for products...' type="text"  />
       <button className= 'rounded-sm cursor-pointer bg-green-600 flex justify-center items-center px-3 '> <i className="ri-search-line text-white"></i></button>
    </div>
  )
}

export default Searchbar