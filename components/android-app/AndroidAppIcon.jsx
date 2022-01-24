import Image from "next/image";

function AndroidAppIcon({ icon, caption }) {
  return (
    <div className="flex justify-start items-center w-1/2 mb-6 odd:border-r pl-8">
      <div className="h-[65px] w-[65px] flex justify-center items-center">
        {icon}
      </div>
      <span className="ml-8 text-[#6c757d]">{caption}</span>
    </div>
  );
}

export default AndroidAppIcon;
