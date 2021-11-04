import { Transition } from "@headlessui/react";
import { useState } from "react";
import {
  BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";
import { SvgLogo } from "../images/brand/Icons";
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import LandingPage from '../pages/LandingPage';
import PressPage from '../pages/PressPage';
import ProjectsPage from '../pages/ProjectsPage';
import TeamPage from '../pages/TeamPage';

export default function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="overflow-hidden">
        <div>
          <nav className="bg-white fixed w-full z-50 border-b border-gray-400">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0 text-gray-800">
                    <Link to="/" className="flex flex-row"><SvgLogo className="w-10 h-10" /></Link>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex space-x-2 text-gray-700 hover:text-black w-full text-center">
                        <Link to="/" className="hover:bg-white py-2 px-4 no-underline hover:bg-opacity-40 transition-all duration-100">Home</Link>
                        <Link to="/projects" className="hover:bg-white py-2 px-4 no-underline hover:bg-opacity-40 transition-all duration-100">Projects</Link>
                        <Link to="/about" className="hover:bg-white py-2 px-4 no-underline hover:bg-opacity-40 transition-all duration-100">About</Link>
                        <Link to="/team" className="hover:bg-white py-2 px-4 no-underline hover:bg-opacity-40 transition-all duration-100">Team</Link>
                        <Link to="/press" className="hover:bg-white py-2 px-4 no-underline hover:bg-opacity-40 transition-all duration-100">Press</Link>
                        <Link to="/contact" className="hover:bg-white py-2 px-4 no-underline hover:bg-opacity-40 transition-all duration-100">Contact</Link>
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
                    ?<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /> </svg>
                    :<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> </svg>
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
                  <div ref={ref} className="px-2 pt-2 pb-3 sm:px-3 text-black block w-full">
                    <Link to="/" className="py-2 px-4 no-underline w-full block">Home</Link>
                    <Link to="/projects" className="py-2 px-4 no-underline w-full block">Projects</Link>
                    <Link to="/about" className="py-2 px-4 no-underline w-full block">About</Link>
                    <Link to="/team" className="py-2 px-4 no-underline w-full block">Team</Link>
                    <Link to="/press" className="py-2 px-4 no-underline w-full block">Press</Link>
                    <Link to="/contact" className="py-2 px-4 no-underline w-full block">Contact</Link>
                  </div>
                </div>
              )}
            </Transition>
          </nav>
        </div>

        <Switch>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/team">
            <TeamPage />
          </Route>
          <Route path="/press">
            <PressPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
