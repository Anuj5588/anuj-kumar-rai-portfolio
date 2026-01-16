import React from 'react'
import TechBadge from '../component/TechBadge/page.js'
import { techList } from '@/public/jsonData/techStack.js'




const Techstack = () => {
  return (
    <>  
         <div className="mt-10 flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {techList.map((tech, index) => (
          <TechBadge
            key={index}
            icon={tech.icon}
            lable={tech.label}
          />
        ))}
      </div>

  </>
  
  )
}

export default Techstack