import Image from 'next/image'


function CourseCard({ icon, caption, desc, altname }) {
    return (
        <div className='relative'>

            <div className="w-80 h-78 rounded-2xl shadow-2xl p-7">
                <div>
                    <Image src={icon} alt={altname} height=" 50" width="50" />
                    <p className="font-semibold w-28 mx-8 inline-block ">{caption}</p>
                </div>

                <div className="mt-8">
                    <p>{desc}</p>
                </div>
            </div >
            <div className="rounded-full bg-blue-500 text-white-100 w-10 h-10 flex justify-center items-center absolute right-1/2 translate-x-1/2 -bottom-6	 ">
                01
            </div>
        </div >



    )
}
export default CourseCard;