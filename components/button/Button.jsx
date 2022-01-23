function BlueButton({ text }) {
    return (
        <a
            href="#"
            className={`flex items-center justify-center px-4 py-2 border border-transparent  shadow-sm text-base font-medium text-white bg-primary-blue w-64 hover:border hover:border-primary-blue hover:text-primary-blue hover:bg-white transition duration-300 ease-in-out `}           >
            {text}
        </a>
    )
}

function GreenButton({ text }) {
    return (
        <a
            href="#"
            className={`flex items-center justify-center px-4 py-2 border border-transparent  shadow-sm text-base font-medium text-white bg-custom-green w-64 hover:border hover:border-custom-green hover:text-custom-green hover:bg-white transition duration-300 ease-in-out `}           >
            {text}
        </a>
    )
}

function Button({ text, color }) {
    return (
        <>
            {color === "green" ? <GreenButton text={text} /> : <BlueButton text={text} />}
        </>
    )
}

export default Button;