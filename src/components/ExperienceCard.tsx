type PropType = {
  id: number;
  name: string;
  duration: string;
  points: string[];
};
import { data } from "../data/data";

const ExperienceCard = ({ id, name, duration, points }: PropType) => {
  const isMobile = window.innerWidth < 1040;
  const points_new = window.innerWidth < 641 ? 2 : 3;
  return (
    <div className="group h-full cursor-pointer w-[320px] sm:w-full pt-[30px] flex flex-col justify-between gap-[20px] snap-center shrink-0">
      <h1 className="group-hover:text-[rgb(145,75,241)] transition-all duration-300 ease-in-out text-[40px] md:text-[56px] font-semibold leading-[1.1em]">
        {name}
      </h1>
      <div
        className={`flex items-center md:text-[22px] text-[32px] text-[rgb(217,217,217)] font-semibold leading-[1.1em] ${id !== data.experiences.length ? "after:content-[''] after:flex-1 after:h-[1px] after:bg-white/30 gap-4" : ""}`}
      >
        {duration}
      </div>
      <ul className="text-[20px] md:text-[17px] text-[rgb(217,217,217)] list-disc pl-5">
        {(isMobile ? points.slice(0, points_new) : points).map(
          (point, index) => (
            <li key={index}>{point}</li>
          ),
        )}
      </ul>
    </div>
  );
};

export default ExperienceCard;
