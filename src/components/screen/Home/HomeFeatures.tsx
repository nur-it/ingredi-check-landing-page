import { featuresData } from "../../../data/featuresData";

const HomeFeatures = () => {
  return (
    <section className="bg-[url(/bgs/featuresBg.svg)] bg-no-repeat bg-cover pt-[10rem]">
      <div className="container">
        <h2 className="font-fredoka font-semibold text-white text-center text-[4rem]">
          Features at Your Fingertips
        </h2>
        <div className="flex flex-wrap justify-between gap-y-[2.4rem]">
          {/* {featuresData.map((item) => {
            return(
                {item.title}
            )
          })} */}
        </div>
      </div>
    </section>
  );
};
export default HomeFeatures;
