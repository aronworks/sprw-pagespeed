import AndroidAppIcon from "./AndroidAppIcon";
import TimerIcon from "../../public/assets/images/timer.svg";

function AndroidApp() {
  return (
    <div className=" w-1/2 flex justify-between flex-wrap  ">
      <AndroidAppIcon icon={TimerIcon} caption=" Learn Anytime" />
      <AndroidAppIcon icon={TimerIcon} caption="1:1 Personalised Guidance" />
      <AndroidAppIcon icon={TimerIcon} caption=" 1 Lakh Students" />
      <AndroidAppIcon icon={TimerIcon} caption=" Lifelong Membership" />
    </div>
  );
}
export default AndroidApp;
