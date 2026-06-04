import React from "react";

const Navbaraction = ({toggle}) => {
  return (
    <div className="flex gap-6 items-center ">
      <p className="text-lg">
        {" "}
        <i className={`ri-user-3-line text-2xl ${toggle==="dark"?"text-white":"text-green-950"}`}></i>My account
      </p>


      <div className={`flex gap-2 `}>
          <div className="flex relative items-center">
          <i className={`ri-shopping-cart-2-line text-3xl ${toggle==="dark"?"text-white":"text-green-950"}`}></i>
          <span className="rounded-full h-5 w-5 bg-green-800 text-white text-sm flex justify-center items-center  text-center absolute left-4 top-1">0</span>
          </div>
       <div className="flex flex-col leading-tight">
        <p className="text-xm  ">
          My Cart
        </p>
        <span className=" font-semibold  ">Rs:0.00</span>
       </div>
      </div>
      </div>
  
  );
};

export default Navbaraction;
