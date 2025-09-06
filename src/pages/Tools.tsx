import React from "react";

const Tools: React.FC = () => {
  return (
    <div className="h-[calc(100vh-150px)] lg:h-[580px] w-full overflow-y-scroll scrollbar-hide">
      <div className="flex lg:flex-row max-lg:gap-[70px] flex-col h-full">
        <div className="lg:w-[60%] w-full h-full flex items-center justify-center">
          <h1 className="text-[50px] sm:text-[62px] xl:text-[78px] leading-[1.2em] font-bold tracking-tight">
            Code is like humor.
            <br /> When you have to <br />
            explain it,{" "}
            <span className="text-[rgb(145,75,241)]">it’s bad.</span>
          </h1>
        </div>
        <div className="lg:w-[40%] w-full gap-[40px] h-full flex flex-col justify-around p-[20px]">
          <h1 className="text-[rgb(145,75,241)] text-[36px] text-center w-full xs:text-[48px] xl:text-[68px] font-semibold leading-[1.1em]">
            Skills
          </h1>
          <div className="grid grid-cols-3 gap-12 text-left">
            <div>
              <h2 className="text-xl font-semibold mb-4">Languages & Tools</h2>
              <ul className="space-y-2 text-[rgb(217,217,217)]">
                <li>Python</li>
                <li>Java</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>Git</li>
                <li>Postman</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Frameworks & Libraries
              </h2>
              <ul className="space-y-2 text-[rgb(217,217,217)]">
                <li>Next.js</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
                <li>TailwindCSS</li>
                <li>Framer Motion</li>
                <li>GSAP</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Core CS Concepts</h2>
              <ul className="space-y-2 text-[rgb(217,217,217)]">
                <li>DSA</li>
                <li>DBMS</li>
                <li>OOP</li>
                <li>Operating Systems</li>
                <li>System Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
