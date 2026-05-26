// src/components/ProjectDetails.jsx

import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projectsData";

import "../styles/ProjectDetails.css";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

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

  // FIND PROJECT USING ID
  const data = projects.find((p) => p.id === id);

  // IF PROJECT NOT FOUND
  if (!data) {
    return (
      <section className="project-not-found">
        <h2>Project Not Found</h2>

        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </section>
    );
  }

  return (
    <section id="project-details">
      {/* BACK BUTTON */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back to Projects
      </button>

      {/* TITLE */}
      <h2
        className="project-title reveal"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        {data.title}
      </h2>

      {/* MAIN LAYOUT */}
      <div className="project-layout">
        {/* LEFT SIDE */}
        <div
          className="project-main reveal"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          {/* OVERVIEW */}
          <div className="project-section">
            <h3>Overview</h3>

            <p className="overview-text">
              {data.detailedDescription}
            </p>
          </div>

          {/* FEATURES */}
          <div className="project-section">
            <h3>Key Features</h3>

            <ul className="feature-list">
              {data.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* PROJECT IMAGES */}
          {data.images && data.images.length > 0 && (
            <div
              className="project-gallery reveal"
              ref={(el) => (sectionsRef.current[2] = el)}
            >
              <h3>Project Visuals</h3>

              <div className="project-images">
                {data.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${data.title} screenshot ${index + 1}`}
                    className="project-image"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div
          className="project-side reveal"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          {/* TECH STACK */}
          <div className="side-card">
            <h3>Tech Stack</h3>

            <div className="detail-badges">
              {data.tech.map((tech, index) => (
                <span className="badge" key={index}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* GITHUB */}
          <div className="side-card">
            <h3>Repository</h3>

            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}