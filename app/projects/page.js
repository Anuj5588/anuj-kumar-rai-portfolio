import React from 'react'
import ProjectCard from '../component/ProjectCard/page'

import { projectData } from '@/public/jsonData/projectData'

const Projects = () => {
  return (
    <>
    <div className='flex flex-col p-2 gap-5'>
       <div className='font-mono text-center text-5xl text-white mt-[50px] '>My  <span className='text-purple-500'>Projects</span> </div>
    <p className='text-center  text-white text-l'>Here are few projects I've worked on.</p>
    </div>
    <div className='flex flex-wrap gap-8 justify-around items-center mx-auto max-w-6xl max-sm:px-2  my-10'>{
      projectData.map((data, index)=>(
      
        <div key={index}> <ProjectCard img={data.icon} head={data.heading} text={data.text} link={data.link}/></div>

       

      ))
      }
     

    </div>
    </>
   
  )
}

export default Projects