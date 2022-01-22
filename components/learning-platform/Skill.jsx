function Skill({ icon, caption, odd }) {
  return (
    <div
      className={`text-center w-60 h-60 mb-8 ml-auto mr-auto flex flex-col justify-center items-center rounded-lg shadow-2xl bg-white ${
        odd ? `top-16 relative` : ``
      }`}
    >
      <div className="w-[100px] h-auto">{icon}</div>
      <p className="my-4 font-light text-lg">{caption}</p>
    </div>
  );
}
export default Skill;
