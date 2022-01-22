import Image from "next/image";

function AndroidAppIcon({ icon, caption }) {
  return (
    <div className="flex justify-start items-center w-1/2 mb-10 odd:border-r-2 pl-4 ">
      <div>
        <Image src={icon} alt="namr" width="65" height="65" />
      </div>
      <span className="w-32 ml-8">{caption}</span>
    </div>
  );
}

export default AndroidAppIcon;
