import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProjectsPage from '../pages/ProjectsPage'
import AboutPage from '../pages/AboutPage'
import PressPage from '../pages/PressPage'
import ContactPage from '../pages/ContactPage'
import LandingPage from '../pages/LandingPage'
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

export default function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div>
        <div>
          <nav className="bg-gray-800">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0 text-white">
                    [ logo ]
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4 text-white">
                        <Link to="/" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 no-underline rounded">Home</Link>
                        <Link to="/projects" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 no-underline rounded">Projects</Link>
                        <Link to="/about" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 no-underline rounded">About</Link>
                        <Link to="/press" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 no-underline rounded">Press</Link>
                        <Link to="/contact" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 no-underline rounded">Contact</Link>
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
                <div className="md:hidden w-full" id="mobile-menu">
                  <div ref={ref} className="px-2 pt-2 pb-3 sm:px-3 text-white block w-full">
                    <Link to="/" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 no-underline w-96">Home</Link><br/><br/>
                    <Link to="/projects" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 no-underline w-full">Projects</Link><br/><br/>
                    <Link to="/about" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 no-underline w-full">About</Link><br/><br/>
                    <Link to="/press" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 no-underline w-full">Press</Link><br/><br/>
                    <Link to="/contact" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 no-underline w-full">Contact</Link><br/>
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
