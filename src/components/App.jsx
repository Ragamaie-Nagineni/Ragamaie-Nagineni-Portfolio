import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Extracurricular from "./Extracurricular";
import Resume from "./Resume";
import Contact from "./Contact";
import ProjectDetails from "./ProjectDetails";

import ProjectsPage from "../pages/ProjectsPage";

import useScrollReveal from "../hooks/useScrollReveal";

import "../styles/App.css";



function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Extracurricular />
      <Resume />
      <Contact />
    </>
  );
}

function App() {

  useScrollReveal();

  return (

    <HashRouter>

      {/* <ScrollToTop /> */}

      <Navbar />

      <Routes>

        {/* HOME PAGE */}

        <Route
          path="/"
          element={<HomePage />}
        />

        {/* ALL PROJECTS PAGE */}

        <Route
          path="/projects"
          element={<ProjectsPage />}
        />

        {/* PROJECT DETAILS */}

        <Route
          path="/project/:id"
          element={<ProjectDetails />}
        />

      </Routes>

      <footer>
        © {new Date().getFullYear()} Ragamaie Nagineni. All Rights Reserved.
      </footer>

    </HashRouter>

  );
}

export default App;