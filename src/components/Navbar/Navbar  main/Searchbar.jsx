import React from 'react'

const Searchbar = () => {
  return (
    <div className='flex lg:w-100 w-full  rounded-md border overflow-hidden   border-[#eee]  '> 
        <input className=" flex-1 px-3 py-2 outline-none" placeholder='search for products...' type="text" />
       <button className= 'rounded-sm cursor-pointer bg-green-600 flex justify-center items-center px-3 '> <i className="ri-search-line text-white"></i></button>
    </div>
  )
}

export default Searchbar