import { Instagram, Linkedin, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { data } from "../data/data";

const Profile: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-grey  pointer-events-none lg:fixed h-full lg:h-[580px] w-[350px] xs:w-full sm:w-[560px] lg:w-[350px] rounded-xl flex justify-evenly items-center flex-col">
      <img
        className="rounded-xl object-cover object-center"
        src={data.about.profile_img}
        alt={data.about.name}
        loading="eager"
        width={240}
        height={241}
      />
      <div>
        <h1 className="name text-[36px] text-center font-bold">
          {data.about.name}
        </h1>
        <div className="w-full flex text-light-font justify-center text-[16px] items-center flex-col">
          <span>{data.about.main_role}</span>
          <span>{data.about.location}</span>
        </div>
      </div>

      <div className="w-full flex justify-center items-center text-light-font gap-[25px]">
        <a href={data.about.linkdinurl} target="_blank">
          <div className="bg-grey  pointer-events-auto cursor-pointer h-[35px] w-[35px] flex items-center hover:text-white transition-all duration-300 ease-in-out justify-center rounded-lg hover:bg-purple">
            <Linkedin size={20} />
          </div>
        </a>
        <a href={data.about.giturl} target="_blank">
          <div className="bg-grey  pointer-events-auto cursor-pointer h-[35px] w-[35px] flex items-center hover:text-white transition-all duration-300 ease-in-out justify-center rounded-lg hover:bg-purple">
            <Github size={20} />
          </div>
        </a>
        <a href={data.about.instaurl} target="_blank">
          <div className="bg-grey  pointer-events-auto cursor-pointer h-[35px] w-[35px] flex items-center hover:text-white transition-all duration-300 ease-in-out justify-center rounded-lg hover:bg-purple">
            <Instagram size={20} />
          </div>
        </a>
        <a href={data.about.mail}>
          <div className="bg-grey  pointer-events-auto cursor-pointer h-[35px] w-[35px] flex items-center hover:text-white transition-all duration-300 ease-in-out justify-center rounded-lg hover:bg-purple">
            <Mail size={20} />
          </div>
        </a>
      </div>
      <Link
        to={"/"}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("contact");
        }}
        className="h-[44px] pointer-events-auto font-semibold w-[180px] rounded-lg flex justify-center items-center bg-purple"
      >
        Let's Talk
      </Link>
    </div>
  );
};

export default Profile;
