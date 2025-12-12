// src/components/Projects.jsx

import { FaLaptopCode } from "react-icons/fa";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      id: "cloud-storage",
      title: "Hybrid Secure Cloud Storage System",
      overview:
        "A secure cloud storage system that uses AES-based hybrid encryption integrated with AWS for scalable, encrypted file management.",
      features: [
        "AES hybrid encryption pipeline for secure file transfer",
        "AWS S3 integration for reliable cloud storage",
        "Encrypted upload/download workflow",
        "User-focused access management and authentication"
      ],
      tech: ["AES", "AWS S3", "Node.js", "Express", "MongoDB"]
    },

    {
      id: "drakz",
      title: "DRAKZ – Full Stack Web Application",
      overview:
        "A full-stack application built as part of IIIT coursework, consisting of authentication, modular backend APIs, and dashboard-driven UI.",
      features: [
        "Secure authentication & session handling",
        "Dynamic dashboards with interactive UI",
        "API-based backend architecture",
        "Fully responsive and modular design"
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "CSS"]
    },

    {
      id: "netflix",
      title: "Netflix Stock Data Analytics",
      overview:
        "A 20-year Netflix stock analysis project comparing machine learning regression methods to evaluate long-term stock behavior.",
      features: [
        "Data cleaning and trend exploration on historical Netflix data",
        "Regression models: Linear Regression, Random Forest, SVR",
        "Model evaluation using MSE and R²",
        "Visualization of time-series trends"
      ],
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"]
    },

    {
      id: "aco",
      title: "Ant Colony Optimization Enhancement",
      overview:
        "Enhanced Ant Colony Optimization using machine learning to improve convergence and decision-making efficiency.",
      features: [
        "Random Forest classifier for improved decision-making",
        "Feature engineering to optimize performance",
        "Comparison with traditional ACO algorithm",
        "Experiment-based evaluation"
      ],
      tech: ["Python", "Scikit-learn", "Machine Learning", "Optimization"]
    }
  ];

  return (
    <section id="projects">
      <h2><FaLaptopCode /> Projects</h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.id}>
            
            <h3>{p.title}</h3>

            <h4>Overview</h4>
            <p className="description">{p.overview}</p>

            <h4>Features</h4>
            <ul className="feature-list">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <h4>Tech Stack</h4>
            <div className="tech-stack">
              {p.tech.map((t) => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>

            <a href={`/Ragamaie-Nagineni-Portfolio/project/${p.id}`} className="project-link">
              View project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
