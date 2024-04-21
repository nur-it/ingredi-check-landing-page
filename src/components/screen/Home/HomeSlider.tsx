import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";
import { Autoplay } from "swiper/modules";
import SectionHeading from "../../common/SectionHeading";
import "swiper/css";
import sliderImg1 from "../../../assets/images/sliderImg1.png";

const HomeSlider = () => {
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;

    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <section className="bg-[url(/bgs/lineBg.svg)] h-screen">
      <div className="container relative">
        <div className="absolute top-[-10.7rem] w-full flex items-center justify-center md:justify-[unset] gap-[2.4rem]">
          <div
            className="hidden md:flex w-[4.8rem] h-[4.8rem] items-center justify-center cursor-pointer transition-all duration-150 text-[#7E8379] rounded-complete hover:text-white hover:bg-black text-[2rem]"
            onClick={handlePrev}
          >
            <TfiAngleLeft />
          </div>
          <div className="w-[90%]">
            <Swiper
              ref={sliderRef}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              // modules={[Autoplay]}
              scrollbar={{ draggable: true }}
            >
              {[...Array(8)].map((_, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="bg-green-extraLight w-full rounded-[2rem] py-[3.2rem] px-[5.15rem] md:p-[8rem]">
                      <div className="text-green-dark">
                        <SectionHeading headign="Real Stories, Real Solutions" />
                      </div>
                      <div className="mt-[1.9rem] md:mt-[4.1rem] flex items-center justify-between flex-col-reverse md:flex-row">
                        <div className="md:w-[40%] mt-[3.1rem] md:mt-0">
                          <h4 className="font-fredoka font-semibold text-dark-dark2 text-[1.6rem] md:text-[3.6rem]">
                            Geeta's Unique Diet
                          </h4>
                          <p className="mt-[1rem] md:mt-[2.2rem] text-dark-dark2 text-[1.4rem] md:text-[1.8rem] leading-[1.8rem] md:leading-[3rem] max-w-[37.1rem]">
                            Following the Jain diet, Geeta avoids a variety of
                            common foods, including root vegetables. With her
                            dietary preferences saved in IngrediCheck, exploring
                            new foods is no longer a gamble.
                          </p>
                        </div>
                        <figure>
                          <img src={sliderImg1} alt="slider 1" />
                        </figure>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <div
                className="flex md:hidden w-[2.4rem] h-[2.4rem] items-center justify-center cursor-pointer transition-all duration-150 text-[#7E8379] rounded-complete hover:text-white hover:bg-black text-[1.6rem] absolute top-[50%] left-[1%] translate-y-[-50%] z-40 "
                onClick={handlePrev}
              >
                <TfiAngleLeft />
              </div>
              <div
                className="flex md:hidden w-[2.4rem] h-[2.4rem] items-center justify-center cursor-pointer transition-all duration-150 rounded-complete text-white bg-black text-[1.6rem] absolute top-[50%] right-[1%]  translate-y-[-50%] z-40 "
                onClick={handleNext}
              >
                <TfiAngleRight />
              </div>
            </Swiper>
          </div>
          <div
            className="hidden md:flex w-[4.8rem] h-[4.8rem] items-center justify-center cursor-pointer transition-all duration-150 rounded-complete text-white bg-black text-[2rem]"
            onClick={handleNext}
          >
            <TfiAngleRight />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeSlider;
