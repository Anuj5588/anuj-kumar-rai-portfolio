import React from 'react'
import TechBadge from '../component/TechBadge/page.js'
import { techList , tools} from '@/public/jsonData/techStack.js'




const Techstack = () => {
  return (

    <>
     <div className='text-3xl text-white  font-mono text-center   flex-wrap  font-bold'>Professional <span className='text-purple-500'>Skillset</span></div>  
         <div className="mt-10 flex flex-wrap justify-center gap-6 max-w-6xl mx-auto  ">
         
        {techList.map((tech, index) => (
          <TechBadge
            key={index}
            icon={tech.icon}
            lable={tech.label}
          />
        ))}
      </div>

      <div className='text-4xl text-purple-500 font-mono  text-center font-bold pt-[100px]'>Tools <span className='text-white'>I  use</span></div> 

      <div className='max-w-6xl flex flex-wrap justify-center gap-6 mx-auto mt-10'>{
        tools.map((tool,index)=>(
          <>
        
          <TechBadge key={tool.key} icon={tool.icon} lable={tool.label}/>
        
           </>
        ))
       
        }
  
        </div> 

  </>
  
  )
}

export default Techstack