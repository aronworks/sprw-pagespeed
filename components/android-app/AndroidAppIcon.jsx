import Image from "next/image";

function AndroidAppIcon({ icon, caption }) {
  return (
    <div className="flex justify-start items-center w-1/2 mb-6 lg:odd:border-r lg:even:pl-8 even:pl-0 odd:border-r-0">
      <div className="lg:h-[65px] lg:w-[65px] h-12 w-12 flex justify-center items-center">
        {icon}
      </div>
      <span className="sm:ml-8 ml-4 sm:text-base text-sm text-[#6c757d]">
        {caption}
      </span>
    </div>
  );
}

export default AndroidAppIcon;
