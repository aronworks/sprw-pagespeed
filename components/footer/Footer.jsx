import { useState } from "react";
import FollowUs from "../../components/media/FollowUs";
import Link from "next/link";

function CompanyLinks() {
  return (
    <>
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
    </>
  );
}

function LegalAndProvacyLinks() {
  return (
    <>
      <Link href="/">
        <a className="mb-3 p-2 hover:text-primary-blue">Terms & Conditions</a>
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
    </>
  );
}

function CoursesLinks() {
  return (
    <>
      <Link href="/">
        <a className="mb-3 p-2 hover:text-primary-blue">
          Learn Android For{" "}
          <span className="text-blue-500 underline">Free</span>
        </a>
      </Link>
      <Link href="/">
        <a className="mb-3 p-2 hover:text-primary-blue">
          Learn Scratch Programming For{" "}
          <span className="text-blue-500 underline">Free</span>
        </a>
      </Link>
      <Link href="/">
        <a className="mb-3 p-2 hover:text-primary-blue">
          Summer Camp At Nearby Centre
        </a>
      </Link>
    </>
  );
}

function FooterLinks() {
  return (
    <div className="flex-wrap justify-between hidden lg:flex mb-12">
      <div className="flex flex-col">
        <span className="mb-4 p-2">COMPANY</span>
        <CompanyLinks />
      </div>
      <div className="flex flex-col">
        <span className="mb-4 p-2">LEGAL & PRIVACY</span>
        <LegalAndProvacyLinks />
      </div>
      <div className="flex flex-col">
        <span className="mb-4  p-2">COURSES</span>
        <CoursesLinks />
      </div>
    </div>
  );
}

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
    <footer className="lg:py-20 pt-10 pb-40 bg-custom-dark-blue p-3">
      <div className="xl:w-5/6 w-11/12 max-w-[1300px] mx-auto text-base font-normal leading-normal text-left text-white">
        <FooterLinks />
        <hr className="border-t border-[#111c32] xl:w-5/6 w-11/12 max-w-[1300px] mx-auto mb-4" />
        <div className="flex flex-wrap justify-between text-lg font-medium">
          <div className="lg:my-4 my-1 p-2 lg:w-[375px] w-full">
            <span className="font-medium text-lg mb-4 block text-center lg:text-left">
              Subscribe News letter
            </span>
            <form onSubmit={onSubmitsubscribeNewsLetter}>
              <div className="lg:my-6 my-1 flex items-center justify-center">
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
          </div>

          <div className="lg:my-4 my-1 p-2">
            <span className="lg:block mb-4 hidden">Contact Info</span>
            <Link href="/">
              <a className="mb-3 hover:text-primary-blue ">
                1800-121-2135 (TollFree)
              </a>
            </Link>
          </div>
          <div className="lg:my-4 my-1 p-2">
            <span className="lg:block mb-4 hidden">Email:</span>
            <Link href="/">
              <a className="mb-3 hover:text-primary-blue  ">
                info@sproboticworks.com
              </a>
            </Link>
          </div>

          <div className="my-4 p-2 w-full lg:w-auto">
            <FollowUs />
          </div>
        </div>

        <div className="block lg:hidden">
          <details className="group question">
            <summary className="flex items-center font-bold py-4 cursor-pointer">
              COMPANY
              <button className="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  className="group-open:hidden"
                  fill="#fff"
                >
                  <path d="M24 10H14V0h-4v10H0v4h10v10h4V14h10z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  className="hidden group-open:block"
                  fill="#fff"
                >
                  <path d="M0 10h24v4h-24z" />
                </svg>
              </button>
            </summary>
            <div className="flex flex-col font-light text-base lg:text-lg pb-6 pt-4 px-5">
              <CompanyLinks />
            </div>
          </details>
          <details className="group question">
            <summary className="flex items-center font-bold py-4 cursor-pointer">
              LEGAL & PRIVACY
              <button className="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  className="group-open:hidden"
                  fill="#fff"
                >
                  <path d="M24 10H14V0h-4v10H0v4h10v10h4V14h10z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  className="hidden group-open:block"
                  fill="#fff"
                >
                  <path d="M0 10h24v4h-24z" />
                </svg>
              </button>
            </summary>
            <div className="flex flex-col font-light text-base lg:text-lg pb-6 pt-4 px-5">
              <LegalAndProvacyLinks />
            </div>
          </details>
          <details className="group question">
            <summary className="flex items-center font-bold py-4 cursor-pointer">
              COURSES
              <button className="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  className="group-open:hidden"
                  fill="#fff"
                >
                  <path d="M24 10H14V0h-4v10H0v4h10v10h4V14h10z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  className="hidden group-open:block"
                  fill="#fff"
                >
                  <path d="M0 10h24v4h-24z" />
                </svg>
              </button>
            </summary>
            <div className="flex flex-col font-light text-base lg:text-lg pb-6 pt-4 px-5">
              <CoursesLinks />
            </div>
          </details>
        </div>

        <hr className="border-t border-[#111c32] xl:w-5/6 w-11/12 max-w-[1300px] mx-auto mb-4 block lg:hidden" />
        <span className="text-[#5c626e] text-[11px] text-center lg:text-left block pt-5 lg:pt-0">
          © 2020 SP ROBOTIC WORKS.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
