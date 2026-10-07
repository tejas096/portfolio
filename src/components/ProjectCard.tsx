import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink, Github, Link as Link2 } from "lucide-react";
import type { Project } from "@/data/data";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <div className="group h-full cursor-pointer w-[320px] sm:w-[480px] md:w-[600px] p-[20px] flex flex-col justify-between gap-[20px] rounded-xl snap-center shrink-0 bg-grey ">
            <div className="flex pr-[5px] sm:pr-[30px] justify-between items-center">
              <h1 className="group-hover:text-purple transition-all duration-300 ease-in-out text-[36px] sm:text-[44px] font-semibold leading-[1.1em]">
                {project.name}
              </h1>
              <a
                href={project.live_link}
                target="_blank"
                className="text-light-font"
              >
                <Link2
                  size={26}
                  className="cursor-pointer hover:text-purple transition-all duration-300 ease-in-out"
                />
              </a>
            </div>
            <div className="flex max-sm:flex-col max-sm:justify-center max-sm:items-center gap-[10px]">
              <div className="overflow-hidden h-[150px] lg:h-[220px] rounded-lg w-[250px] sm:w-[200px] md:w-[300px] shrink-0">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  src={project.image}
                  loading="lazy"
                  alt={project.title}
                />
              </div>
              <div className="text-[18px] text-light-font line-clamp-8">
                {project.description}
              </div>
            </div>
          </div>
        }
      />

      <DialogContent className="xs:min-w-[800px] w-[400px] select-none font-['Outfit'] xs:min-h-[600px] bg-[rgb(16,17,18)] text-white border-none shadow-none">
        <DialogHeader>
          <DialogTitle
            className={"text-purple text-[26px] font-semibold leading-[1.1em]"}
          >
            {project.title}
          </DialogTitle>
        </DialogHeader>
        <div className="-mx-4 max-h-[62vh] xs:max-h-[72vh] text-[16px] flex flex-col items-center overflow-y-auto px-4 scrollbar-hide space-y-4 text-light-font">
          <p className="max-w-[700px] text-white">{project.description}</p>
          <img
            className="max-w-[700px] w-full rounded-xl"
            src={project.image}
            alt={`${project.title} Certificate`}
            loading="lazy"
          />
          <ul className="space-y-2 max-w-[700px]">
            {project.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 text-purple">✓</span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          <div className="max-w-[650px] flex flex-wrap justify-center gap-3">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-purple/40 bg-purple/10 px-4 py-2 text-sm font-medium text-purple"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <DialogFooter className="flex flex-row justify-end gap-3 pt-4">
          {project.git_link && (
            <a
              href={project.git_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-purple/30 bg-purple/10 px-4 py-2 text-sm font-medium text-purple transition-all duration-300 hover:bg-purple hover:text-white"
            >
              <Github size={18} />
              GitHub
            </a>
          )}

          {project.live_link && (
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-purple/30 bg-purple/10 px-4 py-2 text-sm font-medium text-purple transition-all duration-300 hover:bg-purple hover:text-white"
            >
              <ExternalLink size={18} />
              Live Link
            </a>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
