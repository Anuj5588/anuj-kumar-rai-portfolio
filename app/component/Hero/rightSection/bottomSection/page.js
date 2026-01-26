import React from 'react'
import Image from 'next/image'
import avatar from '@/public/image/avatar.svg'



const BottomRsection = () => {
  return (
    <div className='max-lg: mt-[10%] z-0'>
        <Image src={avatar} width={200} height={200}/>
    </div>
  )
}

export default BottomRsection