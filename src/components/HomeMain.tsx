import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { data } from "../data/data";

const HomeMain = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex justify-between h-full max-lg:snap-start lg:ml-auto w-[320px] xs:w-full md:w-[600px] xl:w-[700px] 2xl:w-[820px] items-start flex-col">
      <div>
        <h1 className="max-lg:w-full max-lg:text-center text-[36px] xs:text-[48px] xl:text-[68px] font-semibold leading-[1.1em]">
          Exploring Intelligence <br /> Through{" "}
          <span className="text-[rgb(145,75,241)]">Code</span>
        </h1>
        <div className="text-[18px] text-[rgb(217,217,217)] leading-[1.2em] pt-[10px]">
          {data.about.description}
        </div>
      </div>
      <div className="flex justify-between w-[320px] xs:w-[400px] xl:w-[550px]">
        <div>
          <div className="text-[48px] xl:text-[70px] font-semibold leading-[1.2em]">
            +{data.about.years_of_exp}
          </div>
          <div className="leading-[1.2em] text-[rgb(217,217,217)]">
            YEARS OF
          </div>
          <div className="text-[rgb(217,217,217)]">EXPERIENCE</div>
        </div>
        <div>
          <div className="text-[48px] xl:text-[70px] font-semibold leading-[1.2em]">
            +{data.about.projects_completed}
          </div>
          <div className="leading-[1.2em] text-[rgb(217,217,217)]">
            PROJECTS
          </div>
          <div className="text-[rgb(217,217,217)]">COMPLETED</div>
        </div>
        <div>
          <div className="text-[48px] xl:text-[70px] font-semibold leading-[1.2em]">
            +&infin;
          </div>
          <div className="leading-[1.2em] text-[rgb(217,217,217)]">
            CURIOSITY
          </div>
          <div className="text-[rgb(217,217,217)]">TO LEARN</div>
        </div>
      </div>
      <div className="flex items-center justify-between w-[300px] h-[50px]">
        <Link
          to={"/"}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
          className="h-[44px] font-semibold w-[180px] rounded-lg flex justify-center items-center bg-[rgb(145,75,241)]"
        >
          Let's Talk
        </Link>
        <Link
          className="flex items-center gap-[10px] group"
          to={"/"}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("project");
          }}
        >
          My Work{" "}
          <ArrowRight
            size={16}
            className="scale-x-150 scale-y-100 group-hover:text-[rgb(145,75,241)] group-hover:translate-x-1 transition-all duration-300 ease-in-out"
          />
        </Link>
      </div>
      <div>
        <div className="text-[18px] text-[rgb(217,217,217)] ">
          Expertise Across the Development Spectrum
        </div>
        <div className="w-[320px] xs:w-[400px] xl:w-[750px] overflow-hidden py-4 [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)]">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {data.about.roles.concat(data.about.roles).map((role, index) => (
              <span
                key={index}
                className="text-lg text-white font-semibold px-4 py-2"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
