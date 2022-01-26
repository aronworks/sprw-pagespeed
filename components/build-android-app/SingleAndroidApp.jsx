import Image from "next/image";

function SingleAndroidApp({ image, title, desc }) {
    return (
        <div className="w-[45%] lg:w-1/4 text-center m-0">
            <Image src={image} alt="appone" height="168" width="200" />
            <div className=" lg:mx-[2rem] mx-2 mb-8 lg:mb-0 mt-4">
                <h2 className="lg:text-xl text-base font-medium mb-2 ">{title}</h2>
                <p className="lg:text-base text-[13px] ">{desc}</p>
            </div>
        </div>
    );
}

export default SingleAndroidApp;