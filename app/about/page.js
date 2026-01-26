import React from 'react'
import Image from 'next/image'
import lpatop from '@/public/image/about.png'
import Techstack from './techStack'

const About = () => {
  return (
   <>
   <div className='flex justify-center items-center translate-y-[110px] scroll max-lg:flex-col   px-10'>
  <div className="max-w-3xl  text-white font-mono">
      <h2 className="text-4xl font-semibold mb-6 text-center">
        Know Who I'M
      </h2>

      <div className='mt-4  h-[20px]'></div>

      <p className="text-l  leading-8 ">
        Hi everyone! I&apos;m <span className="text-purple-400 font-semibold">Anuj Kumar Rai</span>,
        a passionate <span className="text-purple-400">Full-Stack Developer</span> from India.
      </p>

      <p className="text-lg leading-8 max-md">
        I have hands-on experience working as a <span className="text-purple-400">Full Stack & DevOps Engineer</span>,
        where I built scalable web applications using
        <span className="text-purple-400"> React.js, Next.js, Node.js</span>, and cloud platforms
        like <span className="text-purple-400">AWS & Azure</span>.
      </p>

      <p className="text-lg leading-8 ">
        I hold a <span className="text-purple-400">Master of Computer Applications (MCA)</span> degree
        and enjoy creating secure, high-performance systems that solve real-world problems.
      </p>

      <p className="text-lg mb-4">
        Outside of coding, some of my interests include:
      </p>

      <ul className="list-disc list-inside text-lg space-y-2 mb-6">
        <li>Building side projects & exploring new technologies 🚀</li>
        <li>Learning DevOps & cloud-native tools ☁️</li>
        <li>Contributing to impactful social-tech initiatives 🌱</li>
      </ul>

      <blockquote className="italic text-purple-300 text-xl border-l-4 border-purple-500 pl-4">
        &quot;Strive to build things that make a difference!&quot;
      </blockquote>

      <p className="mt-6 text-lg font-semibold">
        Anuj.
      </p>
    </div>

    <div className='m'>
      <Image src={lpatop} width={500} height={500}/>
    </div>
    </div>


   <div className='py-[200px]'><Techstack/></div>
   </>
  )
}

export default About