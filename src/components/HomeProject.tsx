import ProjectCard from "./ProjectCard";
import { data } from "../data/data";

const HomeSecond = () => {
  return (
    <div className="h-full lg:ml-auto w-[320px] xs:w-full md:w-[600px] xl:w-[700px] 2xl:w-[820px] flex flex-col gap-[35px] items-start">
      <h1 className="max-lg:w-full max-lg:text-center text-[36px] xs:text-[48px] xl:text-[68px] font-semibold leading-[1.1em]">
        Recent Projects
        <br /> and <span className="text-purple">Achievements</span>
      </h1>
      <div className="flex items-start xs:w-full w-[320px] md:w-[600px] xl:w-[700px] 2xl:w-[800px] scrollbar-hide overflow-y-hidden overflow-x-auto gap-[20px] snap-x snap-mandatory">
        {data.projects.map((item) => (
          <ProjectCard key={item.id} project={item} />
        ))}
      </div>
    </div>
  );
};

export default HomeSecond;
