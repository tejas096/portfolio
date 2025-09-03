import React from "react";

const Tools: React.FC = () => {
  return (
    <div className="h-[calc(100vh-150px)] lg:h-[580px] w-full snap-y snap-mandatory overflow-y-scroll scrollbar-hide">
      <section className="h-screen bg-black text-white flex items-center justify-center px-16">
        <div className="flex w-full max-w-6xl">
          {/* Left Side */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-[5rem] leading-tight font-bold tracking-tight">
              DEVELOPER <br />
              DESIGNER <br />
              CREATOR/
            </h1>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-center items-center">
            <div className="grid grid-cols-3 gap-12 text-left">
              {/* Languages & Tools */}
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Languages & Tools
                </h2>
                <ul className="space-y-2 text-gray-300">
                  <li>Python</li>
                  <li>SQL</li>
                  <li>C++</li>
                  <li>Java</li>
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                  <li>Git</li>
                  <li>Postman</li>
                  <li>Docker</li>
                  <li>Firebase</li>
                </ul>
              </div>

              {/* Frameworks & Libraries */}
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Frameworks & Libraries
                </h2>
                <ul className="space-y-2 text-gray-300">
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Flask</li>
                  <li>Bootstrap</li>
                  <li>jQuery</li>
                  <li>TailwindCSS</li>
                  <li>Framer Motion</li>
                  <li>GSAP</li>
                </ul>
              </div>

              {/* Core CS Concepts */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Core CS Concepts</h2>
                <ul className="space-y-2 text-gray-300">
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
      </section>
    </div>
  );
};

export default Tools;
