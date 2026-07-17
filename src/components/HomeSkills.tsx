import SkillCard from "./SkillCard";
import { data } from "../data/data";

const HomeSkills = () => {
  return (
    <div className="h-full lg:ml-auto w-[320px] xs:w-full md:w-[600px] xl:w-[700px] 2xl:w-[820px] max-sx:pb-[10px] flex flex-col gap-[20px] sx:gap-[45px] items-start">
      <h1 className="max-lg:w-full max-lg:text-center text-[36px] sm:text-[48px] xl:text-[68px] font-semibold leading-[1.1em]">
        Top-Tier Tools for
        <br /> Exceptional{" "}
        <span className="text-[rgb(145,75,241)]">Results</span>
      </h1>
      <div className="flex flex-wrap w-full gap-[10px] xs:gap-[20px]">
        {data.skills.map((item) => (
          <SkillCard
            key={item.id}
            name={item.title}
            title={item.description}
            image={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSkills;
