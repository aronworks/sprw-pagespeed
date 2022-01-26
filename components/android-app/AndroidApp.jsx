import AndroidAppIcon from "./AndroidAppIcon";
import Guidance from "../svg/Guidance";
import LearnAnytime from "../svg/LearnAnytime";
import Membership from "../svg/Membership";
import Students from "../svg/Students";

function AndroidApp() {
  return (
    <div className="lg:w-8/12 w-full flex justify-between flex-wrap mb-24">
      <AndroidAppIcon
        icon={<LearnAnytime />}
        caption={
          <>
            Learn <br />
            Anytime
          </>
        }
      />
      <AndroidAppIcon
        icon={<Guidance />}
        caption={
          <>
            1:1 Personalised <br />
            Guidance
          </>
        }
      />
      <AndroidAppIcon
        icon={<Students />}
        caption={
          <>
            1 Lakh <br />
            Students
          </>
        }
      />
      <AndroidAppIcon
        icon={<Membership />}
        caption={
          <>
            Lifelong <br />
            Membership
          </>
        }
      />
    </div>
  );
}
export default AndroidApp;
