"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/public/jsonData/page";
import { AiFillStar } from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import styles from "./page.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 z-1 w-full py-3 transition-all duration-300
        ${
          scrolled
            ? " shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent backdrop-blur-md"
        }`}
    >
      {/* Logo */}
      <div
        className={`text-[30px] flex py-3 max-md:mt-0 gap-4 font-extrabold text-2xl mx-[10%] font-mono
          ${scrolled ? "text-purple-400" : "text-[#623686]"}`}
      >
        Ak .
      </div>

      {/* Desktop Menu */}
      <div className="flex min-w-[60%] gap-[50px] -mt-[45px] max-md:hidden justify-center ml-[30%]">
        {navItems.map((item, index) => (
          <Link href={item.path} key={index}>
            <span className="group flex flex-wrap relative items-center gap-1 text-white text-[20px] font-mono cursor-pointer">
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

        {/* Right Icons */}
        <span
          className={`${styles.hello} flex justify-around items-center flex-wrap w-[8%] mr-[10%]`}
        >
          <span className="text-[25px] font-mono text-white">
            <CgGitFork />
          </span>
          <span className="text-[25px] font-mono text-white">
            <AiFillStar />
          </span>
        </span>
      </div>

      {/* Burger Icon (Mobile) */}
      <div className="absolute right-4 top-3">
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul
          className={`md:hidden flex flex-col gap-4 mt-4 justify-center items-center 
          text-2xl font-bold p-4 rounded-lg transition-all
          ${scrolled ? "bg-[#15121e]" : "bg-[#9c4fac]/80 backdrop-blur-md"}`}
        >
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>
                <span className="group relative inline-flex items-center gap-1 text-white text-[20px] font-mono cursor-pointer">
                  <span className="text-[22px]">
                    <item.icon />
                  </span>
                  <span>{item.label}</span>
                </span>
              </Link>
            </li>
          ))}

          <span
            className={`${styles.hello} flex justify-around items-center min-w-[15%]`}
          >
            <span className="text-[25px] font-mono text-white">
              <CgGitFork />
            </span>
            <span className="text-[25px] font-mono text-white">
              <AiFillStar />
            </span>
          </span>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
