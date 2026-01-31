import Image from "next/image";

const TechBadge = ({ icon, lable }) => {
  return (
    <div
      className="
        flex justify-center items-center gap-3
       p-2
        min-w-[150px]
        text-center
        rounded-full
        border border-purple-400/70
        bg-[#120a1f]
        hover:shadow-[0_0_22px_rgba(168,85,247,0.6)]
        transition-all duration-300
      "
    >
      <Image src={icon} width={22} height={22} alt={lable} />
      <span className="text-white font-mono text-sm whitespace-nowrap">
        {lable}
      </span>
    </div>
  );
};

export default TechBadge;
