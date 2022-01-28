import AndroidApp from "../components/android-app/AndroidApp";
import Faqs from "../components/faq/Faqs";
import SkillSets from "../components/learning-platform/SkillSets";
import Courses from "../components/programming/Courses";
import Footer from "../components/footer/Footer";
import Image from "next/image";
import NavBar from "../components/nav-bar/NavBar";
import Testimonials from "../components/testimonials/Testimonials";
import Button from "../components/button/Button";
import BuildAndroidApp from "../components/build-android-app/BuildAndroidApp";
import Percentage from "../components/svg/Percentage";
import Enquiry from "../components/enquiry/Enquiry";

function DividerLine() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1518 10"
      className="w-full pb-10 lg:pt-20 lg:pb-28 "
    >
      <path
        fill="none"
        stroke="#bcccd5"
        strokeDasharray="1 5"
        strokeWidth="10"
        d="M0 4.998h1518"
        data-name="Path 28241"
      ></path>
    </svg>
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
      className="w-6 lg:w-20 mb-4"
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
      <div className="xl:w-5/6 w-11/12 max-w-[1300px] mx-auto">
        <div className="flex flex-wrap justify-between mt-8 mb-24">
          <div className="lg:w-[65%] w-full">
            <div className="flex flex-wrap justify-between items-center mt-3">
              <div className="w-full sm:w-1/2 pr-0 sm:pr-2">
                <div className="font-medium rounded inline-flex items-baseline text-xs uppercase mb-4 px-[8px] py-[8px] border border-custom-green">
                  <span className="mr-2">FOR AGES 10+</span>
                  <Image
                    src="https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/All-course-2021/product-thumbs-up.png"
                    height="15px"
                    width="15px"
                    alt="Thumps up"
                  />
                </div>
                <h1 className="sm:text-[27px] text-2xl font-bold">
                  India’s #1 Android App Course
                </h1>
              </div>
              <div className="w-full sm:w-1/2">
                <Image
                  src="https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/v2/banner-andoid.png"
                  width="300px"
                  height="280"
                />
              </div>
            </div>
            <AndroidApp />
          </div>

          <div className="lg:w-[32%] w-full lg:mt-0 mt-4">
            <Enquiry />
          </div>
        </div>

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
          <BuildAndroidApp />
          <div className="flex flex-wrap items-center justify-center lg:mt-20 mt-5 lg:w-1/2 w-full mx-auto">
            <Button text="BUY NOW" color="green" customClass="mx-4" />
            <Button text="GET MORE DETAILS" customClass="mx-4" />
          </div>
          <div className="align-middle text-center mx-auto">
            <Percentage />
            <span className="ml-2">
              {" "}
              <strong>EMI</strong> starts at ₹2,046. No Cost EMI available
            </span>
          </div>
        </div>

        <div className="lg:my-28 my-16">
          <div className="flex flex-wrap justify-between items-center">
            <div className="lg:w-1/2 w-full px-4">
              <h2 className="text-primary-blue mb-4 lg:text-[2rem] text-2xl font-semibold">
                India&apos;s #1 FUN <br />
                <span>LEARNING PLATFORM</span>
              </h2>
              <p className="font-normal lg:text-[2rem] text-lg mb-4">
                What&apos;s The Benefit For My Child?
              </p>
              <p className="mb-4 font-light lg:text-lg text-sm leading-[1.8]">
                The courses are specially designed by experts for ages 10+ to
                engage them well and useful. Coding and STEM Skills are
                essential skills for your child, but that&apos;s not the only
                benefits your child will get. Developing interpersonal skills
                through the hands-on experiments is the highlight of this course
              </p>
              <div className="lg:flex justify-center mt-8 hidden">
                <Button text="BUY NOW" color="green" />
              </div>
            </div>
            <SkillSets />
          </div>
          <div className="flex justify-center mt-4 lg:hidden">
            <Button text="BUY NOW" color="green" />
          </div>
        </div>
      </div>

      <div className="bg-light-green pb-0 lg:py-12">
        <div className="w-5/6 max-w-[1300px] mx-auto">
          <h2 className="text-center lg:mb-12 py-14 lg:pt-0 text-2xl lg:text-[2rem] font-semibold">
            How to Start Programming?
          </h2>
          <div className="mx-0 lg:mx-12">
            <Courses />
          </div>
        </div>
      </div>

      <div>
        <div className="relative lg:bg-transparent bg-[rgba(219,244,255,0.5)]">
          <div className="w-5/6 max-w-[1300px] mx-auto">
            <h2 className=" w-full lg:w-3/4 text-base lg:text-3xl font-light text-center m-auto leading-normal pt-0 lg:pt-16">
              Over 1 Lakh+ Parents like you from all over India have enrolled
              their child at SP Robotic Works and were thrilled with their
              child&apos;s progress and enthusiasm to learn and explore tech.
            </h2>
            <div className="flex flex-wrap justify-between items-center pt-16">
              <div className="w-[200px] flex flex-col items-center mb-4 lg:mb-24 mx-auto">
                <QuoteIcon />
                <h2 className="w-[200px] lg:mb-4 text-xl lg:text-[2rem] text-center font-semibold">
                  Parent <br />{" "}
                  <span className="block lg:mt-2 mt-0">Testimonials</span>
                </h2>
              </div>

              <div className=" w-full lg:w-[70%]">
                <Testimonials />
              </div>
            </div>
          </div>
          <TestimonialBg />
        </div>
      </div>
      <div className="w-5/6 max-w-[1300px] mx-auto">
        <Faqs />
        <div>
          <DividerLine />
        </div>

        <div className="flex flex-wrap justify-between items-center mb-14 lg:mb-32">
          <div className="lg:w-1/2 w-full">
            <Image
              src="https://storage.googleapis.com/sproboticworks/master/assets/images/marketing/All-course-2021/andriod-with-shield-maths-min.png"
              alt="Android App Course"
              height="427"
              width="650"
            />
          </div>
          <div className="w-full lg:w-1/2 pl-0 lg:pl-6">
            <h2 className="text-3xl font-bold mb-2 mt-8 leading-tight">
              ANDROID APP ONLINE COURSE
            </h2>
            <p className="font-normal mb-6 text-base lg:text-lg leading-relaxed">
              100+ Projects | Coding from Basics | Lifetime Access
              <br />
              Buy the Course for your child to experience the ultimate way to
              learn coding
              <br /> and join the community of 1 Lakh+ Students.
            </p>
            <span className="font-thin text-base">
              Price{" "}
              <span className="ml-1 text-3xl lg:text-4xl mb-4 text-black font-bold">
                {" "}
                INR 11,999.00/-
              </span>
            </span>
            <div className="flex flex-wrap items-center mt-10 w-full">
              <Button text="BUY NOW" color="green" />
              <Button text="GET MORE DETAILS" customClass="lg:ml-10 ml-0" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
