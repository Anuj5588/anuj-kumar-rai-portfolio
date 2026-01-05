import React from "react";

const Bottomsection = () => {
  return (
    <>
      {/* INTRO SECTION */}
      <section className="min-h-screen flex justify-center items-center">
        <div className="text-white text-[35px] font-medium -translate-y-20 leading-1.5">
          LET ME INTRODUCE MYSELF
        </div>
        <p>
          I’m a Software Engineer who loves transforming ideas into reliable,
          scalable products. Over time, I’ve explored several technologies and
          found my passion in building high-performance systems and intuitive
          user experiences.
          <br />
          <br />
          I’m proficient in
          <i>
            <b className="purple"> JavaScript, C++, Rust, Node.js, and Java </b>
          </i>
          — and I enjoy working across both backend and frontend stacks.
          <br />
          <br />
          My key areas of interest include developing
          <i>
            <b className="purple"> Web Applications, Blockchain Solutions, </b>
          </i>
          and exploring new ways to bridge on-chain and off-chain systems.
          <br />
          <br />
          Whenever possible, I love building projects with
          <b className="purple"> Node.js </b> and modern frameworks like{" "}
          <i>
            <b className="purple">React.js</b> and{" "}
            <b className="purple">Next.js</b>.
          </i>
        </p>
      </section>
    </>
  );
};

export default Bottomsection;
