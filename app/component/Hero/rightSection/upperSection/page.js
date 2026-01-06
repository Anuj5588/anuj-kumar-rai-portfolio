import React from 'react'
import Image from 'next/image'

import home  from '@/public/image/home.svg';



const Uppersection = () => {
  return (
    <div>
        <Image src={home} width={500} height={200} />
    </div>
  )
}

export default Uppersection