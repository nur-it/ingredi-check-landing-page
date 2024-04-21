import HomeAbout from "../components/screen/Home/HomeAbout";
import HomeBanner from "../components/screen/Home/HomeBanner";
import HomeFeatures from "../components/screen/Home/HomeFeatures";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <HomeFeatures />
      <div className="mb-[50rem]"></div>
    </>
  );
};
export default Home;
