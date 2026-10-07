import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { data } from "../data/data";
import type { Experience } from "../data/data";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const isMobile = window.innerWidth < 1040;
  const points_new = window.innerWidth < 641 ? 2 : 3;
  return (
    <Dialog>
      <DialogTrigger
        render={
          <div className="group h-full cursor-pointer w-[320px] sm:w-full pt-[10px] flex flex-col justify-between gap-[20px] snap-center shrink-0">
            <h1 className="group-hover:text-purple transition-all duration-300 ease-in-out text-[40px] md:text-[56px] font-semibold leading-[1.1em]">
              {experience.company}
            </h1>
            <div
              className={`flex items-center md:text-[22px] text-[32px] text-light-font font-semibold leading-[1.1em] ${experience.id !== data.experiences.length ? "after:content-[''] after:flex-1 after:h-[1px] after:bg-white/30 gap-4" : ""}`}
            >
              {experience.duration}
            </div>
            <ul className="text-[20px] md:text-[17px] text-light-font list-disc pl-5">
              {(isMobile
                ? experience.points.slice(0, points_new)
                : experience.points
              ).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        }
      />

      <DialogContent className="xs:min-w-[800px] w-[400px] select-none font-['Outfit'] min-h-[600px] bg-[rgb(16,17,18)] text-white border-none shadow-none">
        <DialogHeader>
          <DialogTitle
            className={"text-purple text-[26px] font-semibold leading-[1.1em]"}
          >
            {experience.company}
          </DialogTitle>
        </DialogHeader>
        <div className="-mx-4 max-h-[72vh] text-[16px] flex flex-col items-center overflow-y-auto px-4 scrollbar-hide space-y-4 text-light-font">
          <p className="max-w-[700px] text-white">{experience.description}</p>
          <ul className="space-y-2 max-w-[700px]">
            {experience.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 text-purple">✓</span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          <img
            className="max-w-[700px] w-full rounded-xl"
            src={experience.img}
            alt={`${experience.company} Certificate`}
            loading="lazy"
          />

          <div className="max-w-[650px] flex flex-wrap justify-center gap-3">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-purple/40 bg-purple/10 px-4 py-2 text-sm font-medium text-purple"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExperienceCard;
