

import './App.css'
import Hero from './components/Hero section/Hero'
import Navbarmain from './components/Navbar/Navbar  main/Navbarmain'
import Navbarbottom from './components/Navbar/Navbar bottom/Navbarbottom'
import Navbartop from './components/Navbar/Navbartop/Navbartop'
import Storefeatures from './components/store features/Storefeatures'
import Categories from './components/categories/Categories'
import {BrowserRouter,Router,Route, Routes  } from "react-router-dom";
import  Home  from './Pages/Home/Home'
import Lightdarkmode from './context/Lightdarkmode'
import HeroProvider from './context/Herodata1'




function App() {



  return (
    <>
<Lightdarkmode>
  <HeroProvider>
    <BrowserRouter>
    <Navbartop />
    <Navbarmain  />
    <Navbarbottom />
   
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
    </HeroProvider>
</Lightdarkmode>
   
  
    </>
  )
}

export default App
