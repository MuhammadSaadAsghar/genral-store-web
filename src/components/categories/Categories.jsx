import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <div className='w-full h-100 px-16 py-3'>
        <div className='text-3xl font-bold flex flex-col items-center justify-center gap-2'>
        <h1 >SHOP BY CATEGORY</h1>
        <div className='h-1 w-20  bg-green-600 '></div>
        </div>
        <div className='py-5 flex gap-3 flex-wrap '>
       <CategoryCard/>
       <CategoryCard/>
       <CategoryCard/>
       <CategoryCard/>
       <CategoryCard/>
       <CategoryCard/>
       <CategoryCard/>
       <CategoryCard/>
       </div>
    </div>
  )
}

export default Categories