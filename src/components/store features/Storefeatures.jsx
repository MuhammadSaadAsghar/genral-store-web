import React, { useContext } from "react";
import { ThemeContext } from "../../context/Lightdarkmode";

const Storefeatures = () => {

  const {toggle}=useContext(ThemeContext)
  return (
    <div className={`${toggle=="dark" ? "navbar-dark border-b border-gray-600":" "} w-full min-h-25  lg:flex-row   border-b border-gray-300 md:px-16 flex-col flex`}>
      <div className="md:w-1/4 relative flex-1 md:py-0 py-4   flex items-center justify-center  gap-2" >
        <div>
          <i className="ri-award-fill text-green-700 text-6xl  "></i>
        </div>
        <div className="">
          <h1 className="font-extrabold  capitalize">
            best quality products
          </h1>
          <p className={`${toggle==="dark" ? "text-gray-300" : "text-gray-600"}`}>Top quality products <br /> guaranteed</p>
        </div>
      <div className="absolute right-0 top-4 bottom-4 w-px bg-gray-300"></div>
      </div>
      <div className="md:w-1/4 relative flex-1 flex items-center md:py-0 py-4 justify-center gap-2" >
        <div>
          <i className="ri-price-tag-3-line text-green-700 text-6xl"></i>
        </div>
        <div className="">
          <h1 className="font-extrabold  capitalize">
            Affordable prices
          </h1>
          <p className={`${toggle==="dark" ? "text-gray-300" : "text-gray-600"}`}>best prices in the <br /> town</p>
        </div>
        <div className="absolute right-0 top-4 bottom-4 w-px bg-gray-300"></div>
      </div>
      <div className="md:w-1/4 flex-1 relative  flex items-center md:py-0 py-4 justify-center gap-2" >
        <div>
          <i className="ri-truck-line  text-green-700 text-6xl"></i>
        </div>
        <div className="">
          <h1 className="font-extrabold  capitalize">
            fast delivery
          </h1>
          <p className={`${toggle==="dark" ? "text-gray-300" : "text-gray-600"}`}>quick and on-time  <br /> delivery</p>
        </div>
       <div className="absolute right-0 top-4 bottom-4 w-px bg-gray-300"></div>
      </div>
      <div className="md:w-1/4 h-full  flex items-center gap-2 md:py-0 py-4 justify-center" >
        <div>
          <i className="ri-customer-service-line text-green-700 text-6xl"></i>
        </div>
        <div className="">
          <h1 className="font-extrabold  capitalize">
            24/7 supports
          </h1>
          <p className={`${toggle==="dark" ? "text-gray-300" : "text-gray-600"}`}>we are here to  <br /> help you</p>
        </div>
        
      </div>
    </div>
  );
};

export default Storefeatures;
