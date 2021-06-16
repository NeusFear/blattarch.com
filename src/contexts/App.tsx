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

export default function App() {
  return (
    <Router>
      <div>
        <nav>
            <div className="w-full bg-gray-800 text-white flex flex-row fixed z-50">
                <p>logo here</p>
                <div className="flex flex-row flex-grow mx-6">
                    <Link to="/" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 no-underline">Home</Link>
                    <Link to="/projects" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 no-underline">Projects</Link>
                    <Link to="/about" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 no-underline">About</Link>
                    <Link to="/press" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 no-underline">Press</Link>
                    <Link to="/contact" className="bg-gray-700 hover:bg-gray-600 py-2 px-4 no-underline">Contact</Link>
                </div>
                <p>social links here</p>
            </div>
        </nav>

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
