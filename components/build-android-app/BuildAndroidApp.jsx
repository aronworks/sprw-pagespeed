import SingleAndroidApp from "./SingleAndroidApp";
import GameApp from "../../public/assets/images/game-app.svg";

function BuildAndroidApp() {
    return (
        <div className="flex flex-wrap justify-between items-center">
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
    )
}

export default BuildAndroidApp;