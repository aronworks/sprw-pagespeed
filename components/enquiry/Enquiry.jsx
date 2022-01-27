import Select from "react-select";
import AsyncSelect from "react-select/async";

function Enquiry({ title, tagLine, btnText }) {
  const gradeOptions = [
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
  ];

  const selectStyle = {
    control: (base) => ({
      ...base,
      borderRadius: "25px",
      paddingTop: "2px",
      paddingBottom: "2px",
      paddingLeft: "2rem",
    }),
  };

  const colourOptions = [
    { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
    { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630", isFixed: true },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" },
  ];

  const handleCityChange = () => {};

  const filterColors = (inputValue) => {
    return colourOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const citiesOptions = async (searchQuery) => {
    const response = await fetch(
      `https://sproboticworks.com/franchise/cities/search?search=${searchQuery}`
    );

    const responseJSON = await response.json();

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterColors(searchQuery));
      }, 1000);
    });
  };

  return (
    <div className="shadow-2xl py-10 px-5">
      <h2>{title || "Book your FREE Demo"}</h2>
      <span>
        {tagLine || "10,000 FREE Demo last week! Hurry, Limited slots!"}
      </span>
      <form action="">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-4 h-auto absolute top-1/2 left-4 -translate-y-1/2"
          >
            <path
              fill="#808080"
              d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
            ></path>
          </svg>
          <input
            type="text"
            placeholder="Enter Child Name*"
            name="child_name"
            required
            className="rounded-[25px] w-full py-2 pr-5 pl-10 border-gray-400 border-[1px] outline-none focus:ring-[#2684ff] focus:ring-1 focus:border-[#2684ff]"
          />
        </div>

        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-4 h-auto absolute top-1/2 left-4 -translate-y-1/2"
          >
            <path
              fill="#808080"
              d="M497.39 361.8l-112-48a24 24 0 00-28 6.9l-49.6 60.6A370.66 370.66 0 01130.6 204.11l60.6-49.6a23.94 23.94 0 006.9-28l-48-112A24.16 24.16 0 00122.6.61l-104 24A24 24 0 000 48c0 256.5 207.9 464 464 464a24 24 0 0023.4-18.6l24-104a24.29 24.29 0 00-14.01-27.6z"
            ></path>
          </svg>
          <div className="absolute top-1/2 left-10 -translate-y-1/2 text-gray-400 border-r pr-2 border-[#6c757d]">
            +91
          </div>
          <input
            type="number"
            placeholder="Enter Contact Number*"
            name="contact"
            required
            className="rounded-[25px] w-full py-2 pr-5 pl-20 border-gray-400 border-[1px] outline-none focus:ring-[#2684ff] focus:ring-1 focus:border-[#2684ff]"
          />
        </div>

        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="w-5 h-auto absolute top-1/2 left-4 -translate-y-1/2 z-10"
          >
            <path
              fill="#808080"
              d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"
            ></path>
          </svg>
          <Select
            options={gradeOptions}
            placeholder="Select Grade*"
            styles={selectStyle}
          />
        </div>

        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="w-3 h-auto absolute top-1/2 left-4 -translate-y-1/2 z-10"
          >
            <path
              fill="#808080"
              d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
            ></path>
          </svg>

          <AsyncSelect
            cacheOptions
            defaultOptions
            name="city"
            styles={selectStyle}
            loadOptions={citiesOptions}
            placeholder="Search City*"
          />
        </div>

        <button>{btnText || "Book Now"}</button>
      </form>
      <div>
        <p>Receive updates about my child and courses on Whatsapp and SMS</p>
      </div>
    </div>
  );
}

export default Enquiry;
