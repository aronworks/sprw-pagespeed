import AndroidApp from "../components/android-app/AndroidApp";
import Faqs from "../components/faq/Faqs";
import SkillSets from "../components/learning-platform/SkillSets";
import Courses from "../components/programming/Courses";
import Footer from "../components/footer/footer";
import NavBar from "../components/nav-bar/NavBar";
import GameApp from "../public/assets/images/game-app.svg";
import Image from "next/image";

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

export default function Home() {
  return (
    <section>
      <div className="w-5/6 max-w-[1300px] mx-auto">
        <AndroidApp />
        <div>
          <div className="text-center">
            <h2 className="text-3xl font-bold ">
              What Android Apps will my child code and build?
            </h2>
            <p className="my-8 text-base">
              The best part about learning here is "No Prior coding Knowledge is
              Required
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
              India's #1 FUN <br />
              <span>LEARNING PLATFORM</span>
            </h2>
            <p className="font-normal text-[2rem] mb-4">
              What's The Benefit For My Child?
            </p>
            <p className="mb-4 font-light text-lg leading-[1.8]">
              The courses are specially designed by experts for ages 10+ to
              engage them well and useful. Coding and STEM Skills are essential
              skills for your child, but that's not the only benefits your child
              will get. Developing interpersonal skills through the hands-on
              experiments is the highlight of this course
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
      <Faqs />
      <Footer />
    </section>
  );
}
