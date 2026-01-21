import React from 'react'
import Rightsection from './rightSection/page'
import Uppersection from './leftSection/upperSection/page';
import Bottomsection from './leftSection/bottomSection/page';
import BottomRsection from './rightSection/bottomSection/page';

const Hero = () => {
  return (
    <>
   <div className="flex justify-center gap-[230px] ">
        <div className="mt-[12%]">
          <Uppersection />
        </div>

        <div className="mt-[6%]">
          <Rightsection />
        </div>
      </div>
      <div className='flex justify-center gap-[100px] mt-[10%] '>
        <Bottomsection/>
        <BottomRsection/>
      </div>
      </>

  )
}

export default Hero