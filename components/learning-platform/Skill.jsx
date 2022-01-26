function Skill({ icon, caption, odd }) {
  return (
    <div
      className={`text-center lg:w-60 w-36 lg:h-60 h-40 mb-8 ml-auto mr-auto flex flex-col justify-center items-center rounded-lg lg:shadow-2xl shadow-md bg-white ${odd ? `top-16 static lg:relative` : ``
        }`}
    >
      <div className="lg:w-[100px] w-[50px] h-auto">{icon}</div>
      <p className="my-4 font-light text-sm lg:text-lg">{caption}</p>
    </div>
  );
}
export default Skill;
