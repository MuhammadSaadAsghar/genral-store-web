import {React,useState} from 'react'


const Bottomicons = () => {
    const [active, setActive] = useState("HOME")

    const link =["HOME","ABOUT US","SHOP","OFFERS","BLOG","CONTACT US"]
  return (
    <div className=' flex '>
      <ul className='flex gap-8 text-sm font-semibold items-center '>
       {link.map((item)=> {
        return <li key={item} ><a href="#" onClick={()=>setActive(item)}

        className={`cursor-pointer ${active === item ? "text-lime-700 border-b border-lime-700 pb-1":""}`}

        >{item}</a></li>
       })}
      </ul>

   </div>
  )
}

export default Bottomicons