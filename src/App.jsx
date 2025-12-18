import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Extracurricular from "./components/Extracurricular";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
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
          }
        />

        {/* PROJECT DETAILS */}
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>

      <footer>
        © {new Date().getFullYear()} Ragamaie Nagineni. All Rights Reserved.
      </footer>
    </HashRouter>
  );
}

export default App;
