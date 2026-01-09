import React from 'react'
import Image from 'next/image'
import { PT_Mono } from 'next/font/google';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Contactsection = () => {
  return (
    <>
    <div className='-translate-y-[130px] flex flex-col items-center'>
      <div className='text-white text-4xl font-monoPT'>
        Find Me On
      </div>
      <div className='text-white text-2xl'>Feel free to <span className='text-purple-700'>connect</span> with me.</div>
    </div>
      <div className="flex gap-6 -translate-y-[100px] justify-center">
      {/* GitHub */}
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center
                      hover:scale-110 transition duration-300 cursor-pointer">
        <AiFillGithub className="text-purple-700 text-2xl" />
      </div>

      {/* Twitter */}
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center
                      hover:scale-110 transition duration-300 cursor-pointer">
        <AiOutlineTwitter className="text-purple-700 text-2xl" />
      </div>

      {/* LinkedIn */}
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center
                      hover:scale-110 transition duration-300 cursor-pointer">
        <FaLinkedinIn className="text-purple-700 text-2xl" />
      </div>

      {/* Instagram */}
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center
                      hover:scale-120 transition duration-300 cursor-pointer">
        <AiFillInstagram className="text-purple-700 text-2xl" />
      </div>
    </div>
    </>
  )
}

export default Contactsection