import { useState } from "react";
import FollowUs from "../../components/media/FollowUs";
import Link from "next/link";

function Footer() {
  const [userEmail, setUserEmail] = useState("");
  const [subscribeResponse, setSubscribeResponse] = useState(null);

  const handleChange = (e) => setUserEmail(e.target.value);

  const onSubmitsubscribeNewsLetter = async (e) => {
    e.preventDefault();
    try {
      let data = {
        news_letter_email: userEmail,
      };

      const response = await fetch(
        "https://sproboticworks.com/subscribe-news-letter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      setSubscribeResponse(response.data.message);
      setTimeout(function () {
        setSubscribeResponse(null);
      }, 10000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="py-20 bg-custom-dark-blue p-3">
      <div className="w-5/6 mx-auto text-base font-normal leading-normal text-left text-white  ">
        <div className="flex justify-between">
          <div className="flex flex-col mb-12 ">
            <span className="mb-4 p-2">COMPANY</span>
            <Link href="/">
              <a className="mb-3 p-2 hover:text-primary-blue">Press</a>
            </Link>

            <Link href="/">
              <a className="mb-3 p-2 hover:text-primary-blue">About Us</a>
            </Link>
            <Link href="/">
              <a className="mb-3 p-2 hover:text-primary-blue">Contact Us</a>
            </Link>
            <Link href="/">
              <a className="mb-3 p-2 hover:text-primary-blue">Career</a>
            </Link>
            <Link href="/">
              <a className="mb-3 p-2 hover:text-primary-blue">Franchise</a>
            </Link>
            <Link href="/">
              <a className="mb-3 p-2 hover:text-primary-blue">Tech Ladder</a>
            </Link>
            <Link href="/">
              <a className="mb-3 p-2 hover:text-primary-blue">News & Blogs</a>
            </Link>

            <Link href="/">
              <a className="mb-3 p-2 hover:text-primary-blue">FAQ</a>
            </Link>
          </div>
          <div className="flex flex-col ">
            <span className="mb-4 p-2 ">LEGAL & PRIVACY</span>
            <Link href="/">
              <a className="mb-3 p-2 hover:text-primary-blue">
                Terms & Conditions
              </a>
            </Link>

            <Link href="/">
              <a className="mb-3 p-2 hover:text-primary-blue">Privacy Policy</a>
            </Link>
            <Link href="/">
              <a className="mb-3 p-2 hover:text-primary-blue">Disclaimer</a>
            </Link>
            <Link href="/">
              <a className="mb-3 p-2 hover:text-primary-blue">
                Shipping And Delivery Policy
              </a>
            </Link>
            <Link href="/">
              <a className="mb-3 p-2 hover:text-primary-blue">Return Policy</a>
            </Link>
          </div>
          <div className="flex flex-col">
            <span className="mb-4  p-2">COURSES</span>
            <Link href="/">
              <a className="mb-3 p-2 hover:text-primary-blue">
                Learn Android For{" "}
                <span className="text-blue-500 underline">Free</span>{" "}
              </a>
            </Link>
            <Link href="/">
              <a className="mb-3 p-2 hover:text-primary-blue">
                Learn Scratch Programming For{" "}
                <span className="text-blue-500 underline">Free</span>{" "}
              </a>
            </Link>
            <Link href="/">
              <a className="mb-3 p-2 hover:text-primary-blue">
                Summer Camp At Nearby Centre
              </a>
            </Link>
          </div>
        </div>
        <hr className="border-t border-[#111c32] w-5/6 mx-auto mb-4 " />
        <div className="flex justify-between text-lg font- font-medium">
          <div className="my-4 p-2 w-[375px] ">
            <span className="font-medium text-lg mb-4 inline-block ">
              Subscribe News letter
            </span>
            <form onSubmit={onSubmitsubscribeNewsLetter}>
              <div className="mb-6 flex items-center justify-center">
                <input
                  value={userEmail}
                  onChange={handleChange}
                  required
                  type="email"
                  placeholder="Enter e-mail address"
                  className="bg-white text-gray-900 px-5 leading-10 h-[50px] w-[70%] outline-0"
                />
                <button
                  type="submit"
                  className=" h-[50px] text-center text-white bg-primary-blue hover:bg-green font-bold cursor-pointer w-4/12 leading-10 "
                >
                  Subscribe
                </button>
              </div>

              {subscribeResponse && (
                <div
                  className="absolute w-fit text-base rounded p-4 visible opacity-100 text-[#155724] bg-green-200 border-green-200"
                  role="alert"
                >
                  {subscribeResponse}
                </div>
              )}
            </form>
            <span className="text-[#5c626e] text-[11px]">
              © 2020 SP ROBOTIC WORKS.
            </span>
          </div>

          <div className="my-4 p-2 ">
            <span className="block mb-4 ">Contact Info</span>
            <Link href="/">
              <a className="mb-3 hover:text-primary-blue ">
                1800-121-2135 (TollFree)
              </a>
            </Link>
          </div>
          <div className="my-4 p-2">
            <span className="block mb-4 ">Email:</span>
            <Link href="/">
              <a className="mb-3 hover:text-primary-blue  ">
                info@sproboticworks.com
              </a>
            </Link>
          </div>
          <div className="my-4 p-2 ">
            <FollowUs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
