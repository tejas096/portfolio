import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Achievement } from "@/data/data";

interface AchievementCardProps {
  achievement: Achievement;
}

const AchievementCard = ({ achievement }: AchievementCardProps) => {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <div className="group h-full md:h-[380px] cursor-pointer w-full xs:w-[340px] flex flex-col overflow-hidden gap-[15px] max-sm:gap-[10px] rounded-xl snap-center shrink-0 bg-grey ">
            <div className="h-[250px] w-full overflow-hidden rounded-t-lg shrink-0">
              <img
                className="h-full w-full transition-all duration-300 ease-in-out rounded-t-lg object-cover object-center group-hover:scale-105"
                src={achievement.img}
                alt={achievement.title}
                loading="lazy"
              />
            </div>
            <div className="px-[20px] flex flex-col gap-[10px]">
              <p className="text-[18px] text-light-font">{achievement.date}</p>
              <h2 className="text-[28px] xs:text-[30px] font-semibold leading-[1.1em] transition-all duration-300 ease-in-out group-hover:text-purple">
                {achievement.title}
              </h2>
            </div>
          </div>
        }
      />

      <DialogContent className="xs:min-w-[800px] w-[400px] select-none font-['Outfit'] min-h-[600px] bg-[rgb(16,17,18)] text-white border-none shadow-none">
        <DialogHeader>
          <DialogTitle
            className={"text-purple text-[26px] font-semibold leading-[1.1em]"}
          >
            {achievement.title}
          </DialogTitle>
        </DialogHeader>
        <div className="-mx-4 max-h-[72vh] text-[16px] flex flex-col items-center overflow-y-auto px-4 scrollbar-hide space-y-4 text-light-font">
          <p className="max-w-[700px] text-white">{achievement.description}</p>
          <ul className="space-y-2 max-w-[700px]">
            {achievement.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 text-purple">✓</span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          <img
            className="max-w-[700px] w-full rounded-xl"
            src={achievement.img}
            alt={`${achievement.title} Certificate`}
            loading="lazy"
          />

          <div className="max-w-[650px] flex flex-wrap justify-center gap-3">
            {achievement.skills.map((skill) => (
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

export default AchievementCard;
