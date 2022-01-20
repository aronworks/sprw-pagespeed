import CourseCard from "./CourseCard";
import BuyIcon from "../../public/assets/images/buy.svg"


function Courses() {
    return (
        <div className="flex justify-between">
            <CourseCard icon={BuyIcon} altname="Buy Course" caption="Buy Course Online" desc="Order the Course Online. The Payment can be made via our safe and secure Net banking or Card or Wallet Options." />
            <CourseCard icon={BuyIcon} altname="Buy Course" caption="Buy Course Online" desc="Order the Course Online. The Payment can be made via our safe and secure Net banking or Card or Wallet Options." />
            <CourseCard icon={BuyIcon} altname="Buy Course" caption="Buy Course Online" desc="Order the Course Online. The Payment can be made via our safe and secure Net banking or Card or Wallet Options." />
        </div>

    )
}

export default Courses;