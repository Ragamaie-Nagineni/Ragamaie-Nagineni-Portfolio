// src/components/ProjectDetails.jsx

import { useParams } from "react-router-dom";
import "./ProjectDetails.css";

export default function ProjectDetails() {
  const { id } = useParams();

  const projectData = {
    "cloud-storage": {
      title: "Hybrid Secure Cloud Storage System",
      overview: `
        This project focuses on building a secure cloud storage solution that ensures 
        confidentiality, controlled access, and robust encryption. It integrates AES-based 
        hybrid symmetric encryption to secure files before they are uploaded and combines 
        it with AWS cloud infrastructure for scalability and high availability. 
        
        The system is designed to handle sensitive data by encrypting files client-side, 
        preventing unauthorized access even at the storage layer. AWS S3 is used for 
        storage, providing durability and fault tolerance, while the backend manages 
        encryption keys, authorization flow, and secure data retrieval.

        This solution demonstrates expertise in cloud security, cryptographic pipelines, 
        and building production-ready secure systems.
      `,
      features: [
        "AES hybrid encryption applied before cloud upload",
        "Client → Backend → AWS secure encrypted workflow",
        "AWS S3 integration with upload/download file management",
        "Role-based access and file permissions",
        "Backend API built for secure key handling"
      ],
      tech: ["AES", "AWS S3", "Node.js", "Express", "MongoDB"],
      github:
        "https://github.com/Ragamaie-Nagineni/Hybrid-Secure-Cloud-Storage-using-AES--hybrid-Symmetric-Encryption-and-AWS-Integration"
    },

    drakz: {
      title: "DRAKZ — Full Stack Web Application",
      overview: `
        DRAKZ is a full-stack application developed as part of the IIIT curriculum, 
        featuring modular backend services, authenticated user workflows, 
        and dynamic dashboards. The project emphasizes structured API design, 
        UI responsiveness, and a clean data flow across frontend, backend, 
        and database layers.

        The platform supports multiple user interactions, secure login, 
        and a well-designed component architecture. By adhering to separation 
        of concerns, the system ensures maintainability and reusable logic. 
        The frontend provides a smooth user experience while the backend handles 
        data validation, session management, and business logic.
      `,
      features: [
        "Secure authentication workflow",
        "Dashboard-based modular interface",
        "Backend REST API architecture",
        "Responsive, mobile-friendly UI",
        "Clean and reusable component structure"
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "CSS"],
      github: "https://github.com/Ragamaie-Nagineni/DRKZ-1"
    },

    netflix: {
      title: "Netflix Stock Data Analytics",
      overview: `
        This project performs long-term stock trend analysis on Netflix using 
        machine learning regression techniques. It processes 20+ years of historical 
        stock data, cleans and transforms the dataset, and builds predictive models 
        to estimate closing prices.

        The project compares multiple algorithms — including Linear Regression, 
        Random Forest Regressor, and Support Vector Regression — evaluating them 
        through metrics such as MSE and R². Using visual analytics, it highlights 
        stock behavior trends, seasonal patterns, market volatility, and prediction accuracy.

        This project showcases strong skills in data analysis, visualization, 
        regression modeling, and ML evaluation workflows.
      `,
      features: [
        "Processed 20+ years of stock data",
        "Implemented LR, RF, and SVR regression models",
        "Evaluated performance using MSE, R²",
        "Visualized stock trends using matplotlib",
        "Compared ML models for predictive efficiency"
      ],
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
      github: "https://github.com/Ragamaie-Nagineni/Netflix-Stock-Predictor"
    },

    aco: {
      title: "Ant Colony Optimization Enhancement",
      overview: `
        This project enhances the classical Ant Colony Optimization (ACO) algorithm 
        using machine learning to improve convergence speed, decision accuracy, 
        and optimization performance. The idea is to augment ACO by integrating 
        predictive models like Random Forest that guide ant decision-making using 
        learned heuristics.

        By engineering relevant features and training the model on ACO behaviors, 
        the project creates a hybrid optimization pipeline. This reduces randomness 
        in path selection, boosts convergence time, and improves overall solution quality.

        The work demonstrates knowledge in meta-heuristic optimization, ML-based 
        enhancement techniques, and experimental performance evaluation.
      `,
      features: [
        "ML-guided decision making within ACO",
        "Random Forest classifier to optimize path selection",
        "Feature engineering for algorithmic behavior analysis",
        "Performance comparison between classic and enhanced ACO",
        "Experimental evaluation pipeline"
      ],
      tech: ["Python", "Scikit-learn", "Machine Learning", "Optimization"],
      github:
        "https://github.com/Ragamaie-Nagineni/improved-Multirace_AntColony_ParallelChoas_Search"
    }
  };

  const data = projectData[id];
  if (!data) return <h2 style={{ padding: "100px", textAlign: "center" }}>Project Not Found</h2>;

  return (
    <section id="project-details">
      <h2>{data.title}</h2>

      <h3>Overview</h3>
      <p className="overview-text">{data.overview}</p>

      <h3>Key Features</h3>
      <ul>
        {data.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <h3>Tech Stack</h3>
      <div className="detail-badges">
        {data.tech.map((t) => (
          <span key={t} className="badge">{t}</span>
        ))}
      </div>

      <a href={data.github} className="project-link" target="_blank">
        View GitHub →
      </a>
    </section>
  );
}
