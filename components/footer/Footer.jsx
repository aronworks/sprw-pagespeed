import Link from "next/link";
function Footer() {
  return (
    <div className="py-20 bg-custom-dark-blue p-3">
      <div className="w-5/6 mx-auto text-base font-normal leading-normal text-left text-white ">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="mb-4 p-2">company</span>
            <Link href="/">
              <a className="mb-3 p-2">Press</a>
            </Link>

            <Link href="/">
              <a className="mb-3 p-2">About Us</a>
            </Link>
            <Link href="/">
              <a className="mb-3 p-2">Contact Us</a>
            </Link>
            <Link href="/">
              <a className="mb-3 p-2">Career</a>
            </Link>
            <Link href="/">
              <a className="mb-3 p-2">Franchise</a>
            </Link>
            <Link href="/">
              <a className="mb-3 p-2">Tech Ladder</a>
            </Link>
            <Link href="/">
              <a className="mb-3 p-2">News & Blogs</a>
            </Link>

            <Link href="/">
              <a className="mb-3 p-2">FAQ</a>
            </Link>
          </div>
          <div className="flex flex-col ">
            <span className="mb-4 p-2">LEGAL & PRIVACY</span>
            <Link href="/">
              <a className="mb-3 p-2">Terms & Conditions</a>
            </Link>

            <Link href="/">
              <a className="mb-3 p-2">Privacy Policy</a>
            </Link>
            <Link href="/">
              <a className="mb-3 p-2">Disclaimer</a>
            </Link>
            <Link href="/">
              <a className="mb-3 p-2">Shipping And Delivery Policy</a>
            </Link>
            <Link href="/">
              <a className="mb-3 p-2">Return Policy</a>
            </Link>
          </div>
          <div className="flex flex-col">
            <span className="mb-4  p-2">COURSES</span>
            <Link href="/">
              <a className="mb-3 p-2">
                Learn Android For{" "}
                <span className="text-blue-500 underline">Free</span>{" "}
              </a>
            </Link>
            <Link href="/">
              <a className="mb-3 p-2">
                Learn Scratch Programming For
                <span className="text-blue-500 underline">Free </span>{" "}
              </a>
            </Link>
            <Link href="/">
              <a className="mb-3 p-2">Summer Camp At Nearby Centre</a>
            </Link>
          </div>
        </div>
        <hr className="border-t-2 border-gray-500 w-5/6 mx-auto mb-4" />
        <div>
          <div className="my-4 p-2 w-[356px]">
            <span className="font-medium text-lg mb-4 ">
              Subscribe News letter
            </span>
            <div>
              <input
                type="email"
                placeholder="Enter e-mail address"
                className="bg-white text-gray-900 h-12 px-5 leading-10 w-8/12"
              />
              <button type="submit">Subscribe</button>
            </div>
            © 2020 SP ROBOTIC WORKS.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
