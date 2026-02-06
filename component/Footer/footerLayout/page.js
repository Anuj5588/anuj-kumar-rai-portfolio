import React from 'react'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
<div className='bg-[#0A0416] px-[200px]  flex justify-between max-md:flex-col max-md:py-8 h-fit gap-8 items-center max-md:overflow-x-hidden max-md:px-4  md:py-4'>

    <div className='text-white'>Designed and Developed by Anuj Kumar Rai</div>
  
    <div className='max-md:flex-wrap text-white'>Copyright © 2026 AK</div>
    <div className='flex max-md:flex-wrap text-white gap-6 max-md:py-2'>
        <div><AiFillGithub/></div>
         <div><AiOutlineTwitter/></div>
          <div><AiFillInstagram/></div>
           <div><FaLinkedinIn/></div>

    </div>
</div>

    </>
  )
}

export default Footer