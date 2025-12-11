import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Extracurricular from "./components/Extracurricular.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";

import ProjectDetails from "./components/ProjectDetails.jsx";

import "./App.css";


import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/Ragamaie-Nagineni-Portfolio">
      <Navbar />

      <Routes>
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

        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
