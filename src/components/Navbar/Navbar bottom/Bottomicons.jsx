import { React } from "react";
import { NavLink } from "react-router-dom";

const Bottomicons = () => {
 

  const link = [
    { name: "HOME",path:"/" },
    { name: "ABOUT US" ,path:"/about"},
    { name: "SHOP",path:"/shop" },
    { name: "OFFERS",path:"/Offers" },
    { name: "BLOG",path:"/blog" },
    { name: "CONTACT US",path:"/Contact" },
  ];
  return (
    <div className=" flex ">
      <ul className="flex gap-8 text-sm font-semibold items-center ">
        {link.map((item) => {
          return (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={ ({isActive})=>{ return isActive ? "text-lime-700 border-b border-lime-700 pb-1" : ""}}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Bottomicons;
