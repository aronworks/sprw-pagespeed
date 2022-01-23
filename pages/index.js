import AndroidApp from "../components/android-app/AndroidApp";
import Faqs from "../components/faq/Faqs";
import SkillSets from "../components/learning-platform/SkillSets";
import Courses from "../components/programming/Courses";
import Footer from "../components/footer/footer";
import GameApp from "../public/assets/images/game-app.svg";
import Image from "next/image";
import NavBar from "../components/nav-bar/NavBar";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

function SingleAndroidApp({ image, title, desc }) {
  return (
    <div className="w-1/4 text-center m-0">
      <Image src={image} alt="appone" height="168" width="200" />
      <div className="mx-[2rem] mt-4">
        <h2 className="text-xl font-medium mb-2 ">{title}</h2>
        <p className="text-base">{desc}</p>
      </div>
    </div>
  );
}

function TestimonialBg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 960 940"
      className="absolute max-w-full right-0 w-[606px] top-[140px] -z-10 lg:block hidden"
    >
      <defs>
        <clipPath id="a">
          <path
            fill="#fff"
            d="M0 0h960v940H0z"
            data-name="Rectangle 1836"
            transform="translate(960 5486)"
          ></path>
        </clipPath>
      </defs>
      <g data-name="Group 6610">
        <path
          fill="#ebf9ff"
          d="M584.14 105.267c14.006 19.91-22.278 51.864-49.77 60.27s-41.506 12.72-56.489 0 15.104-59.892 42.595-68.297 49.656-11.883 63.663 8.027z"
          data-name="Path 28091"
        ></path>
        <g
          clipPath="url(#a)"
          data-name="Mask Group 157"
          transform="translate(-960 -5486)"
        >
          <path
            fill="#ebf9ff"
            d="M2060.906 5396.294s-65.056 46.278-161.378 103.439c-116.328 69.033-277.974 153.867-426.766 193.289-148.564 39.364 10.97-228.456-215.163-125.399-493.18 260.331-310.413 728.074 31.18 827.117 86.423 25.058 184.17 28.41 282.413 19.399 288.35-26.453 577.667-160.4 577.667-160.4z"
            data-name="Path 28090"
          ></path>
        </g>
      </g>
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50.907 40.307"
      className="w-20 mb-4"
    >
      <path
        fill="#00afff"
        d="M50.907 40.307h-19.56a58.156 58.156 0 01-2.986-18.512q0-9.554 5.3-15.675t15.6-6.121v9.7q-7.763 0-7.763 9.853v2.389h9.409zm-28.364 0H2.986A58.156 58.156 0 010 21.795Q0 12.241 5.3 6.12T20.9-.001v9.7q-7.763 0-7.763 9.853v2.389h9.41z"
        data-name="Path 9532"
      ></path>
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="w-5/6 max-w-[1300px] mx-auto">
        <AndroidApp />
        <div>
          <div className="text-center">
            <h2 className="text-3xl font-bold ">
              What Android Apps will my child code and build?
            </h2>
            <p className="my-8 text-base">
              The best part about learning here is &quot;No Prior coding
              Knowledge is Required&quot;
            </p>
            <p className="mb-8 text-lg font-light">
              The entire course starts from the basics on how to code and is
              loaded with fun experiments that your child will enjoy. Each
              chapter will teach a new concept to your child and let him/her
              build an App thats fun and useful. Once learnt all concepts,
              imagination is the only limitation to build more wonderful Apps
              and solve Problems.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <SingleAndroidApp
              image={GameApp}
              title="Build Your Own Game"
              desc="Let your child learn to build cool Android game apps like Football!"
            />
            <SingleAndroidApp
              image={GameApp}
              title="Voice Recognition App"
              desc="Let your child interact with the computer using voice recognition"
            />
            <SingleAndroidApp
              image={GameApp}
              title="GPS Locator App"
              desc="Let them acquire the skills to build a Live Location tracker"
            />
            <SingleAndroidApp
              image={GameApp}
              title="Pedometer App"
              desc="A simple application to track the step count while we walk"
            />
          </div>
        </div>
        <div className="flex justify-between items-center my-28">
          <div className="w-1/2 px-4">
            <h2 className="text-primary-blue mb-4 text-[2rem] font-semibold">
              India&apos;s #1 FUN <br />
              <span>LEARNING PLATFORM</span>
            </h2>
            <p className="font-normal text-[2rem] mb-4">
              What&apos;s The Benefit For My Child?
            </p>
            <p className="mb-4 font-light text-lg leading-[1.8]">
              The courses are specially designed by experts for ages 10+ to
              engage them well and useful. Coding and STEM Skills are essential
              skills for your child, but that&apos;s not the only benefits your
              child will get. Developing interpersonal skills through the
              hands-on experiments is the highlight of this course
            </p>
          </div>
          <SkillSets />
        </div>
      </div>

      <div className="bg-light-green py-12">
        <div className="w-5/6 max-w-[1300px] mx-auto">
          <h2 className="text-center mb-12 text-[2rem] font-semibold">
            How to Start Programming?
          </h2>
          <div className="mx-12">
            <Courses />
          </div>
        </div>
      </div>

      <div>
        <div className="relative lg:bg-transparent bg-[rgba(219,244,255,0.5)]">
          <div className="w-5/6 max-w-[1300px] mx-auto">
            <h2 className="text-3xl font-light text-center w-3/4 m-auto leading-normal pt-16">
              Over 1 Lakh+ Parents like you from all over India have enrolled
              their child at SP Robotic Works and were thrilled with their
              child&apos;s progress and enthusiasm to learn and explore tech.
            </h2>
            <div className="flex justify-between items-center pt-16">
              <div className="w-[200px] flex flex-col items-center mb-24">
                <QuoteIcon />
                <h2 className="w-[200px] mb-4 text-[2rem] text-center font-semibold">
                  Parent <span>Testimonials</span>
                </h2>
              </div>

              <div className="w-[70%]">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={20}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 1,
                    },
                    1200: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="bg-white m-2 p-6 drop-shadow-md mb-24">
                      <div className="flex items-center mb-6">
                        <Image
                          className=""
                          src="https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/shobana-customer.png"
                          width={70}
                          height={70}
                        />
                        <div className="ml-4">
                          <p className="font-medium">Shobana</p>
                          <p className="font-light">
                            Mother of Krishik Karthikeyan
                          </p>
                        </div>
                      </div>
                      <p className="font-light leading-relaxed">
                        My son is always happy to go to Robotics class (with
                        full smile & joy).I attribute this to the exemplary
                        teaching and community feel of the class.It is indeed
                        very motivating for parents and children to get such
                        encouragement and platforms to be acknowledged for their
                        good performance. Thank you once again for facilitating
                        good learning.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="bg-white m-2 p-6 drop-shadow-md">
                      <div className="flex items-center mb-6">
                        <Image
                          className=""
                          src="https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/shobana-customer.png"
                          width={70}
                          height={70}
                        />
                        <div className="ml-4">
                          <p className="font-medium">Shobana</p>
                          <p className="font-light">
                            Mother of Krishik Karthikeyan
                          </p>
                        </div>
                      </div>
                      <p className="font-light leading-relaxed">
                        My son is always happy to go to Robotics class (with
                        full smile & joy).I attribute this to the exemplary
                        teaching and community feel of the class.It is indeed
                        very motivating for parents and children to get such
                        encouragement and platforms to be acknowledged for their
                        good performance. Thank you once again for facilitating
                        good learning.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="bg-white m-2 p-6 drop-shadow-md">
                      <div className="flex items-center mb-6">
                        <Image
                          className=""
                          src="https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/shobana-customer.png"
                          width={70}
                          height={70}
                        />
                        <div className="ml-4">
                          <p className="font-medium">Shobana</p>
                          <p className="font-light">
                            Mother of Krishik Karthikeyan
                          </p>
                        </div>
                      </div>
                      <p className="font-light leading-relaxed">
                        My son is always happy to go to Robotics class (with
                        full smile & joy).I attribute this to the exemplary
                        teaching and community feel of the class.It is indeed
                        very motivating for parents and children to get such
                        encouragement and platforms to be acknowledged for their
                        good performance. Thank you once again for facilitating
                        good learning.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="bg-white m-2 p-6 drop-shadow-md">
                      <div className="flex items-center mb-6">
                        <Image
                          className=""
                          src="https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/shobana-customer.png"
                          width={70}
                          height={70}
                        />
                        <div className="ml-4">
                          <p className="font-medium">Shobana</p>
                          <p className="font-light">
                            Mother of Krishik Karthikeyan
                          </p>
                        </div>
                      </div>
                      <p className="font-light leading-relaxed">
                        My son is always happy to go to Robotics class (with
                        full smile & joy).I attribute this to the exemplary
                        teaching and community feel of the class.It is indeed
                        very motivating for parents and children to get such
                        encouragement and platforms to be acknowledged for their
                        good performance. Thank you once again for facilitating
                        good learning.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="bg-white m-2 p-6 drop-shadow-md">
                      <div className="flex items-center mb-6">
                        <Image
                          className=""
                          src="https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/shobana-customer.png"
                          width={70}
                          height={70}
                        />
                        <div className="ml-4">
                          <p className="font-medium">Shobana</p>
                          <p className="font-light">
                            Mother of Krishik Karthikeyan
                          </p>
                        </div>
                      </div>
                      <p className="font-light leading-relaxed">
                        My son is always happy to go to Robotics class (with
                        full smile & joy).I attribute this to the exemplary
                        teaching and community feel of the class.It is indeed
                        very motivating for parents and children to get such
                        encouragement and platforms to be acknowledged for their
                        good performance. Thank you once again for facilitating
                        good learning.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="bg-white m-2 p-6 drop-shadow-md">
                      <div className="flex items-center mb-6">
                        <Image
                          className=""
                          src="https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/shobana-customer.png"
                          width={70}
                          height={70}
                        />
                        <div className="ml-4">
                          <p className="font-medium">Shobana</p>
                          <p className="font-light">
                            Mother of Krishik Karthikeyan
                          </p>
                        </div>
                      </div>
                      <p className="font-light leading-relaxed">
                        My son is always happy to go to Robotics class (with
                        full smile & joy).I attribute this to the exemplary
                        teaching and community feel of the class.It is indeed
                        very motivating for parents and children to get such
                        encouragement and platforms to be acknowledged for their
                        good performance. Thank you once again for facilitating
                        good learning.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="bg-white m-2 p-6 drop-shadow-md">
                      <div className="flex items-center mb-6">
                        <Image
                          className=""
                          src="https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/shobana-customer.png"
                          width={70}
                          height={70}
                        />
                        <div className="ml-4">
                          <p className="font-medium">Shobana</p>
                          <p className="font-light">
                            Mother of Krishik Karthikeyan
                          </p>
                        </div>
                      </div>
                      <p className="font-light leading-relaxed">
                        My son is always happy to go to Robotics class (with
                        full smile & joy).I attribute this to the exemplary
                        teaching and community feel of the class.It is indeed
                        very motivating for parents and children to get such
                        encouragement and platforms to be acknowledged for their
                        good performance. Thank you once again for facilitating
                        good learning.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="bg-white m-2 p-6 drop-shadow-md">
                      <div className="flex items-center mb-6">
                        <Image
                          className=""
                          src="https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/shobana-customer.png"
                          width={70}
                          height={70}
                        />
                        <div className="ml-4">
                          <p className="font-medium">Shobana</p>
                          <p className="font-light">
                            Mother of Krishik Karthikeyan
                          </p>
                        </div>
                      </div>
                      <p className="font-light leading-relaxed">
                        My son is always happy to go to Robotics class (with
                        full smile & joy).I attribute this to the exemplary
                        teaching and community feel of the class.It is indeed
                        very motivating for parents and children to get such
                        encouragement and platforms to be acknowledged for their
                        good performance. Thank you once again for facilitating
                        good learning.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <TestimonialBg />
        </div>
      </div>

      <div className="w-5/6 max-w-[1300px] mx-auto">
        <Faqs />
      </div>
      <Footer />
    </>
  );
}
