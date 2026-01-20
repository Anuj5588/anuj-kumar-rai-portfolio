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
<div className='bg-[rgb(19,23,27)] px-[200px] flex justify-between  items-center h-[50px] max-md:hidden'>

    <div className=''>Designed and Developed by Anuj Kumar Rai</div>
  
    <div className='pr-[200px]'>Copyright © 2026 AK</div>
    <div className='flex  gap-6 '>
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