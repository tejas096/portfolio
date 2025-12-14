import {
  House,
  Folder,
  Wrench,
  Briefcase,
  Newspaper,
  Mail,
  ArrowDownToLine,
  Trophy,
} from "lucide-react";
import WrapIcons from "./WrapIcons";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const sections = [
  "summary",
  "project",
  "skills",
  "blog",
  "contact",
  "experiences",
  "achievements",
];

const Navbar = () => {
  const [active, setActive] = useState("summary");

  useEffect(() => {
    const container = document.getElementById("scroll-container");

    const handleScroll = () => {
      if (!container) return;
      const scrollPosition = container.scrollTop + container.clientHeight / 3;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActive(id);
        }
      }
    };

    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-[rgb(39,40,41)] lg:h-[48px] md:w-[760px] lg:w-[800px] xl:w-[1200px] self-center rounded-xl flex py-[5px] px-[30px] items-center">
      <NavLink className="hidden mr-auto lg:block" to="/">
        <div className="font-['Righteous'] text-[rgb(145,75,241)] hover:scale-110 text-[32px]">
          TJ.
        </div>
      </NavLink>
      <ul className="flex gap-[8px] lg:mx-auto">
        <li>
          <WrapIcons
            link="summary"
            active={active}
            setActive={setActive}
            tooltip="Home"
            children={<House size={20} className="cursor-pointer" />}
          />
        </li>
        <li>
          <WrapIcons
            link="project"
            tooltip="Projects"
            active={active}
            setActive={setActive}
            children={<Folder size={20} className="cursor-pointer" />}
          />
        </li>
        <li>
          <WrapIcons
            link="experiences"
            tooltip="Experience"
            active={active}
            setActive={setActive}
            children={<Briefcase size={20} className="cursor-pointer" />}
          />
        </li>
        <li>
          <WrapIcons
            link="skills"
            tooltip="Skills"
            active={active}
            setActive={setActive}
            children={<Wrench size={20} className="cursor-pointer" />}
          />
        </li>
        <li>
          <WrapIcons
            link="achievements"
            tooltip="Achievement"
            active={active}
            setActive={setActive}
            children={<Trophy size={20} className="cursor-pointer" />}
          />
        </li>
        <li>
          <WrapIcons
            link="blog"
            tooltip="Blogs"
            active={active}
            setActive={setActive}
            children={<Newspaper size={20} className="cursor-pointer" />}
          />
        </li>
        <li>
          <WrapIcons
            link="contact"
            tooltip="Contact"
            active={active}
            setActive={setActive}
            children={<Mail size={20} className="cursor-pointer" />}
          />
        </li>
      </ul>
      <div className="md:flex hidden gap-[30px] ml-auto items-center">
        <div
          onClick={() => window.open("/TejasJain.pdf", "_blank")}
          className="flex gap-[5px] items-center cursor-pointer transition-all duration-300 ease-in-out hover:text-[rgb(145,75,241)]"
        >
          <div>
            <ArrowDownToLine size={16} />
          </div>
          <p className="text-[18px] font-['Roboto+Slab']">RESUME</p>
        </div>
        <div
          onClick={() => window.open("/TejasJain.pdf", "_blank")}
          className="flex gap-[5px] items-center cursor-pointer transition-all duration-300 ease-in-out hover:text-[rgb(145,75,241)]"
        >
          <div>
            <ArrowDownToLine size={16} />
          </div>
          <p className="text-[18px] font-['Roboto+Slab']">CV</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
