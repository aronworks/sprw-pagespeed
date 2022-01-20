import SingleApp from "../build-app/SingleApp";
import GameApp from "../../public/assets/images/game-app.svg"


function DifferentApps() {
    return (
        <div className="flex justify-between items-center">
            <SingleApp image={GameApp} title="Build Your Own Game" desc="Let your child learn to build cool Android game apps like Football!" />
            <SingleApp image={GameApp} title="Voice Recognition App" desc="Let your child interact with the computer using voice recognition" />
            <SingleApp image={GameApp} title="GPS Locator App" desc="Let them acquire the skills to build a Live Location tracker" />
            <SingleApp image={GameApp} title="Pedometer App" desc="A simple application to track the step count while we walk" />
        </div>
    )
}

export default DifferentApps;