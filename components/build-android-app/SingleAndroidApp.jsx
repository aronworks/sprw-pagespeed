import Image from "next/image";

function SingleAndroidApp({ image, title, desc }) {
    return (
        <div className="w-1/2 lg:w-1/4 text-center m-0">
            <Image src={image} alt="appone" height="168" width="200" />
            <div className="mx-[2rem] mt-4">
                <h2 className="text-xl font-medium mb-2 ">{title}</h2>
                <p className="text-base">{desc}</p>
            </div>
        </div>
    );
}

export default SingleAndroidApp;