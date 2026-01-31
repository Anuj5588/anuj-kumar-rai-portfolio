"use client";
import React, { useEffect, useState } from "react";

const words = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "React Developer",
  "Node.js Developer",
  "DevOps Engineer",
];

const Uppersection
 = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 120 : 150;

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <>
      {/* HERO SECTION */}
      <section className=" flex flex-col justify-center max-md:min-w-[200px] max-sm:text-center pl-[50px]">
        <h6 className="text-white text-4xl max-md:text-2xl ">
          Hi There!{" "}
          <span className="wave max-md:text-3xl" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h6>

        <div className="text-white text-4xl max-md:text-2xl py-4">
          I'M <span className="text-amber-400">Anuj Kumar Rai</span>
        </div>

        <div className="pt-14  max-sm:whitespace-nowrap">
          <span className="text-purple-400 font-semibold text-3xl max-sm:text-2xl">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </div>
      </section>


    </>
  );
};

export default Uppersection
;
