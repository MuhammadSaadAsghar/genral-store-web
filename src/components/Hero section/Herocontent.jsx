import {React,useState }from 'react'
import Heroleft from './Heroleft'
import Heroright from './Heroright'
import HeroButton from './HeroButton'
import heroData from "./HeroData";


const Herocontent = ({toggle}) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const currenthero=heroData[currentIndex]

    const Nextslide =()=>{
       setCurrentIndex((prev) => 
          (prev+1)%heroData.length
       )
    }
    const Prevslide =()=>{
       setCurrentIndex((prev) => 
          (prev-1+heroData.length )%heroData.length
       )
    }



  return (
    <div className=' flex h-full w-full  relative  '>
      
       <Heroleft toggle={toggle} data={currenthero}/>
       <Heroright data={currenthero}/>
       <HeroButton Nextslide={Nextslide} Prevslide={Prevslide} />
    </div>
  )
}

export default Herocontent