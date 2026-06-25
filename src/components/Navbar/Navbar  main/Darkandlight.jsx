import React,{ useContext} from 'react'
import { ThemeContext } from "../../../context/Lightdarkmode";

const Darkandlight = () => {
  
  const {toggle,togglemode} = useContext(ThemeContext)
 
  return (
    <div className='bg-gray-400/50 rounded-full w-9 h-9  flex justify-center items-center '>
        <button onClick={togglemode} >
            {
                toggle==="light"?<i className="ri-sun-line text-2xl text-black opacity-100 cursor-pointer"></i>:<i className="ri-moon-line text-2xl text-white opacity-100 cursor-pointer"></i>
            
}
            </button>
    </div>
  )
}

export default Darkandlight