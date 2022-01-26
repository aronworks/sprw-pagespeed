import Skill from "./Skill";
import LogicalThinkingSkills from "../svg/LogicalThinkingSkills";
import CognitiveAndStemSkills from "../svg/CognitiveAndStemSkills";
import CreativityAndFocusThinking from "../svg/CreativityAndFocusThinking";
import ProblemAndSolvingSkills from "../svg/ProblemAndSolvingSkills";
import BackGround from "../svg/BackGround";

function SkillSets() {
  return (
    <div className="flex flex-wrap lg:w-1/2 w-full px-4 box-border relative lg:mt-o mt-6">
      <div className="absolute w-[650px] -z-10 -top-16 -left-24 sm:block hidden">
        <BackGround />
      </div>
      <Skill
        icon={<LogicalThinkingSkills />}
        caption={
          <>
            Logical <br /> Thinking Skills
          </>
        }
        odd
      />
      <Skill
        icon={<CreativityAndFocusThinking />}
        caption={
          <>
            Creativity &<br /> Focus Thinking
          </>
        }
      />
      <Skill
        icon={<ProblemAndSolvingSkills />}
        caption={
          <>
            Problem &<br /> Solving Skills
          </>
        }
        odd
      />
      <Skill
        icon={<CognitiveAndStemSkills />}
        caption={
          <>
            Cognitive &<br /> Stem Skills
          </>
        }
      />
    </div>
  );
}

export default SkillSets;
