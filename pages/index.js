import AndroidApp from "../components/android-app/AndroidApp";
import Faqs from "../components/faq/Faqs";
import DifferentApps from "../components/build-app/DifferentApps"
import SkillSets from "../components/learning-platform/SkillSets";
import Courses from "../components/programming/Courses";
import Footer from "../components/footer/footer";
import NavBar from "../components/nav-bar/NavBar";


export default function Home() {
  return (
    <section>
      {/* <div className="w-5/6 mx-auto"> */}
      {/* <AndroidApp /> */}
      {/* <div>
          <div className="text-center">
            <h2 className="text-3xl font-bold ">What Android Apps will my child code and build?</h2>
            <p className="my-8 text-base">The best part about learning here is "No Prior coding Knowledge is Required</p>
            <p className="mb-8 text-lg">The entire course starts from the basics on how to code and is loaded with fun experiments that your child will enjoy. Each chapter will teach a new concept to your child and let him/her build an App thats fun and useful. Once learnt all concepts, imagination is the only limitation to build more wonderful Apps and solve Problems.</p>
          </div>
          <DifferentApps />
        </div> */}
      {/* <div className="flex justify-between items-center">
          <div className="w-1/2">
            <h2 className="text-blue-500 mb-4 text-[2rem] font-semibold">India's #1 FUN <br /><span>LEARNING PLATFORM</span></h2>
            <p className="font-normal text-[2rem] mb-4">What's The Benefit For My Child?</p>
            <p className="mb-4 font-light text-lg leading-[1.8]">The courses are specially designed by experts for ages 10+ to engage them well and useful. Coding and STEM Skills are essential skills for your child, but that's not the only benefits your child will get. Developing interpersonal skills through the hands-on experiments is the highlight of this course</p>
          </div>
          <div>
            <SkillSets />
          </div>
        </div>
      </div> */}
      {/* <Courses />
      <Faqs /> */}
      {/* <Footer /> */}
      <NavBar />
    </section>
  )
}