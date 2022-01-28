import { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Logo from "../logo/Logo";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Popover className="relative bg-white drop-shadow">
      <div className=" mx-auto px-4 sm:px-6 max-w-[91%]">
        <div className="flex justify-between items-center py-5 lg:justify-start xl:space-x-10 space-x-5">
          <div className="flex justify-start">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-blue">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
            <Popover.Group
              as="nav"
              className="hidden lg:flex xl:space-x-10 space-x-5 lg:items-center"
            >
              <a
                href="#"
                className="text-sm xl:text-base font-medium hover:text-gray-900"
              >
                NCRC
              </a>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className="group bg-white rounded-md inline-flex items-center text-sm xl:text-base font-medium text-custom-dark-blue focus:outline-none">
                      <span>Explore Kits</span>
                      <ChevronDownIcon
                        className="ml-1 h-5 w-5 text-custom-dark-blue"
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-60 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="px-3 py-3 bg-gray-50">
                            <div className="text-center text-sm font-medium text-gray-500">
                              Junior (Age 7+)
                            </div>
                          </div>
                          <div className="relative grid gap-6 bg-white px-5 py-6">
                            <Link href="/">
                              <a className="-m-3 p-3 rounded-lg hover:bg-gray-50">
                                <p className="text-sm text-center font-medium text-gray-900">
                                  Electro-Blocks Kit
                                </p>
                              </a>
                            </Link>

                            <Link href="/">
                              <a className="-m-3 p-3 rounded-lg hover:bg-gray-50">
                                <p className="text-sm text-center font-medium text-gray-900">
                                  Scratch Programming Course
                                </p>
                              </a>
                            </Link>
                          </div>
                          <div className="px-3 py-3 bg-gray-50">
                            <div className="text-center text-sm font-medium text-gray-500">
                              Senior (Age 10+)
                            </div>
                          </div>
                          <div className="relative grid gap-6 bg-white px-5 py-6">
                            <Link href="/">
                              <a className="-m-3 p-3 rounded-lg hover:bg-gray-50">
                                <p className="text-sm text-center font-medium text-gray-900">
                                  Codey Inventor Kit
                                </p>
                              </a>
                            </Link>

                            <Link href="/">
                              <a className="-m-3 p-3 rounded-lg hover:bg-gray-50">
                                <p className="text-sm text-center font-medium text-gray-900">
                                  Android App Course
                                </p>
                              </a>
                            </Link>

                            <div className="text-sm -m-3 p-3 text-center">
                              <a
                                href="#"
                                className="font-medium text-primary-blue/80 hover:text-primary-blue"
                              >
                                View All Courses/Kits{" "}
                                <span aria-hidden="true">&rarr;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <a
                href="#"
                className="text-sm xl:text-base font-medium hover:text-gray-900"
              >
                Learn at a Centre
              </a>
              <a
                href="#"
                className="text-sm xl:text-base font-medium hover:text-gray-900"
              >
                Maker Corner
              </a>
              <a
                href="#"
                className="text-sm xl:text-base font-medium hover:text-gray-900"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="ml-8 text-sm xl:text-base whitespace-nowrap inline-flex items-center justify-center xl:px-4 py-2 px-3 border border-transparent shadow-sm font-medium text-white bg-primary-blue w-20 xl:w-28 hover:border-primary-blue hover:text-primary-blue hover:bg-white transition duration-300 ease-in-out"
              >
                Login
              </a>
            </Popover.Group>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 z-10 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Logo />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-blue">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href={""}
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <SupportIcon
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      NCRC
                    </span>
                  </a>
                  <a
                    href={""}
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <SupportIcon
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Explore Kits
                    </span>
                  </a>
                  <a
                    href={""}
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <SupportIcon
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Learn at a Centre
                    </span>
                  </a>
                  <a
                    href={""}
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <SupportIcon
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Maker Corner
                    </span>
                  </a>
                  <a
                    href={""}
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <SupportIcon
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Contact Us
                    </span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <a
                  href="#"
                  className="w-1/2 text-sm xl:text-base flex items-center justify-center px-4 py-2 border border-transparent  shadow-sm font-medium text-white bg-primary-blue "
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
