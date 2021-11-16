import { Transition } from "@headlessui/react";
import { useRouter } from 'next/router';
import { ReactNode, useState } from "react";
import { SvgLogo } from "./Icons";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <div>
        <nav className="bg-white fixed w-full z-50 border-b border-gray-400">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 text-gray-800">
                  <NavButton location="/"><SvgLogo className="w-10 h-10" /></NavButton>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex space-x-2 text-gray-700 hover:text-black w-full text-center">
                    <NavButton location="/">Home</NavButton>
                    <NavButton location="/projects">Projects</NavButton>
                    <NavButton location="/about">About</NavButton>
                    <NavButton location="/team">Team</NavButton>
                    <NavButton location="/press">Press</NavButton>
                    <NavButton location="/contact">Contact</NavButton>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-white bg-opacity-40 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen
                    ? <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /> </svg>
                    : <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> </svg>
                  }
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden w-full bg-white z-50" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 sm:px-3 text-black w-full flex flex-col">
                  <NavButton location="/">Home</NavButton>
                  <NavButton location="/projects">Projects</NavButton>
                  <NavButton location="/about">About</NavButton>
                  <NavButton location="/team">Team</NavButton>
                  <NavButton location="/press">Press</NavButton>
                  <NavButton location="/contact">Contact</NavButton>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
    </div>
  );
}

const NavButton = ({ location, children }: { location: string, children?: ReactNode }) => {

  const router = useRouter();

  const handleClick = (e: { preventDefault: () => void; }) => {
    router.push(location)
  }

  return (
    <button className="hover:bg-white py-2 px-4 no-underline hover:bg-opacity-40 transition-all duration-100" onClick={handleClick}>
      {children}
    </button>
  );
}

export default Navbar;