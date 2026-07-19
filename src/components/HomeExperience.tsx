import ExperienceCard from "./ExperienceCard";
import { data } from "../data/data";

const HomeExperience = () => {
  return (
    <div className="h-full lg:ml-auto w-[320px] xs:w-full md:w-[600px] xl:w-[700px] 2xl:w-[820px] flex flex-col gap-[20px] sx:gap-[36px] items-start">
      <h1 className="max-lg:w-full max-lg:text-center text-[36px] sm:text-[48px] xl:text-[68px] font-semibold leading-[1.1em]">
        Hands-On
        <br /> Engineering{" "}
        <span className="text-[rgb(145,75,241)]">Experience</span>
      </h1>
      <div className="flex items-start xs:w-full w-[320px] md:w-[600px] xl:w-[700px] 2xl:w-[800px] scrollbar-hide overflow-y-hidden overflow-x-auto gap-[20px] snap-x snap-mandatory">
        {data.experiences.map((item) => (
          <ExperienceCard key={item.id} experience={item} />
        ))}
      </div>
    </div>
  );
};

export default HomeExperience;
