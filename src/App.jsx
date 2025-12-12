import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    <BrowserRouter basename="/Ragamaie-Nagineni-Portfolio">
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
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

        {/* PROJECT DETAILS PAGE */}
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>

      <footer>
        © {new Date().getFullYear()} Ragamaie Nagineni. All Rights Reserved.
      </footer>
    </BrowserRouter>
  );
}

export default App;
