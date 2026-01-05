import React from 'react'
import Rightsection from './rightSection/page'
import Uppersection from './leftSection/upperSection/page';
import Bottomsection from './leftSection/bottomSection/page';

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
      <div>
        <Bottomsection/>
      </div>
      </>

  )
}

export default Hero