import { newFeaturesData, NewFeaturesType } from "../../../data/newFeatures";
import SectionHeading from "../../common/SectionHeading";

const HomeNewFeatures = () => {
  return (
    <>
      <section className="mt-[5.6rem] md:mt-[8rem]">
        <div className="container">
          <div className="text-green-dark">
            <SectionHeading headign="New Features Coming Soon" />
          </div>
          <ul className="mt-[3.2rem] md:mt-[6rem] flex gap-[2.4rem] md:gap-[3rem] flex-col md:flex-row">
            {newFeaturesData.map((item: NewFeaturesType) => {
              return (
                <li
                  key={item.id}
                  className="flex-1 bg-dark-dark2 relative rounded-[2rem] py-[2.4rem] ps-[5rem] "
                >
                  <h4 className="bg-[linear-gradient(281.71deg,_#96CB02_16.78%,_#FAB222_73.53%)] inline-block text-transparent bg-clip-text font-bold text-[1.746rem] md:text-[2.4rem]">
                    {item.title}
                  </h4>
                  <p className="text-light-text text-[1.4rem] md:text-[1.6rem] leading-[2.18rem] md:leading-[3rem] max-w-[43.9rem]">
                    {item.desc}
                  </p>
                  <img
                    src={item.bg}
                    alt="new Features"
                    className="absolute right-0 top-0"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
export default HomeNewFeatures;
// linear-gradient(281.71deg,_#96CB02_16.78%,_#FAB222_73.53%)
