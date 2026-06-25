import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

const Lightdarkmode = ({ children }) => {

  const [toggle, setToggle] = useState("light")

  const togglemode = () => {
    setToggle(toggle === "light"?"dark":"light") 
   
  }




  return (
    <ThemeContext.Provider value={{ toggle, togglemode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default Lightdarkmode