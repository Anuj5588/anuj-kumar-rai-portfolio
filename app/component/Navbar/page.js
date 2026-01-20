"use client"

import { navItems } from '@/public/jsonData/page'
import styles from "./page.module.css";
import { AiFillStar } from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import Link from 'next/link'
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="flex items-center justify-between w-full mt-4 max-md:bg-[#6e6d74] max-md:m-0 max-md:-pr-0 ">

        {/* Logo */}
        <span className="text-white text-[30px] font-extrabold font-mono ">
          Ak .
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-[60px] items-center">
          {navItems.map((item, index) => (
            <Link href={item.path} key={index}>
              <span className="group relative inline-flex items-center gap-2 text-white text-[20px] font-mono cursor-pointer">
                <item.icon className="text-[22px]" />
                <span>{item.label}</span>

                {/* underline */}
                <span className="absolute -bottom-2 left-0 h-[3px] w-0 bg-purple-500 rounded-full transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          ))}

          <span className={`${styles.hello} flex gap-4`}>
            <CgGitFork className="text-white text-[25px]" />
            <AiFillStar className="text-white text-[25px]" />
          </span>
        </div>

        {/* Burger Icon (max-md) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-[30px]"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden  items-center  flex flex-col gap-6 bg-[#6e6d74]  ">
          {navItems.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              onClick={() => setOpen(false)}
            >
              <span className="flex items-center gap-3 text-white text-[20px] font-mono">
                <item.icon />
                {item.label}
              </span>
            </Link>
          ))}

          <div className={`${styles.hello} flex gap-6`}>
            <CgGitFork className="text-white text-[25px]" />
            <AiFillStar className="text-white text-[25px]" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
