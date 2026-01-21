
import { navItems } from '@/public/jsonData/page'
import styles from "./page.module.css";
import {
  AiFillStar,
} from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import Link from 'next/link';

const Navbar = () => {


  return (
    <>
    <span className='text-white text-[30px] flex mt-4 gap-4 font-extrabold text-2xl ml-[12%] font-mono'>Ak .</span>
    <div className='flex  gap-[70px] -mt-[30px]  ml-[40%]'>
      
     
     {navItems.map((item, index) => (
     
      <Link href={item.path} key={index}>
      <h1> {console.log(item.path)}</h1>
  <span
    key={index}
    className="group relative inline-flex items-center gap-1 text-white text-[20px] font-mono cursor-pointer"
  >
    <span className="text-[22px]">
      <item.icon />
    </span>

    <span>{item.label}</span>

    {/* underline */}
    <span
      className="absolute -bottom-2 left-0 h-[3px] w-0 bg-purple-500 rounded-full 
                 transition-all duration-300 group-hover:w-full
                 shadow-[0_0_10px_rgba(168,85,247,0.9)]"
    ></span>
  </span>
  </Link>
))}


   <span className={`${styles.hello} flex justify-around items-center w-[8%] `}>
    <span className='text-[25px] font-mono text-white' ><CgGitFork/></span>
      <span  className='text-[25px] font-mono text-white'><AiFillStar/></span>
</span>
      
</div>
        </>
  )
}

export default Navbar