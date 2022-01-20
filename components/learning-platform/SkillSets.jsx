import Skill from "./skill";
import Thinking from "../../public/assets/images/think.svg"



function SkillSets() {
    return (
        <div className="flex justify-between w-1/2">
            <div className="mt-12">
                <div>
                    <Skill icon={Thinking} caption="Logical Thinking Skills" />
                </div>
                <div className="mt-5">
                    <Skill icon={Thinking} caption="Problem & Solving Skills" />
                </div>
            </div>

            <div>
                <div>
                    <Skill icon={Thinking} caption="Creativity & Focus Thinking" />
                </div>
                <div className="mt-5">
                    <Skill icon={Thinking} caption="Cognitive &
Stem Skills" />
                </div>
            </div>
        </div>

    )
}

export default SkillSets;