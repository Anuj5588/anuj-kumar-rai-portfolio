import React from 'react'
import Image from 'next/image'

import home  from '@/public/image/home.svg';


const Rightsection = () => {
  return (
    <div>
        <Image src={home} width={500} height={200} />
    </div>
  )
}

export default Rightsection