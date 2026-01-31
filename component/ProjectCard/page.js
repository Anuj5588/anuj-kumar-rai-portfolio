"use client";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ img, head, link, text }) => {
  return (
    <div className="h-[70vh] flex flex-col max-w-xs justify-evenly items-center border border-purple-400/70 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 p-4">
      <Image
        src={img || "/placeholder.png"}
        width={300}
        height={300}
        alt={head || "project"}
      />

      <h5 className="text-white font-mono text-2xl text-center">
        {head}
      </h5>

      <p className="text-white font-mono text-center">
        {text}
      </p>

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-purple-400 px-4 py-2 rounded-full"
      >
        Github
      </Link>
    </div>
  );
};

export default ProjectCard;
