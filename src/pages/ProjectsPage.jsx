// src/pages/ProjectsPage.jsx

import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";

import projects from "../data/projectsData";

import "../components/Projects.css";

export default function ProjectsPage() {

  return (

    <section className="reveal projects-page">

      <div className="projects-page-container">

        <h2 className="reveal">
          <FaLaptopCode /> All Projects
        </h2>

        <div className="projects-grid">

          {projects.map((p) => (

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

        {/* BACK BUTTON */}

        <div className="view-all-container">

          <Link to="/" className="view-all-btn">
            ← Back to Home
          </Link>

        </div>

      </div>

    </section>

  );
}