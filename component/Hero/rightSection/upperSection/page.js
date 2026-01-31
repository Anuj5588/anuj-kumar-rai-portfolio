import React from 'react'
import Image from 'next/image'

import home  from '@/public/image/home.svg';



const Uppersection = () => {
  return (
    <div >
      <div className='max-md:hidden'><Image src={home} width={500} height={200} /></div>
        
        <div className='md:hidden max-sm: '><Image src={home} width={300} height={200} /></div>
         
    </div>
  )
}

export default Uppersection