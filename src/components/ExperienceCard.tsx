type PropType = {
  id: number;
  name: string;
  duration: string;
  points: string[];
};

const ExperienceCard = ({ name, duration, points }: PropType) => {
  return (
    <div className="group h-full cursor-pointer w-[320px] sm:w-full pt-[30px] flex flex-col justify-between gap-[20px] snap-center shrink-0">
      <h1 className="group-hover:text-[rgb(145,75,241)] transition-all duration-300 ease-in-out text-[48px] sm:text-[56px] font-semibold leading-[1.1em]">
        {name}
      </h1>
      <div className="flex items-center text-[32px] text-[rgb(217,217,217)] font-semibold leading-[1.1em] after:content-[''] after:flex-1 after:h-[1px] after:bg-white/30 gap-4">
        {duration}
      </div>
      <ul className="text-[20px] text-[rgb(217,217,217)] list-disc pl-5">
        {points.map((m) => (
          <li>{m}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
