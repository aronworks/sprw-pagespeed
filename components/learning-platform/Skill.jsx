import Image from 'next/image'


function Skill({ icon, caption }) {
    return (
        <div className="w-64 h-60 rounded-2xl shadow-2xl p-10 text-center">
            <div>
                <Image src={icon} alt="appone" height=" 100" width="100" />
            </div>
            <p className="mt-3 w-32 m-auto text-lg">{caption}</p>
        </div>
    )
}
export default Skill;

