import AchievementCard from "./AchievementCard";
import { data } from "../data/data";

const HomeAchievement = () => {
  return (
    <div className="h-full lg:ml-auto w-[320px] xs:w-full md:w-[600px] xl:w-[700px] 2xl:w-[820px] max-sx:pb-[10px] flex flex-col gap-[20px] sx:gap-[45px] items-start">
      <h1 className="max-lg:w-full max-lg:text-center text-[36px] sm:text-[48px] xl:text-[68px] font-semibold leading-[1.1em]">
        Technical Achievements
        <br /> & <span className="text-[rgb(145,75,241)]">Milestones</span>
      </h1>
      <div className="flex h-full overflow-y-hidden items-start xs:w-full w-[320px] md:w-[600px] xl:w-[700px] 2xl:w-[800px] scrollbar-hide overflow-x-auto gap-[20px] snap-x snap-mandatory">
        {data.achievements.map((item) => (
          <AchievementCard
            key={item.id}
            id={item.id}
            image={item.img}
            name={item.title}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeAchievement;
