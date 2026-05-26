// src/components/Projects.jsx

import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";

import projects from "../data/projectsData";

import "../styles/Projects.css";

export default function Projects() {

  // SHOW ONLY TOP 3 PROJECTS
  const featuredProjects = projects.slice(0, 3);

  return (

    <section id="projects" className="reveal">

      <h2 className="reveal">
        <FaLaptopCode /> Projects
      </h2>

      <div className="projects-grid">

        {featuredProjects.map((p) => (

          <div className="project-card" key={p.id}>

            <h3>{p.title}</h3>

            <h4>Overview</h4>

            <p className="description">
              {p.overview}
            </p>

            {/* FEATURES */}

            {/*

            <h4>Features</h4>

            <ul className="feature-list">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            */}

            <h4>Tech Stack</h4>

            <div className="tech-stack">

              {p.tech.map((t) => (

                <span key={t} className="badge">
                  {t}
                </span>

              ))}

            </div>

            <Link
              to={`/project/${p.id}`}
              className="project-link"
            >
              View project →
            </Link>

          </div>

        ))}

      </div>

      {/* VIEW ALL BUTTON */}

      <div className="view-all-container">

        <Link to="/projects" className="view-all-btn">
          View All Projects
        </Link>

      </div>

    </section>

  );
}