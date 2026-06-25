import React, { useContext } from "react";
import logo from "../../../assets/logo.png"
import { ThemeContext } from "../../../context/Lightdarkmode";

const Navbarcontent = () => {

  const{toggle,togglemode}=useContext(ThemeContext)
  return (
    <>
    <div className="flex items-center ml-3 gap-4  "> 
        
         <img src={logo} className="h-13 w-13 scale-150 " alt="logo" />
         <h1 className={`${toggle==="dark"?"text-green-600":" text-green-700  "}   leading-5 uppercase text-3xl font-bold`}>Ali Asghar <br /><span className={` text-center block text-xl  ${toggle==="dark"?"text-white":" text-black"}  font-medium`}>Karyan store</span></h1>
     
      </div>
     </>
  );
};

export default Navbarcontent;
