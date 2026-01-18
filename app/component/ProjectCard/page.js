import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const ProjectCard = ({img, head, link, text}) => {
 
  return (
    <>
    <div className='h-[70vh] flex flex-col max-w-[350px] justify-evenly  items-center border border-purple-400/70 rounded-2xl cursor-pointer transition-all duration-300 ease-out  hover:scale-105 hover:shadow-[0_0_22px_rgba(168,85,247,0.6)] p-4'>
        <div className=''>
            <Image src={img} width={300} height={300}/>
        </div>
        
        <h5 className='text-center max-w-100 text-white font-mono text-2xl'>{head}</h5>
        <p className='text-white font-mono text-center max-w-xl'>{text}</p>
        <div className='text-white bg-purple-400 px-4  py-2 rounded-full'>
            <Link href={link} target='blank'>Github</Link>
        </div>
    </div>
    </>
  )
}

export default ProjectCard