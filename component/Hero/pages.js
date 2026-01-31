import React from 'react'
import Rightsection from './rightSection/page'
import Uppersection from './leftSection/upperSection/page';
import Bottomsection from './leftSection/bottomSection/page';
import BottomRsection from './rightSection/bottomSection/page';

const Hero = () => {
  return (
    <>
   <div className="flex justify-center gap-[230px] max-md:flex max-md:flex-col max-md:items-center max-md:gap-[100px] ">
        <div className="mt-[12%]">
          <Uppersection />
        </div>

        <div className="mt-[6%]">
          <Rightsection />
        </div>
      </div>
      <div className='flex justify-center gap-[100px] px-4  max-md:flex-col  max-md:items-center  '>
        <Bottomsection/>
        <BottomRsection/>
      </div>
      </>

  )
}

export default Hero