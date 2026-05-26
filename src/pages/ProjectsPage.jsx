
// src/pages/ProjectsPage.jsx

import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import projects from "../data/projectsData";

import "../styles/Projects.css";

export default function ProjectsPage() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    window.scrollTo(0, 0);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="reveal projects-page"
      ref={(el) => (sectionsRef.current[0] = el)}
    >
      <div className="projects-page-container">
        <h2 className="reveal">
          <FaLaptopCode /> All Projects
        </h2>

        <div className="projects-grid">
          {projects.map((p, index) => (
            <div
              className="project-card reveal"
              key={p.id}
              ref={(el) => (sectionsRef.current[index + 1] = el)}
            >
              <h3>{p.title}</h3>

              <h4>Overview</h4>

              <p className="description">{p.shortDescription}</p>

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

              <Link to={`/project/${p.id}`} className="project-link">
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
