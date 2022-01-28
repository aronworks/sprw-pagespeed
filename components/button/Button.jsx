function BlueButton({ text, customClass }) {
  return (
    <a
      href="#"
      className={`${customClass} flex items-center justify-center px-4 py-2 border border-transparent  shadow-sm text-base font-medium text-white bg-primary-blue w-full lg:w-2/5 lg:max-w-64 hover:border hover:border-primary-blue hover:text-primary-blue hover:bg-white transition duration-300 ease-in-out mb-6 `}
    >
      {text}
    </a>
  );
}

function GreenButton({ text, customClass }) {
  return (
    <a
      href="#"
      className={`${customClass} flex items-center justify-center px-4 py-2 border border-transparent  shadow-sm text-base font-medium text-white bg-custom-green w-full lg:w-2/5 lg:max-w-64 hover:border hover:border-custom-green hover:text-custom-green hover:bg-white transition duration-300 ease-in-out mb-6 `}
    >
      {text}
    </a>
  );
}

function Button({ text, color, customClass }) {
  return (
    <>
      {color === "green" ? (
        <GreenButton text={text} customClass={customClass} />
      ) : (
        <BlueButton text={text} customClass={customClass} />
      )}
    </>
  );
}

export default Button;
