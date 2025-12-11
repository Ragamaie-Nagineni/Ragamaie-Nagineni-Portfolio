import { FaLaptopCode } from "react-icons/fa";
import "./Projects.css";  // we will create this file

export default function Projects() {
  const projects = [
    {
      title: "Hybrid Secure Cloud Storage System",
      description:
        "A secure cloud storage system using AES hybrid encryption and AWS integration for scalable, encrypted file handling.",
      tech: ["AWS", "AES", "Node.js", "Express", "MongoDB", "JavaScript"],
      link: "https://github.com/Ragamaie-Nagineni/Hybrid-Secure-Cloud-Storage-using-AES--hybrid-Symmetric-Encryption-and-AWS-Integration",
      id: "cloud-storage",
    },
    {
      title: "DRAKZ – Full Stack Web Application",
      description:
        "A full-stack system built as part of IIIT coursework with authentication, responsive UI, and modular backend APIs.",
      tech: ["React", "Node.js", "Express", "MongoDB", "CSS"],
      link: "https://github.com/Ragamaie-Nagineni/DRKZ-1",
      id: "drakz",
    },
    {
      title: "Netflix Stock Data Analytics",
      description:
        "20-year Netflix stock analysis using ML models such as Linear Regression, Random Forest, and SVR.",
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      link: "https://github.com/Ragamaie-Nagineni/Netflix-Stock-Predictor",
      id: "netflix",
    },
    {
      title: "Ant Colony Optimization Enhancement",
      description:
        "Improved performance of ACO using ML classifiers like Random Forest and Gradient Boosting.",
      tech: ["Python", "Sklearn", "ML", "Optimization"],
      link: "https://github.com/Ragamaie-Nagineni/improved-Multirace_AntColony_ParallelChoas_Search",
      id: "aco",
    },
  ];

  return (
    <section id="projects">
      <h2><FaLaptopCode /> Projects</h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.id}>
            <h3>{p.title}</h3>
            <p className="description">{p.description}</p>

            <div className="tech-stack">
              {p.tech.map((t) => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>

            <a href={`/project/${p.id}`} className="project-link">View project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
