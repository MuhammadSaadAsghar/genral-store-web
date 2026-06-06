
import { useState } from 'react'
import './App.css'
import Hero from './components/Hero section/Hero'
import Navbarmain from './components/Navbar/Navbar  main/Navbarmain'
import Navbarbottom from './components/Navbar/Navbar bottom/Navbarbottom'
import Navbartop from './components/Navbar/Navbartop/Navbartop'
import Storefeatures from './components/store features/Storefeatures'


function App() {

const [toggle, setToggle] = useState("light")

const togglemode=()=>{
   if (toggle==="light") {
    setToggle("dark")
   }
   else{
    setToggle("light")
   }
  }

  return (
    <>
    <Navbartop toggle={toggle}/>
    <Navbarmain togglemode={togglemode} toggle={toggle}/>
    <Navbarbottom toggle={toggle}/>
    <Hero toggle={toggle}/>
    <Storefeatures toggle={toggle}/>
    </>
  )
}

export default App
