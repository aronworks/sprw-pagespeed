import AndroidApp from "../components/android-app/AndroidApp";
import Faqs from "../components/faq/Faqs";
import DifferentApps from "../components/build-app/DifferentApps"
import SkillSets from "../components/learning-platform/SkillSets";
import Courses from "../components/programming/Courses";


export default function Home() {
  return (
    <section>
      <div className="w-5/6 mx-auto">
        {/* <AndroidApp /> */}
        <div>
          <div className="text-center">
            <h2 className="text-3xl font-bold ">What Android Apps will my child code and build?</h2>
            <p className="my-8 text-base">The best part about learning here is "No Prior coding Knowledge is Required</p>
            <p className="mb-8 text-lg">The entire course starts from the basics on how to code and is loaded with fun experiments that your child will enjoy. Each chapter will teach a new concept to your child and let him/her build an App thats fun and useful. Once learnt all concepts, imagination is the only limitation to build more wonderful Apps and solve Problems.</p>
          </div>


          <DifferentApps />
        </div>

        {/* <SkillSets /> */}
      </div>
      {/* <Courses />
      <Faqs /> */}
    </section>
  )
}