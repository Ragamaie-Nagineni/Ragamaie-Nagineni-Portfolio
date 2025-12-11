import { useParams } from "react-router-dom";
import "./ProjectDetails.css";

export default function ProjectDetails() {
  const { id } = useParams();

  const projectData = {
    "cloud-storage": {
      title: "Hybrid Secure Cloud Storage System",
      overview:
        "A secure cloud storage platform integrating AES hybrid encryption and AWS for reliable, scalable file handling.",
      features: [
        "AES Hybrid Encryption for enhanced security",
        "AWS S3-based cloud storage",
        "Encrypted upload/download pipeline",
        "Secure user access flow",
      ],
      tech: ["AES", "AWS S3", "Node.js", "Express", "MongoDB"],
      images: [], // You can add images later
      github:
        "https://github.com/Ragamaie-Nagineni/Hybrid-Secure-Cloud-Storage-using-AES--hybrid-Symmetric-Encryption-and-AWS-Integration",
    },

    drakz: {
      title: "DRAKZ Full Stack Web App",
      overview: "Full-stack application with authentication, dashboards, and backend APIs.",
      features: ["Auth system", "Modular backend", "Responsive UI", "Database integration"],
      tech: ["React", "Node.js", "MongoDB"],
      images: [],
      github: "https://github.com/Ragamaie-Nagineni/DRKZ-1",
    },

    netflix: {
      title: "Netflix Stock Data Analytics",
      overview: "Data analysis & ML predictions based on 20 years of stock market patterns.",
      features: ["LR, RF, SVR models", "MSE evaluation", "Visualization graphs"],
      tech: ["Python", "Pandas", "Sklearn"],
      images: [],
      github: "https://github.com/Ragamaie-Nagineni/Netflix-Stock-Predictor",
    },

    aco: {
      title: "Ant Colony Optimization Enhancement",
      overview: "Performance-improved ACO algorithm using Machine Learning.",
      features: ["RF classifier", "Gradient Boosting", "Feature engineering"],
      tech: ["Python", "Sklearn"],
      images: [],
      github: "https://github.com/Ragamaie-Nagineni/improved-Multirace_AntColony_ParallelChoas_Search",
    },
  };

  const data = projectData[id];

  if (!data) return <h2>Project not found</h2>;

  return (
    <section id="project-details">
      <h2>{data.title}</h2>

      <p><strong>Overview:</strong> {data.overview}</p>

      <h3>Features</h3>
      <ul>
        {data.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <h3>Tech Stack</h3>
      <div className="detail-badges">
        {data.tech.map((t) => (
          <span className="badge" key={t}>{t}</span>
        ))}
      </div>

      <a href={data.github} target="_blank" className="project-link">
        View GitHub →
      </a>
    </section>
  );
}
