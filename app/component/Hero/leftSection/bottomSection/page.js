import React from "react";

const Bottomsection = () => {
  return (
 <>
  {/* INTRO SECTION */}
  <section className="">
    
    {/* Heading */}
    <div className=" translate-x-[150px] max-md:translate-x-[0px] max-md:text-center  max-sm:text-2xl font-medium text-4xl text-white mb-6">
      LET ME INTRODUCE MYSELF
    </div>

    {/* Paragraph */}
    <div className="text-xl min-h-[400px] text-white max-w-4xl max-md:px-4 leading-relaxed">
      I’m a Software Engineer who loves transforming ideas into reliable,
      scalable products. Over time, I’ve explored several technologies and
      found my passion in building high-performance systems and intuitive
      user experiences.
      <br /><br />

      I’m proficient in{" "}
      <b className="text-[rgb(199,112,240)]">
        JavaScript, C++, Rust, Node.js, and Java
      </b>{" "}
      — and I enjoy working across both backend and frontend stacks.
      <br /><br />

      My key areas of interest include developing{" "}
      <b className="text-[rgb(199,112,240)]">
        Web Applications, Blockchain Solutions
      </b>
      , and exploring new ways to bridge on-chain and off-chain systems.
      <br /><br />

      Whenever possible, I love building projects with{" "}
      <b className="text-[rgb(199,112,240)]">Node.js</b> and modern frameworks like{" "}
      <b className="text-[rgb(199,112,240)]">React.js</b> and{" "}
      <b className="text-[rgb(199,112,240)]">Next.js</b>.
    </div>

  </section>
</>

  );
};

export default Bottomsection;
