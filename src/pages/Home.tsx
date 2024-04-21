import HomeAbout from "../components/screen/Home/HomeAbout";
import HomeBanner from "../components/screen/Home/HomeBanner";
import HomeFeatures from "../components/screen/Home/HomeFeatures";
import HomeSlider from "../components/screen/Home/HomeSlider";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <HomeFeatures />
      <HomeSlider />
      <div className="mb-[50rem]"></div>
    </>
  );
};
export default Home;
