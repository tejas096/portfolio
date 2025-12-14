import Profile from "../components/Profile";
import HomeMain from "../components/HomeMain";
import HomeBlogs from "../components/HomeBlogs";
import HomeContact from "../components/HomeContact";
import HomeProject from "../components/HomeProject";
import HomeQue from "../components/HomeQue";
import HomeSkills from "../components/HomeSkills";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomeExperience from "../components/HomeExperience";
import HomeAchievement from "../components/HomeAchievement";

const Home: React.FC = () => {
  return (
    <div className="font-['Outfit'] gap-[19px] min-h-screen select-none cursor-default bg-[rgb(16,17,18)] text-white w-full xs:px-[40px] pt-[20px] sm:px-[60px] lg:px-[40px] cen:px-[100px] flex flex-col">
      <Navbar />
      <main
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
          id="experiences"
          className="flex max-lg:items-center h-full flex-col w-full snap-start max-lg:pb-[20px]"
        >
          <HomeExperience />
        </section>
        <section
          id="skills"
          className="flex max-lg:items-center h-full flex-col w-full snap-start max-lg:pb-[20px]"
        >
          <HomeSkills />
        </section>
        <section
          id="achievements"
          className="flex max-lg:items-center h-full flex-col w-full snap-start max-lg:pb-[20px]"
        >
          <HomeAchievement />
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
      </main>
      <Footer />
    </div>
  );
};

export default Home;
