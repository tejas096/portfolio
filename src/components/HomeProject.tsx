import ProjectCard from "./ProjectCard";
import Crypto from "../assests/project1.webp";
import Airbnb from "../assests/project2.webp";
// import Google from "../assests/project1.webp";
// import Airbnb from "../assests/project2.webp";
// import Amazon from "../assests/project3.webp";
// import ChatGPT from "../assests/project4.webp";

const HomeSecond = () => {
  return (
    <div className="h-full lg:ml-auto w-[320px] xs:w-full md:w-[600px] xl:w-[700px] 2xl:w-[820px] flex flex-col gap-[35px] items-start">
      <h1 className="max-lg:w-full max-lg:text-center text-[36px] xs:text-[48px] xl:text-[68px] font-semibold leading-[1.1em]">
        Recent Projects
        <br /> and <span className="text-[rgb(145,75,241)]">Achievements</span>
      </h1>
      <div className="flex items-start xs:w-full w-[320px] md:w-[600px] xl:w-[700px] 2xl:w-[800px] scrollbar-hide overflow-y-hidden overflow-x-auto gap-[20px] snap-x snap-mandatory">
        <ProjectCard
          id={1}
          name={"Crypto Coins Tracker"}
          image={Crypto}
          title={
            "A real-time crypto tracker app fetching live market data via API, displaying prices, trends, and updates for multiple coins with an intuitive, user-friendly interface."
          }
          link={"https://crypto-coins-tracker-tj.vercel.app/"}
        />
        <ProjectCard
          id={2}
          name={"Travelnest"}
          image={Airbnb}
          title="A full-stack Airbnb clone featuring property listings, maps integration, reviews, and secure authentication with complete CRUD operations for adding, editing, and managing stays seamlessly."
          link={"https://www.airbnb.co.in/"}
        />
      </div>
    </div>
  );
};

export default HomeSecond;
