import Profile from "../components/Profile";
import HomeMain from "../components/HomeMain";
import HomeBlogs from "../components/HomeBlogs";
import HomeContact from "../components/HomeContact";
import HomeProject from "../components/HomeProject";
import HomeQue from "../components/HomeQue";
import HomeSkills from "../components/HomeSkills";

const Home: React.FC = () => {
  return (
    <div className="h-[calc(100vh-150px)] lg:h-[580px] w-full snap-y snap-mandatory overflow-y-scroll scrollbar-hide">
      <div className="lg:hidden flex max-lg:items-center h-full flex-col w-full snap-start max-lg:pb-[20px]">
        <Profile />
      </div>
      <div className="h-full max-lg:items-center flex flex-col w-full snap-start max-lg:pb-[20px]">
        <div className="max-lg:hidden">
          <Profile />
        </div>
        <HomeMain />
      </div>
      <div className="flex max-lg:items-center h-full flex-col w-full snap-start max-lg:pb-[20px]">
        <HomeProject />
      </div>
      <div className="flex max-lg:items-center h-full flex-col w-full snap-start max-lg:pb-[20px]">
        <HomeSkills />
      </div>
      <div className="flex max-lg:items-center h-full flex-col w-full snap-start max-lg:pb-[20px]">
        <HomeBlogs />
      </div>
      <div className="flex max-lg:items-center h-full flex-col w-full snap-start max-lg:pb-[20px]">
        <HomeQue />
      </div>
      <div className="flex max-lg:items-center h-full flex-col w-full snap-start">
        <HomeContact />
      </div>
    </div>
  );
};

export default Home;
