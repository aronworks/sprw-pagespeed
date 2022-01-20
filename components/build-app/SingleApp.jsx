import Image from 'next/image'

function SingleApp({ image, title, desc }) {
    return (
        <div className="w-1/4 text-center m-0">
            <Image src={image} alt="appone" height=" 168" width="200" />
            <div className="w-72 mx-auto">
                <h2 className="text-xl  font-bold mb-2">{title}</h2>
                <p >{desc}</p>
            </div>
        </div>
    )
}
export default SingleApp;