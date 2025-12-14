import ExperienceCard from "./ExperienceCard";

const HomeExperience = () => {
  return (
    <div className="h-full lg:ml-auto w-[320px] xs:w-full md:w-[600px] xl:w-[700px] 2xl:w-[820px] max-sx:pb-[10px] flex flex-col gap-[20px] sx:gap-[45px] items-start">
      <h1 className="max-lg:w-full max-lg:text-center text-[36px] sm:text-[48px] xl:text-[68px] font-semibold leading-[1.1em]">
        Hands-On
        <br /> Engineering{" "}
        <span className="text-[rgb(145,75,241)]">Experience</span>
      </h1>
      <div className="flex items-start xs:w-full w-[320px] md:w-[600px] xl:w-[700px] 2xl:w-[800px] scrollbar-hide overflow-y-hidden overflow-x-auto gap-[20px] snap-x snap-mandatory">
        <ExperienceCard
          id={1}
          name={"Winter Intern – NPTEL"}
          duration={"Dec 2025 – Jan 2026"}
          points={[
            "Selected for NPTEL Winter Internship 2025 under Prof. Sudarshan Iyengar, IIT Ropar.",
            "Worked on assigned technical tasks and problem statements under academic mentorship.",
            "Collaborated in a virtual academic environment with a focus on quality and correctness.",
            "Gained exposure to research-oriented problem solving, structured documentation, and disciplined development practices.",
          ]}
        />
        <ExperienceCard
          id={2}
          name={"Winter Intern – NPTEL"}
          duration={"Dec 2025 – Jan 2026"}
          points={[
            "Selected for NPTEL Winter Internship 2025 under Prof. Sudarshan Iyengar, IIT Ropar.",
            "Worked on assigned technical tasks and problem statements under academic mentorship.",
            "Gained exposure to research-oriented problem solving, structured documentation, and disciplined development practices.",
            "Collaborated in a virtual academic environment with a focus on quality and correctness.",
          ]}
        />
      </div>
    </div>
  );
};

export default HomeExperience;
