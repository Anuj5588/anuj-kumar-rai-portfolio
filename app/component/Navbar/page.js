"use client";
import { navItems } from "@/public/jsonData/page";
import styles from "./page.module.css";
import { AiFillStar } from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="   max-md:bg-[#15171F]   relative">
        <div className="text-[#623686]  text-[30px] flex mt-4 max-md:mt-0 gap-4 font-extrabold text-2xl mx-[10%] font-mono ">
          Ak .
        </div>
        <div className="flex min-w-[60%] gap-[50px] -mt-[30px] max-md:hidden justify-center ml-[30%] ">
          {navItems.map((item, index) => (
            <Link href={item.path} key={index}>
              <span
                key={index}
                className="group flex flex-wrap relative items-center gap-1 text-white text-[20px] font-mono cursor-pointer"
              >
                <span className="text-[22px]">
                  <item.icon />
                </span>

                <span>{item.label}</span>

                {/* underline */}
                <span
                  className="absolute -bottom-2 left-0 h-[4px] w-0 bg-purple-700 rounded-full 
                 transition-all duration-300 group-hover:w-full
                 shadow-[0_0_10px_rgba(168,85,247,0.9)]"
                ></span>
              </span>
            </Link>
          ))}

          <span
            className={`${styles.hello} flex justify-around items-center flex-wrap  w-[8%] mr-[10%] `}
          >
            <span className="text-[25px] font-mono text-white">
              <CgGitFork />
            </span>
            <span className="text-[25px] font-mono text-white">
              <AiFillStar />
            </span>
          </span>
        </div>
        {/* Burger Icon (below md) */}
        <div className="absolute right-4 top-1">
          <button className="md:hidden text-white text-3xl" onClick={() => setOpen(!open)}>
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <>
          <ul className="md:hidden flex text-white flex-col gap-4 mt-4 justify-center items-center text-2xl font-bold p-4 rounded-lg">
            {navItems.map((item, index) => (
              
              <li>
                <Link href={item.path} key={index}>
                 <span
                key={index}
                className="group relative inline-flex items-center gap-1 text-white text-[20px] font-mono cursor-pointer"
              >
                <span className="text-[22px]">
                  <item.icon />
                </span>
                <span>{item.label}</span>
                  </span>
                </Link>
              
                
              </li>
             
            ))}
          
           <span
            className={`${styles.hello} flex justify-around items-center min-w-[15%] max-w`}
          >
            <span className="text-[25px] font-mono text-white">
              <CgGitFork />
            </span>
            <span className="text-[25px] font-mono text-white">
              <AiFillStar />
            </span>
          </span>
          </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
