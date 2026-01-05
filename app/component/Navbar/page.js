
import { navItems } from '@/public/jsonData/page'
import styles from "./page.module.css";
import {
  AiFillStar,
} from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";

const Navbar = () => {


  return (
    <>
    <span className='text-white text-[30px] flex mt-4 gap-4 font-extrabold text-2xl ml-[12%] font-mono'>Ak .</span>
    <div className='flex  gap-[70px] -mt-[30px]  ml-[40%]'>
      
     
      {navItems.map((item, index) => (
     <span key={index} className="inline-flex items-center gap-1 text-white text-[20px] font-mono">
    <span><item.icon /></span>
    <span>{item.label}</span>
  </span>
  
   
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