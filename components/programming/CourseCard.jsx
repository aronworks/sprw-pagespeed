function CourseCard({ icon, caption, desc, count }) {
  return (
    <div className="relative drop-shadow rounded-2xl bg-white mb-20">
      <div className="p-6 lg:p-12 min-h-[240px] lg:min-h-[317px]">
        <div className="mb-8 flex">
          <div className="w-[35px] h-auto">{icon}</div>
          <p className="font-medium w-28 mx-8 inline-block ">{caption}</p>
        </div>

        <div className="font-light leading-[1.8]">{desc}</div>
      </div>
      <div className="rounded-full bg-primary-blue text-white-100 w-12 h-12 flex justify-center items-center absolute right-1/2 translate-x-1/2 -bottom-6 text-white">
        {count}
      </div>
    </div>
  );
}
export default CourseCard;
