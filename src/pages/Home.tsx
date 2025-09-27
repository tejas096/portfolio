import Profile from "../components/Profile";
import HomeMain from "../components/HomeMain";
import HomeBlogs from "../components/HomeBlogs";
import HomeContact from "../components/HomeContact";
import HomeProject from "../components/HomeProject";
import HomeQue from "../components/HomeQue";
import HomeSkills from "../components/HomeSkills";

const Home: React.FC = () => {
  return (
    <div
      id="scroll-container"
      className="h-[calc(100vh-150px)] lg:h-[580px] w-full snap-y snap-mandatory overflow-y-scroll scrollbar-hide"
    >
      <div className="lg:hidden flex max-lg:items-center h-full flex-col w-full snap-start max-lg:pb-[20px]">
        <Profile />
      </div>
      <section
        id="summary"
        className="h-full max-lg:items-center flex flex-col w-full snap-start max-lg:pb-[20px]"
      >
        <div className="max-lg:hidden">
          <Profile />
        </div>
        <HomeMain />
      </section>
      <section
        id="project"
        className="flex max-lg:items-center h-full flex-col w-full snap-start max-lg:pb-[20px]"
      >
        <HomeProject />
      </section>
      <section
        id="skills"
        className="flex max-lg:items-center h-full flex-col w-full snap-start max-lg:pb-[20px]"
      >
        <HomeSkills />
      </section>
      <section
        id="blog"
        className="flex max-lg:items-center h-full flex-col w-full snap-start max-lg:pb-[20px]"
      >
        <HomeBlogs />
      </section>
      <section
        id="ques"
        className="flex max-lg:items-center h-full flex-col w-full snap-start max-lg:pb-[20px]"
      >
        <HomeQue />
      </section>
      <section
        id="contact"
        className="flex max-lg:items-center h-full flex-col w-full snap-start"
      >
        <HomeContact />
      </section>
    </div>
  );
};

export default Home;
